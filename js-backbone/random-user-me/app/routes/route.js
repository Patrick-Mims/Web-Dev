define('baseRoute'), function (BaseRoute) {
	return route = BaseRoute.extend({
		initialize: function () {
			console.log("init -> route");
		},

		routes: {
			'': 'start',
			delete: 'delete',
			sort: 'sort',
			'*default': 'defaultRoute'
		},

		start: function () {
			console.log('start function');
		},

		sort: function () {
			console.log('sort function');
			new sortView({
				model: new sortModel(),
				el: '#content'
			});
		},

		_default: function () {
			new deleteView({
				model: new deleteModel(),
				el: '#content'
			});
		}
	});
});