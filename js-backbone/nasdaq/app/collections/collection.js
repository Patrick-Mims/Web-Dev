define(['baseCollection'],
    function(BaseCollection) {
        var collection = BaseCollection.extend({
            console.log("init -> collection");
        });
        return collection;
    });
