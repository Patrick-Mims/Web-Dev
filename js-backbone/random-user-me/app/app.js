require.config({
    baseUrl: 'app',
    paths: {
        backbone: 'https://backbonejs.org/backbone-min',
        jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min',
        react: 'https://unpkg.com/react@17/umd/react.development',
        react_dom: 'https://unpkg.com/react-dom@17/umd/react-dom.development',
        typescript: 'https://cdnjs.cloudflare.com/ajax/libs/typescript/4.6.2/typescript.min',
        underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.2/underscore-min',
        vue: 'https://cdn.jsdelivr.net/npm/vue@2/dist/vue',

        /* Models
         * */
        baseModel: 'models/baseModel',
        candidateModel: 'models/candidateModel',

        /* Views
         * */
        baseView: 'views/baseView',
        baseCollectionView: 'views/baseCollectionView',
        candidateView: 'views/candidateView',
        collectionView: 'views/baseCollectionView.js',

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
    },

    waitSeconds: 10
});

define(['collectionView', 'collection', 'route', 'candidateModel'],
    function (collectionView, collection, route, candidateModel) {
        new route();
        Backbone.history.start();

        new collectionView({
            collection: new collection([
                new candidateModel({})
            ])
        });
    });

/*Asynchronous Module Definition */
