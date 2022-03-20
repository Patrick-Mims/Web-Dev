define(['baseCollectionView', 'aggregateView', 'dailyView', 'groupView', 'previousView', 'weatherView', 'vue'], 
    function(BaseCollectionView, aggregateView, dailyView, groupView, previousView, weatherView, vue) {
        var collectionView = BaseCollectionView.extend({
            initialize: function() {
                new aggregateView({
                    model: this.collection.at(0),
                    el: "#aggregate"
                });

                new dailyView({
                    model: this.collection.at(1),
                    el: "#daily"
                });

                new vue({
                    el: "#v-daily",
                    data: {
                        ticker: "YouTube" 
                    }
                });
                
                vue.component('greeting', {
                    props:['message'],
                    template: '<ul><li>Component -> greeting {{message}}</li></ul>'
                })

                vue.component('market', {
                    props:{
                        message: String
                    },

                    template: '<ul><li>Component -> market {{message}}</li></ul>'
                })

                new vue({
                    el: '#component_market'
                })

                new vue({
                    el: '#component_greeting'
                })

                new vue({
                    el: '#component_data',
                    data: {
                        msg: 'component1' 
                    },
                    components: {
                        'component1': {
                            template: '<div style="color: #c00;">component1 is working</div>'
                        }
                    }
                })

                new vue({
                    el: "#v-search",
                    data: {
                        msg: 'Search '
                    },
                    methods: {
                        search_ticker: function() {
                            this.msg = "GOOG" 
                        }
                    }
                });

                new groupView({
                    model: this.collection.at(2)
                });

                new previousView({
                    model: this.collection.at(3)
                });

                new weatherView({
                    model: this.collection.at(4),
                    id: "#weather"
                });
            }
        });
        return collectionView;
    });
/*
 * collectionView -> this acts as an initializer for models loaded in from app.js
 * */
