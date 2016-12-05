const intl = new Intl.NumberFormat('ru-RU');

export default Mn.View.extend({

  className: 'widget-selection__item',

  template: '#widgetSelection-item-tpl',

  ui: {
    toCart: '[data-ui="to-cart"]'
  },

  events: {
    ['click @ui.toCart']() {
      Backbone.trigger('cart:add', this.model.id);
    }
  },

  templateContext() {
    const product = this.model.toJSON();
    if (product.sale) {
      return Object.assign(
        product,
        {
          priceSale: intl.format(product.price - product.price * product.sale / 100),
          price: intl.format(product.price)
        }
      );
    } else {
      return Object.assign(
        product,
        {
          priceSale: false,
          price: intl.format(product.price)
        }
      );
    }
  }

});
