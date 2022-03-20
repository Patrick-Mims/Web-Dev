define(['baseRoute', 'collectionView', 'collection', 'vue'],
    function(BaseRoute, collectionView, collection, vue) {
        return route = BaseRoute.extend({
            initialize: function(){
                console.log("init -> route");
                new vue({
                    el: "#v-item",
                    data: {
                        message: "testing testing one two three..."
                    }
                });
            }
        });
    });
