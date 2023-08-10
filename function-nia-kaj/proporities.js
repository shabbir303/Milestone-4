var shoppingCart = {
    books: 3,
    pen : 4,
    sunglass:1,
    underware: 2,
    keyboard: 1,
}
// console.log(shoppingCart.keyboard);
// eta arekvabe lekha jai
// console.log(shoppingCart["underware"]);
// arekvabe lekha jai
var propertyName1 = "pen";
var propertyValue = shoppingCart[propertyName1];
console.log(propertyName1, propertyValue);
// console.log(propertyName);

// alada vabe proporities/keys pawar jonno amara ja korbo/ alada ekta variable die declare korbo
// var keysCount = Object.keys(shoppingCart);

// proporites er sudu value anar jonno
// var valuesCount = Object.values(shoppingCart);

// console.log(keysCount);
// console.log(valuesCount);

// set property values
shoppingCart.books = 20;
console.log(shoppingCart);
shoppingCart['sunglass'] = 10;
var propertyName2 = "underware";
shoppingCart[propertyName2] = 40;
console.log(shoppingCart);
