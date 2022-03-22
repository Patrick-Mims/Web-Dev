define(['jQuery', 'underscore', 'backbone'],
    function ($, _, Backbone) {
        var baseView = Backbone.View.extend({
            render: function () {
                return this.$el.html(this.template(this.model.toJSON()));
            }
        });

        return baseView;
    });
