    function(BaseView, Vue) {
        return aggregateView = BaseView.extend({
            initialize: function() {
                console.log("init -> aggregateView");

                this.listenTo(this.model, 'change', this.render);

                new Vue({
                    el: "v-aggregate",
                    data: {
                        msg_aggregates: "vue aggregate message"
                    }
                })
            },

            el: #aggregate,

            template: _.template($("#aggregate-template").html())
        });
    });
