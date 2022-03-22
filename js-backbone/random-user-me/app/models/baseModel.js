define(['jQuery', 'underscore', 'backbone'],
    function($, _, Backbone) {
        var baseModel = Backbone.Model.extend({
            initialize: function() {
                console.log("init -> baseModel");
            }
        });

        return baseModel;
});
