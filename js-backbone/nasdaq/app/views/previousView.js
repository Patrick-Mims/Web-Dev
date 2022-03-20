define(['baseView', 'vue', 'underscore'], 
    function(BaseView, vue, _) {
        var previousView = BaseView.extend({
            initialize: function() {
                console.log("init -> previousView");

                this.listenTo(this.model, 'change', this.render);

                new vue({
                    el: "#v-previous",
                    data: {
                        msg_daily: "vue previous message"
                    }
                })
            },

            el: "#previous",

            template: _.template($("#previous-template").html())
        });

        return previousView;
    });
