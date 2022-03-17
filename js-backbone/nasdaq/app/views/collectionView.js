define(['baseCollectionView'], 
    function(BaseCollectionView) {
        return collectionView = BaseCollectionView.extend({
            initialize: function() {
                new aggregateView({
                    model: this.collection.at(0);
                });

                new dailyView({
                    model: this.collection.at(1);
                });

                new groupView({
                    model: this.collection.at(2);
                });

                new previewView({
                    model: this.collection.at(3);
                });
            }
        });
    });
/*
 * collectionView -> this acts as an initializer for models loaded in from app.js
 * */
