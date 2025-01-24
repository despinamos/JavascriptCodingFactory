const shoppingCart= {
  items: [
    { productName: "Apples", price: 8.89, quantity: 40},
    { productName: "Oranges", price: 12, quantity: 100}
  ],

  addItemToCart(item) {
    this.items.push(item)
  },
}

shoppingCart.addItemToCart({productName: "Honey", price: 18.59, quantity: 20})
console.log(shoppingCart.items)