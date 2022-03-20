define(['jquery', 'underscore', 'backbone', 'vue'], 
    function($, _, Backbone, vue) {
        return baseRoute = Backbone.Router.extend({
            initialize: function() {
                console.log("init-> baseRoute");
            }
        });
    });
