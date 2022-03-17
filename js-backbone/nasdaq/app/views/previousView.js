define(['baseView', 'vue'], 
    function(BaseView, Vue) {
        return previousView = BaseView.extend({
            initialize: function() {
                console.log("init -> previousView");
                this.listenTo(this.model, 'change', this.render);

                new Vue({
                    el: "v-previous",
                    data: {
                        msg_daily: "vue previous message"
                    }
                })
            },

            el: #previous,

            template: _.template($("#previous-template").html())
        });
    });
