
function takeOrder(order, orderType) {
  if (orderType.length < 3) {
    orderType.push(order);
    return orderType;
   }
}

function refundOrder(orderNumber, deliveryOrders) {
  for ( var i = 0; i <= deliveryOrders.length; ++i) {
    if (deliveryOrders[i].orderNumber === orderNumber ) {
      return deliveryOrders.splice(i,1);
    }
  }
}

//missing method, .join, and missing a variable to hold the method value
function listItems(deliveryOrders) {
  for ( var i = 0; i <= deliveryOrders.length; ++i) {
    return deliveryOrders[i].item;
  }
}






module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}
