import AppRouter from './AppRouter';
new AppRouter;
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
