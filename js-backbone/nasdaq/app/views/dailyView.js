define(['baseView', 'vue'], 
    function(BaseView, Vue) {
        return dailyView = BaseView.extend({
            initialize: function() {
                console.log("init -> dailyView");
                this.listenTo(this.model, 'change', this.render);

                new Vue({
                    el: "v-daily",
                    data: {
                        msg_daily: "vue daily message"
                    }
                })
            },

            el: #daily,

            template: _.template($("#daily-template").html())
        });
    });
