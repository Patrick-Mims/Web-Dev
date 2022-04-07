/* loc 163 
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const usp = require('UrlSearchParams');

const app = express();
const port = 3000;

const get_client_id = function () {
  return "499735ede6bc405d86a72b5356799bc3";
};

const get_client_secret = function () {
  return "43605fe4083b4c1591464f3644939ff";
};

const get_redirect_uri = function () {
  return "http://192.168.1.115";
};
*/

const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const querystring = require('querystring');
const request = require('request');

const client_id =       "499735ede6bc405d86a72b5356799bc3";
const client_secret =   "43605fe4083b4c1591464f3644939ff";
const redirect_uri =    "https://192.168.1.158:8888/callback"; 

const port = 3000;

var stateKey = 'spotify_auth_state';

var app = express();

app.use(express.static(__dirname + '/public'))
    .use(cors())
    .use(cookieParser());

app.get('/login', function(req, res) {

    console.log("Login Function");

    let scope = "user-read-private user-read-email";

    let generate_string = () => {
        let key = "";
        let list = "";

        list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for(let i = 0; i < 16; i++) {
            key += list.charAt(Math.floor(Math.random() * list.length));
        }

        return key;
    };

    let state = generate_string();

    res.cookie(stateKey, state);

    res.redirect("https://accounts.spotify.com/authorize?" +
        querystring.stringify({
            response_type: "code",
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state  
        }));
});

app.get('/callback', function(req, res) {

    // your application requests refresh and access tokens
    // after checking the state parameter

    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        res.redirect('/#' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        res.clearCookie(stateKey);
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {

                var access_token = body.access_token,
                    refresh_token = body.refresh_token;

                var options = {
                    url: 'https://api.spotify.com/v1/me',
                    headers: { 'Authorization': 'Bearer ' + access_token },
                    json: true
                };

                // use the access token to access the Spotify Web API
                request.get(options, function(error, response, body) {
                    console.log(body);
                });

                // we can also pass the token to the browser to make requests from there
                res.redirect('/#' +
                    querystring.stringify({
                        access_token: access_token,
                        refresh_token: refresh_token
                    }));
            } else {
                res.redirect('/#' +
                    querystring.stringify({
                        error: 'invalid_token'
                    }));
            }
        });
    }
});

app.get('/refresh_token', function(req, res) {

    // requesting access token from refresh token
    var refresh_token = req.query.refresh_token;
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
        form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        },
        json: true
    };

    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var access_token = body.access_token;
            res.send({
                'access_token': access_token
            });
        }
    });
});

app.listen(port, () => {
    console.log(`api-spotify app listening on port -> ${port}`);
});
