define(['baseModel'],
    function (BaseModel) {

        var candidateModel = BaseModel.extend({
            initialize: function () {
                this.set('url', 'https://randomuser.me/');
                this.set('results', 100);
            },

            url: function () {
                return this.get('url') + "/api/?results=" + this.get('results');
            }
        });

        return candidateModel;
    });
