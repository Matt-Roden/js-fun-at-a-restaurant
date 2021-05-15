function nameMenuItem(name) {
return(`Delicious ${name}`);
}

function createMenuItem(name, price, type) {
  var menuItem = {
    price: price,
    type: type,
    name: name,
  }
  return menuItem;
}

//var ingredients = [];

function addIngredients(newIngredient, ingredients) {

  // var allIngredients = ingredients.push(newIngredient);
  if (!ingredients.includes(newIngredient)) {
    return ingredients.push(newIngredient);
  }
}

function formatPrice(price) {
  return "$" + price ;
}

function decreasePrice(price) {
  return (price = price - (price * 0.1));
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
}
