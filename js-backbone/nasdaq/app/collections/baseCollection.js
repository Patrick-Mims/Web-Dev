define(['backbone', 'jquery', 'underscore'], 
    function(Backbone, $, _) {
        return baseCollection = Backbone.Collection.extend({
            initialize: function() {
                console.log("init -> baseCollection");
            }
        })
    }
});
