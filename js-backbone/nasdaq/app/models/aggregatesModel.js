define(['baseModel'],
    function (BaseModel) {
        var aggregatesModel = BaseModel.extend({
            initialize: function () {
                this.set('adjusted', true);
                this.set('baseurl', 'https://api.polygon.io/');
                this.set('key', 'siPBL4eggC37aTDLXnLc1Htjsz31ECq9');
                this.set('ticker', 'MSFT');
                this.set('version', 'v2');

                console.log("init -> dailyModel()");
            },

            url: function () {
                return this.get('baseurl') + this.get('version') + "/aggs/ticker/" + this.get('ticker') + "/prev?adjusted=" + this.get('adjusted') + "&apiKey=" + this.get("key");
            }
        });

        return aggregatesModel;
    });
/*
    Get aggregate bars for a stock over a given date range in custom time window sizes.
    For example, if time span = ‘minute’ and multiplier = ‘5’ then 5-minute bars will be returned.

    Query
    https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=siPBL4eggC37aTDLXnLc1Htjsz31ECq9

    GET
    /v2/aggs/ticker/{stocksTicker}/range/{multiplier}/{timespan}/{from}/{to}
*/
