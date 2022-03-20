require.config({
    baseUrl: 'app',
    paths: {
        backbone: 	'https://backbonejs.org/backbone-min',
        jquery: 	'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min',
        react: 		'https://unpkg.com/react@17/umd/react.development',
        react_dom: 	'https://unpkg.com/react-dom@17/umd/react-dom.development',
        typescript: 'https://cdnjs.cloudflare.com/ajax/libs/typescript/4.6.2/typescript.min',
        underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.2/underscore-min',
        vue: 		'https://cdn.jsdelivr.net/npm/vue@2/dist/vue',

        /* Models
         * */
        aggregateModel: 'models/aggregateModel',
        baseModel: 'models/baseModel',
        dailyModel: 'models/dailyModel',
        groupModel: 'models/groupModel',
        previousModel: 'models/previousModel',
        weatherModel: 'models/weatherModel',

        /* Views
         * */
        baseView: 'views/baseView',
        aggregateView: 'views/aggregateView',
        baseCollectionView: 'views/baseCollectionView',
        collectionView: 'views/collectionView',
        dailyView: 'views/dailyView',
        groupView: 'views/groupView',
        previousView: 'views/previousView',
        weatherView: 'views/weatherView',

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
        underscore: {
            exports: '_'
        },
        backbone: {
            /* this makes sure: jquery and underscore are loaded before backbone */
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    }

    //	waitSeconds: 10
});

define(['collectionView', 'collection', 'route', 'aggregateModel', 'dailyModel', 'groupModel', 'previousModel', 'weatherModel'],
    function (collectionView, collection, route, aggregateModel, dailyModel, groupModel, previousModel, weatherModel) {
        new route()
        Backbone.history.start();

        new collectionView ({
            collection: new collection ([
                new aggregateModel({}),
                new dailyModel({
                    ticker: "AAPL",
                    date: "2022-03-17"
                }),
                new groupModel({}),
                new previousModel({}),
                new weatherModel({})
            ])
        });
    });

/*Asynchronous Module Definition */
