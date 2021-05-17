
function takeOrder(order, orderType) {
  if (orderType.length < 3) {
    orderType.push(order);
    return orderType;
   }
}

function refundOrder(orderNumber, deliveryOrders) {
  for ( var i = 0; i <= deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber ) {
      return deliveryOrders.splice(i,1);
    }
  }
}

//missing method, .join, and missing a variable to hold the method value
function listItems(deliveryOrders) {
  var newInfo = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    newInfo.push(deliveryOrders[i].item);
    // console.log(newInfo);
  }
  return newInfo.join(', ')
}

function searchOrder(deliveryOrders, itemName) {
  var moreNewNew = [];
  for ( var i = 0; i < deliveryOrders.length; i++) {
    moreNewNew.push(deliveryOrders[i].item);
  }
  if (moreNewNew.includes(itemName)) {
    return true;
  } else if (!moreNewNew.includes(itemName)) {
    return false;
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
