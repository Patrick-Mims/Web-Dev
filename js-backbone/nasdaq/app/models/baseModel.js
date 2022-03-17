define(['backbone', 'jquery', 'react', 'react_dom', 'typescript', 'underscore', 'vue'],
	function (Backbone, $, react, react_dom, ts, _, vue) {
		var mBase = Backbone.Model.extend({
			initialize: function () {
				console.log('init. mBase');
			}
		});
		return mBase;
	});