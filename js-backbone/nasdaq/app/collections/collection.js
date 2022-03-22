define(['baseCollection'],
    function(BaseCollection) {
       return collection = BaseCollection.extend({
            initialize: function() {
                console.log("init -> collection");
            }
        });
    });
