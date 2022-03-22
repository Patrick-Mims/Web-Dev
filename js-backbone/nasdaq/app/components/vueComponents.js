define([Backbone, vue], function(backbone, vue) {
    var vueComponents = Backbone.View.extend({
        initialize: function() {
            vue.component('component_wx', {
                template: '<div>Current Conditions</div>'
            })

            new vue ({
                el: "#weather"
            })
        }
    });
});
