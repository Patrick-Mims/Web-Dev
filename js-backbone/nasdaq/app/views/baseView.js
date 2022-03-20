define(['jquery', 'underscore', 'react', 'react_dom', 'typescript', 'backbone'],
    function ($, _, react, react_dom, ts, Backbone) {

        var baseView = Backbone.View.extend({
            render: function () {
                return this.$el.html(this.template(this.model.toJSON()));
            }
        });

        return baseView;
    });
