import cart from 'cart/collection';
import Index from './index/MainView';
import Cart from './cart/MainView';
import AppView from './AppView';

export default Mn.AppRouter.extend({

  initialize() {
    this.appView = new AppView({collection: cart});
    this.appView.render();
  },

  routes: {
    'index': 'showIndex',
    'cart': 'showCart'
  },

  showIndex() {
    this.appView.showChildView('content', new Index);
  },

  showCart() {
    this.appView.showChildView('content', new Cart);
  }

});
