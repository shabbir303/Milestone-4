const shoppingCart = [{product: "shirt", price: 500},
                      {product: "pant" , price: 1000},
                      {product:"sunglass", price: 1200}
];

function findTotalPrice(products){
    let sum = 0;
    for(let i = 0; i<products.length; i++){
        const product = products[i];
      sum = sum + product.price;
    }
    return sum;
}
const myShoppingCost = findTotalPrice(shoppingCart);
console.log(myShoppingCost);

// product quantity dewa thakle
const shoppingCart2 = [{product: "shirt", price: 500, quantity: 3},
                      {product: "pant" , price: 1000, quantity: 4},
                      {product:"sunglass", price: 1200, quantity:5}
];
function totalProductPrice(products){
    let sum = 0;
   for(let i = 0; i< products.length; i++){
     const product = products[i];
    //  console.log(product);
    sum = product.price * product.quantity;
   }
   return sum;
}
const myExpense = totalProductPrice(shoppingCart2);
console.log(myExpense);