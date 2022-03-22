define(['jQuery', 'underscore', 'backbone'], function ($, _, Backbone) {
	var baseRoute = Backbone.extend({
		initialize: function () {
			console.log("init -> baseRoute");
		}
	});

	return baseRoute;
});