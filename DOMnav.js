// DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.

// .firstElementChild 
// .lastElementChild 
// .nextElementSibling   // corrected spelling (singular)
// .previousElementSibling // corrected spelling (singular)
// .parentElement
// .children

// ------ firstElementChild ------- \\

// storing reference of the element with id 'cars' 
// const firstElement = document.getElementById("cars");

// accessing the first child element (first <li>) of the cars list
// const firstChild = firstElement.firstElementChild;

// styling the first child item of the cars list
// firstChild.style.backgroundColor = "red";
// firstChild.style.fontWeight = "bold";

// Use case of querySelectorAll() demonstration in JS

// selecting all <ul> elements in the document
// const ulElements = document.querySelectorAll("ul");

// iterating over each <ul> element
// ulElements.forEach(ulElement => {
    // accessing the first child element of each <ul>
    // const firstChild = ulElement.firstElementChild;
    // styling the first child of each <ul>
    // firstChild.style.backgroundColor = "yellow";
// });

// last element child ----


//const element = document.getElementById("cars");
//const lastChild = element.lastElementChild;

//lastChild.style.color = "white";


//const ulElements = document.querySelectorAll("ul");


//ulElements.forEach(ulElement => {
    //const lastChild = ulElement.lastElementChild;
   // lastChild.style.backgroundColor = "blue";
//});

//console.log(ulElements);
//console.log(element);


// .nextElementSibling in js code.

// NOTE:- for .nextElementSibling we add all id to each li in  
// list okay byt in last and first no need to add all seperate ID.
// all item included unordered are childen to main BODY and all item are sibling to each other in js  and it cool.
//  and all main ul id are parent of all children in each unordered list of Items in html code and in js logic.

//const element = document.getElementById("salad");
//const nextSibling = element.nextElementSibling;

//nextSibling.style.backgroundColor = "blue";

// .previousElementSibling -- in js it cool.  prevoiusSibling of first Child does not exist.

//const element = document.getElementById("audi");

//const previousSibling = element.previousElementSibling;

//previousSibling.style.backgroundColor = "black";
//previousSibling.style.color = "white";

// .parentElement ---- in js code use html Unordered Lists as Demo Example.

const listItems = document.querySelectorAll("#food li");

listItems.forEach(item => {
    item.style.color = "red";
});


// .child in js code modern and efficient.

const foodList = document.getElementById("food");
console.log(foodList.children);


const foodList2 = document.getElementById("food");


