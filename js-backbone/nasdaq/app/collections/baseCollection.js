define(['jquery', 'underscore', 'backbone'], 
    function($, _, Backbone) {
        var baseCollection = Backbone.Collection.extend({
            initialize: function() {
                console.log("init -> baseCollection");
            }
        });
        return baseCollection;
    });
