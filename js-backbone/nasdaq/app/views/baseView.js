define(['backbone', 'jquery', 'react', 'react_dom', 'typescript', 'underscore', 'vue'],
	function (backbone, $, react, react_dom, ts, _, vue) {
		var vBase = Backbone.view.extend({
			render: function () {
				return this.$el.html(this.template(this.model.toJSON()));
			}
		});
		return vBase;
	});