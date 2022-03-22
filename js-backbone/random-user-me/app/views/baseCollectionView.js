define(['baseView', 'candidateView'],
    function (BaseView, candidateView) {
        var baseCollectionView = BaseView.extend({
            initialize: function () {
                console.log("init -> baseCollectionView");
                this.fetch();
            }
        });

        return baseView;
    });