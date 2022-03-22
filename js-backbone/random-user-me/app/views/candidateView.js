define(['baseView'], 
    function(baseView) {
        var candidateView = BaseView.extend({
            initialize: function() {
                console.log("init -> candidateView");
                this.listenTo(this.model, 'change', this.render);
            },

            template: _.tempate($("#candidate-tempate").html())
        });

        return candidateView;
    });

/* don't forget to implement the baseView for the render function to work */
