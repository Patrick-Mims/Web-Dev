define(['baseView', 'vue', 'underscore'], 
    function(BaseView, vue, _) {
        var dailyView = BaseView.extend({
            initialize: function() {
                console.log("init -> dailyView");

                if(_.isMatch(this.model.attributes, {ticker: "AAPL" })) {
                    console.log("Company Information: Apple Computer");
                } else {
                    console.log("No Record on File");
                }

                this.listenTo(this.model, 'change', this.render);

                /*
                new vue({
                    el: "#v-daily",
                    data: {
                        ticker: this.model.toJSON()
                    },
                    methods: {
                        switchTicker: function() {
                            this.ticker = "GOOG" 
                        }
                    }
                });
                */

                /*
                new vue({
                    el: "#v-open",
                    data: {
                        open: this.model.attributes
                    }
                });
                */

            },

            events: {
                'search':'filter'
            },

            filter: function(e) {
                e.preventDefault();
                alert("Hello!");
            },

            template: _.template($("#daily-template").html())
        });

        return dailyView;
    });
