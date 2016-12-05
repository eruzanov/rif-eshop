import Model from './Model';

const Cart = Backbone.Collection.extend({

  model: Model,

  initialize() {
    Backbone.on('cart:add', productId => {
      const product = this.get(productId);
      if(product) {
        product.set({count: product.get('count') + 1})
      } else {
        this.add({id: productId});
      }
    });
    Backbone.on('cart:remove', productId => {
      if (this.get(productId)) {
        this.remove(productId)
      }
    });
  }

});

export default new Cart([
  {id: 1, count: 1},
  {id: 2, count: 1},
  {id: 3, count: 1}
]);
