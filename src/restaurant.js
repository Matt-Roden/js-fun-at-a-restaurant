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
}



// {
//   //return restaurantName.menus.lunch.push(newItemName);
//
//     restaurantName.menus.lunch.push(newItemName);
//   } if (newItemName.type === "lunch") {
//     restaurantName.menus.lunch.push(newItemName);
//   } else if (newItemName.type === "breakfast") {
//     return restaurantName.menus.breakfast.push(newItemName);
//   } else if (newItemName.type === "dinner") {
//     return restaurantName.menus.dinner.push(newItemName);
//   } else if (restaurantName.menus.breakfast.includes(newItemName)) {
//     return !restaurantName.menus.breakfast.push(newItemName);
//   } else if (restaurantName.menus.lunch.includes(newItemName)) {
//     return !restaurantName.menus.lunch.push(newItemName);
//   } else if (restaurantName.menus.dinner.includes(newItemName)) {
//     return !restaurantName.menus.dinner.push(newItemName);
//   }
// }

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
