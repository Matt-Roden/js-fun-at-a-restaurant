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
  if (newItemName.type === "lunch" && !restaurantName.menus.lunch.includes(newItemName)) {
    restaurantName.menus.lunch.push(newItemName);
  } else if (newItemName.type === "breakfast" && !restaurantName.menus.breakfast.includes(newItemName)) {
    restaurantName.menus.breakfast.push(newItemName);
  } else if (newItemName.type === "dinner" && !restaurantName.menus.dinner.includes(newItemName)) {
    restaurantName.menus.dinner.push(newItemName);
  }
};

function removeMenuItem(restaurantType, menuItemName, menuItemType) {
 if (restaurantType.menus[menuItemType] !== undefined) { /* what we want to search */
    for (var i = 0; i < restaurantType.menus[menuItemType].length; i++ ) { /* how to search*/
      restaurantType.menus[menuItemType].splice(i, 1);
      return `No one is eating our ${menuItemName} - it has been removed from the ${menuItemType} menu!`
    }
  }
  if (!restaurantType.menus[menuItemType].includes(menuItemName)) {
    return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`;
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
