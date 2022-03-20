define(['baseModel'],
	function (BaseModel) {
		var dailyModel = BaseModel.extend({
			initialize: function () {
				console.log("init -> dailyModel()");

				this.set('adjusted', true);
				this.set('baseurl', 'https://api.polygon.io/');
				this.set('key', 'siPBL4eggC37aTDLXnLc1Htjsz31ECq9');
				this.set('ticker', this.get('ticker'));
				this.set('date', this.get('date'));
				this.set('version', 'v1');

                this.fetch();
			},

			url: function () {
				return this.get('baseurl') + this.get('version') + "/open-close/" + this.get('ticker') + "/" + this.get('date') + "?adjusted=" + this.get('adjusted') + "&apiKey=" + this.get("key");
			}
		});
		return dailyModel;
	});
/*
https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=siPBL4eggC37aTDLXnLc1Htjsz31ECq9"

Get the open, close and after hours prices of a stock symbol on a certain date.
*/
