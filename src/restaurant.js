function createRestaurant(restaurant) {
  return {
    name: restaurant,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem (restaurantName, newItemName) {
  return restaurantName.menus.lunch.push(newItemName);
  for (var i = 0; i >= 1; i++) {
    return restaurantName.menus.lunch.push(newItemName);
  } if (newItemName.type === "lunch") {
    return restaurantName.menus.lunch.push(newItemName);
  } else if (newItemName.type === "breakfast") {
    return restaurantName.menus.breakfast.push(newItemName);
  } else if (newItemName.type === "dinner") {
    return restaurantName.menus.dinner.push(newItemName);
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
