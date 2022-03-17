define(['baseView', 'aggregateView', 'dailyView', 'groupView', 'previousView'],
    function(baseView, aggregateView, dailyView, groupView, previousView) {
        return baseCollectionView = baseView.extend({
            initialize: function() {
                console.log("init -> baseView");
            }
        });
    });
