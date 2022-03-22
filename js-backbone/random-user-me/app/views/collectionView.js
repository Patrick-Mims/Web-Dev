define(['baseCollectionView', 'candidateView'],
    function (BaseCollectionView, candidateView) {
        var collectionView = BaseCollectionView.extend({
            initialize: function () {
                new candidateView({
                    model: this.collection.at(0),
                    el: "#candidate"
                });
            }
        });

        return collectionView;
    });
