// Element Selectors = Methods used to target and manipulate HTML elements.
// They allow you to select one or multiple elements from the DOM (Document Object Model).

// 1 - document.getElementById()          // Returns: Element or null
// 2 - document.getElementsByClassName()  // Returns: HTMLCollection (live)
// 3 - document.getElementsByTagName()    // Returns: HTMLCollection (live)
// 4 - document.querySelector()           // Returns: First matching Element or null
// 5 - document.querySelectorAll()        // Returns: NodeList (static)


// Accessing an element by ID and applying inline styles
const MYWorld = document.getElementById("my-world");

MYWorld.style.backgroundColor = "yellow";
MYWorld.style.textAlign = "center";
MYWorld.style.color = "darkblue";
MYWorld.style.fontWeight = "bold";
MYWorld.style.fontFamily = "Arial";
MYWorld.style.borderRadius = "20px";

// Logging the selected element to the console for inspection
console.log(MYWorld);


// Accessing multiple elements by class name (returns live HTMLCollection)
// const HouseItems = document.getElementsByClassName("product");

// Accessing specific elements in the collection and applying styles
// HouseItems[0].style.backgroundColor = "darkblue";
// HouseItems[0].style.color = "white";
// HouseItems[4].style.color = "purple";
// HouseItems[8].style.fontWeight = "bold";

// HTMLCollection does not support forEach() directly
// To iterate over it, use a regular for...of loop or convert it to an array

// Using for...of loop to apply styles to each element
// for (let Productitems of HouseItems) {
//     Productitems.style.backgroundColor = "yellow";
//     Productitems.style.color = "darkblue";
//     Productitems.style.fontFamily = "Arial";
//     Productitems.style.fontWeight = "bold";
// }

// Converting HTMLCollection to an array to use forEach
const HouseItems = document.getElementsByClassName("product");

Array.from(HouseItems).forEach(Productitems => {
    Productitems.style.backgroundColor = "blue";
    Productitems.style.color = "lightgrey";
    Productitems.style.fontWeight = "bold";
});

// Using document.getElementsByTagName().

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

// h4Elements[0].style.backgroundColor = "purple";
// h4Elements[0].style.color = "white";
// h4Elements[0].style.fontWeight = "bold";
// h4Elements[1].style.backgroundColor = "white";
// h4Elements[1].style.color = "blue";
// h4Elements[1].style.fontWeight = "bold";
// console.log(h4Elements);


//for(let h4Element of h4Elements){
     //h4Elements[1].style.backgroundColor = "red";
//}

//for(let liElement of liElements){
   // liElements[2].style.color = "green";
   // liElements[1].style.color = "red";
    //liElements[2].style.color = "yellow";
    //liElements[5].style.color = "brown";
    
//
//}

// ...existing code...

// Applying styles to all h4 elements using Array.from() and forEach
// Currently disabled for testing purposes
//Array.from(h4Elements).forEach(h4Element => {
//    h4Element.style.backgroundColor = "red";
//    h4Element.style.color = "white";
//    h4Element.style.borderRadius = "40px";
//})

// Applying styles to all list items using Array.from() and forEach
// Currently disabled for testing purposes
//Array.from(liElements).forEach(liElement => {
//    liElement.style.backgroundColor = "red";
//    liElement.style.color = "white";
//    liElement.style.borderRadius = "40px";
//})


//const element1 = document.querySelector(".product");
//const element2 = document.querySelector("h4");

//element1.style.backgroundColor  = "pink";
//element2.style.color = "red";
//element1.style.fontFamily = "verdena";

//const element3 = document.querySelector("ol");


//console.log(element3);

const Product1 = document.querySelectorAll(".product");



Product[1].style.color = "green";

const Product2 = document.querySelectorAll("li");

Product2[3].style.color = "yellow";

console.log(Product2);
console.log(Product1);


