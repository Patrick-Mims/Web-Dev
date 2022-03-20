define(['baseView', 'vue', 'underscore'], 
    function(BaseView, vue, _) {
        var groupView = BaseView.extend({
            initialize: function() {
                console.log("init -> groupView");
                this.listenTo(this.model, 'change', this.render);

                new vue({
                    el: "#v-grouped",
                    data: {
                        msg_daily: "vue group message"
                    }
                })
            },

            el: "#group",

            template: _.template($("#group-template").html())
        });

        return groupView;
    });
