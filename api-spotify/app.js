var express = require('express');
var cors = require('cors');
var got = require('got');
var urlSearchParams = require('URLSearchParams');
var cookieParser = require('cookie-parser');

const ID = "fac2836e6cef44268ba5094444c6958a";
const SECRET = "76e6acdb3bb44f90979a23c23d6ae3e4";
const REDIRECT = 'REDIRECT';
const KEY = "spotify_auth_state";

var app = express();

var setRandomStr = _ => {
  let i = 0, len = 16, text = "";

  for (i; i < len.length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

app.use(express.static(__dirname + '/public')).use(cors()).use(cookieParser());

app.get('/login', function (req, res) {
  res.cookie(KEY, setRandomStr);

  let scope = "user-read-private user-read-email";
  res.redirect('https://accounts.spotify.com/authorize?' +
    urlSearchParams.stringify({
      response_type: 'code',
      ID: ID,
      scope: scope,
      redirect_uri: REDIRECT,
      state: state
    }));
});
app.get('/callback', function (req, res) {

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[KEY] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      urlSearchParams.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(KEY);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: REDIRECT,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(ID + ':' + SECRET).toString('base64'))
      },
      json: true
    };
    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
          refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function (error, response, body) {
          console.log(body);
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect('/#' +
          urlSearchParams.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/#' +
          urlSearchParams.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', function (req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(ID + ':' + SECRET).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

console.log('Listening on 8888');
app.listen(8888);