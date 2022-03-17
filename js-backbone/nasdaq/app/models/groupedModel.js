define(['baseModel'],
	function (BaseModel) {
		var groupedModel = BaseModel.extend({
			initialize: function () {
				this.set('adjusted', true);
				this.set('baseurl', 'https://api.polygon.io/');
				this.set('key', 'siPBL4eggC37aTDLXnLc1Htjsz31ECq9');
				this.set('ticker', 'MSFT');
				this.set('version', 'v2');

				console.log("init -> groupedModel()");
			},

			url: function () {
				return this.get('baseurl') + this.get('version') + "/aggs/ticker/" + this.get('ticker') + "/prev?adjusted=" + this.get('adjusted') + "&apiKey=" + this.get("key");
			}
		});

		return groupedModel;
	});
/*
	Get the daily open, high, low, and close (OHLC) for the entire stocks/equities markets.
	https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=siPBL4eggC37aTDLXnLc1Htjsz31ECq9
*/