import products from '../data/products';
import WidgetSelection from '../widgetSelection/MainView';

export default Mn.View.extend({

  template: '#index-main-tpl',

  regions: {
    selectionSale: {
      el: '[data-region="widget-selection-sale"]',
      replaceElement: true
    },
    selectionNew: {
      el: '[data-region="widget-selection-new"]',
      replaceElement: true
    },
    selectionTop: {
      el: '[data-region="widget-selection-top"]',
      replaceElement: true
    }
  },

  onRender() {
    this.showChildView(
      'selectionSale',
      new WidgetSelection({
        collection: new Backbone.Collection(products.filter(product => product.get('sale')))
      })
    );
    this.showChildView(
      'selectionNew',
      new WidgetSelection({
        collection: new Backbone.Collection(products.filter(product => product.get('isNew')))
      })
    );
    this.showChildView(
      'selectionTop',
      new WidgetSelection({
        collection: new Backbone.Collection(products.filter(product => product.get('isTop')))
      })
    );
  }

});
