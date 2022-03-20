define(['baseModel'], 
    function(BaseModel) {
        var weatherModel = BaseModel.extend({

            initialize: function() {
                console.log("init -> weatherModel");
                this.fetch();
            },

            url: function() {
                return "https://weather.ls.hereapi.com/weather/1.0/report.json?apiKey=z5DpKECxcT9bjrURVyaR0qrWT94M5xgcxed12zU0rdc&product=nws_alerts&zipcode=90210&metric=false"
            }
        });

        return weatherModel;
    });
