import products from '../data/products';
import cart from './collection';
import ListView from './ListView';

function total() {
  const intl = new Intl.NumberFormat('ru-RU');
  const total = cart.reduce(
    (memo, model) => memo + products.get(model.id).get('price') * model.get('count'), 0
  );
  return intl.format(total);
}

export default Mn.View.extend({

  template: '#cart-main-tpl',

  ui: {
    total: '[data-ui="total"]'
  },

  regions: {
    list: {el: '[data-region="list"]', replaceElement: true}
  },

  childViewEvents: {
    ['update']() {
      this.ui.total.text(total());
    }
  },

  onRender() {
    this.showChildView('list', new ListView({collection: cart}));
  },

  templateContext() {
    return {total: total()};
  }

});
