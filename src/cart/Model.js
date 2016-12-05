export default Backbone.Model.extend({

  defaults: {
    count: 1
  },

  validate(attrs) {
    return attrs.count < 1 ? 'count less than one' : false;
  }

});
