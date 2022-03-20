define(['baseView', 'aggregateView', 'dailyView', 'groupView', 'previousView', 'weatherView'],
    function(baseView, aggregateView, dailyView, groupView, previousView, weatherView) {
        var baseCollectionView = baseView.extend({
            initialize: function() {
                console.log("init -> baseView");
                this.fetch()
            }
        });

        return baseCollectionView;
    });
