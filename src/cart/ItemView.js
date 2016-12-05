import products from '../data/products';

const intl = new Intl.NumberFormat('ru-RU');

export default Mn.View.extend({

  className: 'product product_in-cart',

  template: '#cart-item-tpl',

  ui: {
    minus: '[data-ui="minus"]',
    count: '[data-ui="count"]',
    plus: '[data-ui="plus"]',
    priceTotal: '[data-ui="priceTotal"]',
    remove: '[data-ui="remove"]'
  },

  events: {
    ['click @ui.minus']() {
      this.model.set({count: this.model.get('count') - 1}, {validate: true});
    },
    ['click @ui.plus']() {
      this.model.set({count: this.model.get('count') + 1}, {validate: true});
    },
    ['click @ui.remove']() {
      Backbone.trigger('cart:remove', this.model.id);
    }
  },

  modelEvents: {
    ['change:count'](model, count) {
      this.ui.count.val(count);
      this.ui.priceTotal.text(
        intl.format(products.get(this.model.id).get('price') * count)
      );
    }
  },

  templateContext() {
    const product = products.get(this.model.id).toJSON();
    return {
      sale: product.sale,
      image: product.image,
      title: product.title,
      priceSale: intl.format(product.price - product.price * product.sale / 100),
      price: intl.format(product.price),
      priceTotal: intl.format((product.price - product.price * product.sale / 100) * this.model.get('count')),
      count: this.model.get('count')
    };
  }

});
