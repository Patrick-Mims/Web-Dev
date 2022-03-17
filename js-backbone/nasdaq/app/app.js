/*
	When using require() in the top-level HTML page
	(or top-level script file that does not define a module),
	a configuration object can be passed as the first option:
*/
require.config({
	baseUrl: 'app',
	paths: {
		backbone: 	'https://backbonejs.org/backbone-min',
		jquery: 	'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min',
		react: 		'https://unpkg.com/react@17/umd/react.development',
		react_dom: 	'https://unpkg.com/react-dom@17/umd/react-dom.development',
		typescript: 'https://cdnjs.cloudflare.com/ajax/libs/typescript/4.6.2/typescript',
		underscore: 'https://underscorejs.org/underscore-esm',
		vue: 		'https://cdn.jsdelivr.net/npm/vue@2/dist/vue',

		/* Models
		* */
		aggregateModel: 'models/aggregateModel',
		baseModel: 'models/baseModel',
		dailyModel: 'models/dailyModel',
		groupModel: 'models/groupModel',
		previousModel: 'models/previousModel',

		/* Views
		* */
		baseView: 'views/baseView',
		aggregateView: 'views/aggregateView',
        baseCollectionView: 'views/baseCollectionView',
        collectionView: 'views/collectionView',
		dailyView: 'views/dailyView',
		groupView: 'views/groupView',
		previousView: 'views/previousView',

		/* Collections
		* */
		baseCollection: 'collections/baseCollection',
		collection: 'collections/collection',

		/* Routes
		* */
		baseRoute: 'routes/baseRoute',
		route: 'routes/route'
	},

	shim: {
		backbone: {
			/* this makes sure: jquery and underscore are loaded before backbone */
			deps: [
				'jquery',
				'underscore'
			],
			exports: 'Backbone'
		},
		underscore: {
			exports: '_'
		}
	},

	waitSeconds: 10
});

require(['collectionView', 'collection', 'dailyModel'],
	function (collectionView, collection, dailyModel) {
		new route();
		Backbone.history.start();

		new collectionView({
			collection: new collection([
				new dailyModel({
                    ticker: "MSFT"
				})
			])
		});
	});

/*Asynchronous Module Definition */
