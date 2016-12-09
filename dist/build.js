var App =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _AppRouter = __webpack_require__(1);

	var _AppRouter2 = _interopRequireDefault(_AppRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _AppRouter2.default();
	Backbone.history.start();

	// (function () {
	//   var card = {};
	//   var cardCount = $('[data-ui="card-count"]');
	//   var template = _.template($('#widget-selection').html());
	//   var widgetSelectionSale = $('[data-section="widget-selection-sale"]');
	//   var widgetSelectionNew = $('[data-section="widget-selection-new"]');
	//   var widgetSelectionTop = $('[data-section="widget-selection-top"]');
	//   widgetSelectionSale.html(template({
	//     items: products.filter(function (item) {return item.sale;})
	//   }));
	//   widgetSelectionNew.html(template({
	//     items: products.filter(function (item) {return item.isNew;})
	//   }));
	//   widgetSelectionTop.html(template({
	//     items: products.filter(function (item) {return item.isTop;})
	//   }));
	//   $('[data-ui="to-card"]').click(function () {
	//     var productId = $(this).parent('[data-id]').data('id');
	//     if (card[productId]) {
	//       card[productId] = {count: card[productId] + 1}
	//     } else {
	//       card[productId] = {count: 0}
	//     }
	//     cardCount.html(+cardCount.text() + 1);
	//   });
	// })();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _collection = __webpack_require__(2);

	var _collection2 = _interopRequireDefault(_collection);

	var _MainView = __webpack_require__(4);

	var _MainView2 = _interopRequireDefault(_MainView);

	var _MainView3 = __webpack_require__(8);

	var _MainView4 = _interopRequireDefault(_MainView3);

	var _AppView = __webpack_require__(11);

	var _AppView2 = _interopRequireDefault(_AppView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Mn.AppRouter.extend({
	  initialize: function initialize() {
	    this.appView = new _AppView2.default({ collection: _collection2.default });
	    this.appView.render();
	  },


	  routes: {
	    'index': 'showIndex',
	    'cart': 'showCart'
	  },

	  showIndex: function showIndex() {
	    this.appView.showChildView('content', new _MainView2.default());
	  },
	  showCart: function showCart() {
	    this.appView.showChildView('content', new _MainView4.default());
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Model = __webpack_require__(3);

	var _Model2 = _interopRequireDefault(_Model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Cart = Backbone.Collection.extend({

	  model: _Model2.default,

	  initialize: function initialize() {
	    var _this = this;

	    Backbone.on('cart:add', function (productId) {
	      var product = _this.get(productId);
	      if (product) {
	        product.set({ count: product.get('count') + 1 });
	      } else {
	        _this.add({ id: productId });
	      }
	    });
	    Backbone.on('cart:remove', function (productId) {
	      if (_this.get(productId)) {
	        _this.remove(productId);
	      }
	    });
	  }
	});

	exports.default = new Cart([{ id: 1, count: 1 }, { id: 2, count: 1 }, { id: 3, count: 1 }]);

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Backbone.Model.extend({

	  defaults: {
	    count: 1
	  },

	  validate: function validate(attrs) {
	    return attrs.count < 1 ? 'count less than one' : false;
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _products = __webpack_require__(5);

	var _products2 = _interopRequireDefault(_products);

	var _MainView = __webpack_require__(6);

	var _MainView2 = _interopRequireDefault(_MainView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Mn.View.extend({

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

	  onRender: function onRender() {
	    this.showChildView('selectionSale', new _MainView2.default({
	      collection: new Backbone.Collection(_products2.default.filter(function (product) {
	        return product.get('sale');
	      }))
	    }));
	    this.showChildView('selectionNew', new _MainView2.default({
	      collection: new Backbone.Collection(_products2.default.filter(function (product) {
	        return product.get('isNew');
	      }))
	    }));
	    this.showChildView('selectionTop', new _MainView2.default({
	      collection: new Backbone.Collection(_products2.default.filter(function (product) {
	        return product.get('isTop');
	      }))
	    }));
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = new Backbone.Collection([
	// sale
	{
	  id: 1,
	  sale: 10,
	  isNew: false,
	  isTop: false,
	  image: '../images/prod1.jpg',
	  title: 'Бордюр Коллаж мозаик на бел син 500*60*8,5 бд57кл003',
	  price: 3267.23,
	  categoryId: 2
	}, {
	  id: 2,
	  sale: 8,
	  isNew: false,
	  isTop: false,
	  image: '../images/prod2.jpg',
	  title: 'Дрель сетевая безударная',
	  price: 3267.13,
	  categoryId: 2
	}, {
	  id: 3,
	  sale: 23,
	  isNew: false,
	  isTop: false,
	  image: '../images/prod3.png',
	  title: 'Бордюр Коллаж мозаик на бел син 500*60*8,5 бд57кл003',
	  price: 3267.04,
	  categoryId: 2
	}, {
	  id: 4,
	  sale: 15,
	  isNew: false,
	  isTop: false,
	  image: '../images/prod4.jpg',
	  title: 'Краска для стен Профилюкс, 3 кг',
	  price: 3267,
	  categoryId: 2
	},
	// new
	{
	  id: 5,
	  sale: 0,
	  isNew: true,
	  isTop: false,
	  image: '../images/prod1.jpg',
	  title: 'Бордюр Коллаж мозаик на бел син 500*60*8,5 бд57кл003',
	  price: 3267,
	  categoryId: 2
	}, {
	  id: 6,
	  sale: 0,
	  isNew: true,
	  isTop: false,
	  image: '../images/prod2.jpg',
	  title: 'Дрель сетевая безударная',
	  price: 3267,
	  categoryId: 2
	}, {
	  id: 7,
	  sale: 0,
	  isNew: true,
	  isTop: false,
	  image: '../images/prod3.png',
	  title: 'Бордюр Коллаж мозаик на бел син 500*60*8,5 бд57кл003',
	  price: 3267,
	  categoryId: 2
	}, {
	  id: 8,
	  sale: 0,
	  isNew: true,
	  isTop: false,
	  image: '../images/prod4.jpg',
	  title: 'Краска для стен Профилюкс, 3 кг',
	  price: 3267,
	  categoryId: 2
	},
	// top
	{
	  id: 9,
	  sale: 0,
	  isNew: false,
	  isTop: true,
	  image: '../images/prod1.jpg',
	  title: 'Бордюр Коллаж мозаик на бел син 500*60*8,5 бд57кл003',
	  price: 3267,
	  categoryId: 2
	}, {
	  id: 10,
	  sale: 0,
	  isNew: false,
	  isTop: true,
	  image: '../images/prod2.jpg',
	  title: 'Дрель сетевая безударная',
	  price: 3267,
	  categoryId: 2
	}, {
	  id: 11,
	  sale: 0,
	  isNew: false,
	  isTop: true,
	  image: '../images/prod3.png',
	  title: 'Бордюр Коллаж мозаик на бел син 500*60*8,5 бд57кл003',
	  price: 3267,
	  categoryId: 2
	}, {
	  id: 12,
	  sale: 0,
	  isNew: false,
	  isTop: true,
	  image: '../images/prod4.jpg',
	  title: 'Краска для стен Профилюкс, 3 кг',
	  price: 3267,
	  categoryId: 2
	}]);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ItemView = __webpack_require__(7);

	var _ItemView2 = _interopRequireDefault(_ItemView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Mn.CollectionView.extend({

	  className: 'widget-selection',

	  childView: _ItemView2.default

	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var intl = new Intl.NumberFormat('ru-RU');

	exports.default = Mn.View.extend({

	  className: 'widget-selection__item',

	  template: '#widgetSelection-item-tpl',

	  ui: {
	    toCart: '[data-ui="to-cart"]'
	  },

	  events: _defineProperty({}, 'click @ui.toCart', function clickUiToCart() {
	    Backbone.trigger('cart:add', this.model.id);
	  }),

	  templateContext: function templateContext() {
	    var product = this.model.toJSON();
	    if (product.sale) {
	      return Object.assign(product, {
	        priceSale: intl.format(product.price - product.price * product.sale / 100),
	        price: intl.format(product.price)
	      });
	    } else {
	      return Object.assign(product, {
	        priceSale: false,
	        price: intl.format(product.price)
	      });
	    }
	  }
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _products = __webpack_require__(5);

	var _products2 = _interopRequireDefault(_products);

	var _collection = __webpack_require__(2);

	var _collection2 = _interopRequireDefault(_collection);

	var _ListView = __webpack_require__(9);

	var _ListView2 = _interopRequireDefault(_ListView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function total() {
	  var intl = new Intl.NumberFormat('ru-RU');
	  var total = _collection2.default.reduce(function (memo, model) {
	    return memo + _products2.default.get(model.id).get('price') * model.get('count');
	  }, 0);
	  return intl.format(total);
	}

	exports.default = Mn.View.extend({

	  template: '#cart-main-tpl',

	  ui: {
	    checkout: '[data-ui="checkout"]',
	    total: '[data-ui="total"]'
	  },

	  regions: {
	    list: { el: '[data-region="list"]', replaceElement: true }
	  },

	  childViewEvents: _defineProperty({}, 'update', function update() {
	    this.ui.total.text(total());
	    this.ui.checkout[_collection2.default.length ? 'removeClass' : 'addClass']('hide');
	  }),

	  onRender: function onRender() {
	    this.showChildView('list', new _ListView2.default({ collection: _collection2.default }));
	    this.ui.checkout[_collection2.default.length ? 'removeClass' : 'addClass']('hide');
	  },
	  templateContext: function templateContext() {
	    return { total: total() };
	  }
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _collectionEvents;

	var _ItemView = __webpack_require__(10);

	var _ItemView2 = _interopRequireDefault(_ItemView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = Mn.CollectionView.extend({

	  className: 'page-content',

	  childView: _ItemView2.default,

	  emptyView: Mn.View.extend({
	    template: _.template('<p>Ваша корзина пуста</p>')
	  }),

	  collectionEvents: (_collectionEvents = {}, _defineProperty(_collectionEvents, 'update', function update() {
	    this.triggerMethod('update');
	  }), _defineProperty(_collectionEvents, 'change:count', function changeCount() {
	    this.triggerMethod('update');
	  }), _collectionEvents)

	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _events;

	var _products = __webpack_require__(5);

	var _products2 = _interopRequireDefault(_products);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var intl = new Intl.NumberFormat('ru-RU');

	exports.default = Mn.View.extend({

	  className: 'product product_in-cart',

	  template: '#cart-item-tpl',

	  ui: {
	    minus: '[data-ui="minus"]',
	    count: '[data-ui="count"]',
	    plus: '[data-ui="plus"]',
	    priceTotal: '[data-ui="priceTotal"]',
	    remove: '[data-ui="remove"]'
	  },

	  events: (_events = {}, _defineProperty(_events, 'click @ui.minus', function clickUiMinus() {
	    this.model.set({ count: this.model.get('count') - 1 }, { validate: true });
	  }), _defineProperty(_events, 'click @ui.plus', function clickUiPlus() {
	    this.model.set({ count: this.model.get('count') + 1 }, { validate: true });
	  }), _defineProperty(_events, 'click @ui.remove', function clickUiRemove() {
	    Backbone.trigger('cart:remove', this.model.id);
	  }), _events),

	  modelEvents: _defineProperty({}, 'change:count', function changeCount(model, count) {
	    this.ui.count.val(count);
	    this.ui.priceTotal.text(intl.format(_products2.default.get(this.model.id).get('price') * count));
	  }),

	  templateContext: function templateContext() {
	    var product = _products2.default.get(this.model.id).toJSON();
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

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _MainView = __webpack_require__(12);

	var _MainView2 = _interopRequireDefault(_MainView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Mn.View.extend({

	  el: '#app',

	  template: false,

	  regions: {
	    cart: { el: '[data-region="cart"]', replaceElement: true },
	    sidebar: { el: '[data-region="sidebar"]', replaceElement: true },
	    content: { el: '[data-region="content"]', replaceElement: true }
	  },

	  initialize: function initialize() {
	    this.showChildView('cart', new _MainView2.default());
	  }
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _collection = __webpack_require__(2);

	var _collection2 = _interopRequireDefault(_collection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Mn.View.extend({

	  className: 'cart',

	  template: '#widgetCart-main-tpl',

	  ui: {
	    cardCount: '[data-ui="card-count"]'
	  },

	  initialize: function initialize() {
	    this.collection = _collection2.default;
	  },


	  collectionEvents: {
	    update: function update() {
	      this.ui.cardCount.text(this.collection.length);
	    }
	  },

	  templateContext: function templateContext() {
	    return { count: this.collection.length };
	  }
	});

/***/ }
/******/ ]);