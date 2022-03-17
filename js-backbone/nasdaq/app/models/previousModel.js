define(['baseModel'],
	function (BaseModel) {
		var previousModel = BaseModel.extend({
			initialize: function () {
				this.set('adjusted', true);
				this.set('baseurl', 'https://api.polygon.io/');
				this.set('key', 'siPBL4eggC37aTDLXnLc1Htjsz31ECq9');
				this.set('ticker', 'MSFT');
				this.set('feature', '/prev');
				this.set('version', 'v2');

				console.log("init -> previousModel()");
			},

			url: function () {
				//return this.get('baseurl') + this.get('version') + "/aggs/ticker/" + this.get('ticker') + "/prev?adjusted=" + this.get('adjusted') + "&apiKey=" + this.get("key");
				return this.get('baseurl') + this.get('version') + "/aggs/ticker/" + this.get('ticker') + "/prev?adjusted=" + this.get('adjusted') + "&apiKey=" + this.get("key");
			}
		});
		return previousModel;
	});
/*
	https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=siPBL4eggC37aTDLXnLc1Htjsz31ECq9
*/