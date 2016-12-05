import WidgetCart from 'widgetCart/MainView';

export default Mn.View.extend({

  el: '#app',

  template: false,

  regions: {
    cart: {el: '[data-region="cart"]', replaceElement: true},
    sidebar: {el: '[data-region="sidebar"]', replaceElement: true},
    content: {el: '[data-region="content"]', replaceElement: true}
  },

  initialize() {
    this.showChildView('cart', new WidgetCart);
  }

});
