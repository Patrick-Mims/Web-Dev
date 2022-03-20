define(['baseView', 'vue', 'underscore'], 
    function(BaseView, vue, _) {
        var aggregateView = BaseView.extend({
            initialize: function() {
                console.log("init -> aggregateView");

                this.listenTo(this.model, 'change', this.render);

                /*
                new vue({
                    el: "#v-aggregate",
                    data: {
                        msg_aggregates: "vue aggregate message"
                    }
                });
                */
            },

            el: "#aggregate",

            template: _.template($("#aggregate-template").html())
        });

        return aggregateView;
    });
