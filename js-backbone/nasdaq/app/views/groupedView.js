define(['baseView', 'vue'], 
    function(BaseView, Vue) {
        return groupView = BaseView.extend({
            initialize: function() {
                console.log("init -> groupView");
                this.listenTo(this.model, 'change', this.render);

                new Vue({
                    el: "v-grouped",
                    data: {
                        msg_daily: "vue group message"
                    }
                })
            },

            el: #group,

            template: _.template($("#group-template").html())
        });
    });
