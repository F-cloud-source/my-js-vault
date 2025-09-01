//  spread operator = ... allows an iterable such as
//                     array or string to be expanded

//                     ( unpacks the elements)

//  (...) unpacks all number or string as a box.
let letter = [1, 2, 3, 4, 5];

let maxShop = Math.max(...letter);

console.log(maxShop);