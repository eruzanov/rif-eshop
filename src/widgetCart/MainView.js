import collection from '../cart/collection';

export default Mn.View.extend({

  className: 'cart',

  template: '#widgetCart-main-tpl',

  ui: {
    cardCount: '[data-ui="card-count"]'
  },

  initialize() {
    this.collection = collection;
  },

  collectionEvents: {
    update: function () {
      this.ui.cardCount.text(this.collection.length);
    }
  },

  templateContext() {
    return {count: this.collection.length};
  }

});
