import ItemView from './ItemView';

export default Mn.CollectionView.extend({

  className: 'page-content',

  childView: ItemView,

  collectionEvents: {
    ['update']() {
      this.triggerMethod('update');
    },
    ['change:count']() {
      this.triggerMethod('update');
    }
  }

});
