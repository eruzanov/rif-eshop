import ItemView from './ItemView';

export default Mn.CollectionView.extend({

  className: 'page-content',

  childView: ItemView,

  emptyView: Mn.View.extend({
    template: _.template('<p>Ваша корзина пуста</p>')
  }),

  collectionEvents: {
    ['update']() {
      this.triggerMethod('update');
    },
    ['change:count']() {
      this.triggerMethod('update');
    }
  }

});
