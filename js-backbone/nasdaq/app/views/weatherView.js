define(['baseView', 'underscore'], 
    function(BaseView, _) {
        var weatherView = BaseView.extend({
            initialize: function() {
                console.log("init -> weatherView");

                this.listenTo(this.model, 'change', this.render);
            },

            template: _.template($("#weather-template").html())
        });

        return weatherView;
    });
