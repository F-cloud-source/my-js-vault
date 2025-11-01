// classList = Element Property in JAVASCRIPT use to intercact
//             with an element's  list of classes (CSS Classess)
//             Allow you to make resuable classess for many 
//             elements  for many elements across your webpage.


// add()
// remove()
// toggle( if present then remove , Add if not)
// replace (oldclass , newclass)
// contains()
// add css from css file to Js code for Interactive coding for Button 1  use classLite.

//const MyButton = document.getElementById("button-1");

// adding class of enabled using JS
//MyButton.classList.add("enabled");

// removing class of enabled using JS
 
//MyButton.classList.remove("enabled");

//MyButton.classList.add("hover");



// EVENT LISTNER EXAMPLE IN CASE OF ADD AND REMOVE 
//MyButton.addEventListener("mouseover" , event => {
 //  event.classList.add("hover");
//});

//MyButton.addEventListener("mouseout" , event => {
 //  event.classList.remove("hover");
 //  console.log(MyButton);
//});



//MyButton.addEventListener("mouseover" , event => {
 //  event.classList.add("hover");
//});

//MyButton.addEventListener("mouseout" , event => {
 //  event.classList.remove("hover");
 //  console.log(MyButton);
//});

// EVENT CASE EXAMPLE INCASE OF TOGGLE BOTH TOGGLE AND ADD AND REMOVE WORKS SAME IN THIS SPECIFIC EXAMPLE.

//MyButton.addEventListener("clic" , event =>{
  //  event.target.classList.toggle("hover");
    
//});


//MyButton.addEventListener("mouseover" , event =>{
//     event.target.classList.toggle("hover");
//});



//MyButton.addEventListener("mouseout" , event =>{
   // event.target.classList.toggle("hover");
//});

// USING REPLACE METHOD


// ALL HEADING COMPONENTS

const myH1 = document.getElementById("gold");
const myH2 = document.getElementById("wine");
const myH3 = document.getElementById("red");


const MyButton = document.getElementById("button-1");

MyButton.classList.add("enabled");

MyButton.addEventListener("click" , event =>{
         
    if(event.target.classList.contains("enabled")){
          event.target.textContent += "Hey! You  Are Late🤕🤕🤕";   // += means append  and Apend mean adding to already Existed Element of content on WEBPAGE API(DOM HTML)
          event.target.style.color = "blue";
    }
    else{
        event.target.classList.replace("enabled" , "replaced");
    }

});


myH1.classList.add("enabled");

myH1.addEventListener("click" , event =>{
         
    if(event.target.classList.contains("enabled")){
          event.target.textContent += "Hey! You are sad 😭😭";   // += means append  and Apend mean adding to already Existed Element of content on WEBPAGE API(DOM HTML)
          event.target.style.color = "blue";
    }
    else{
        event.target.classList.replace("enabled" , "replaced");
    }

});


myH2.classList.add("enabled");

myH2.addEventListener("click" , event =>{
         
    if(event.target.classList.contains("enabled")){
          event.target.textContent += "Hey! You are happy 🥰🥰";   // += means append  and Apend mean adding to already Existed Element of content on WEBPAGE API(DOM HTML)
          event.target.style.color = "blue";
    }
    else{
        event.target.classList.replace("enabled" , "replaced");
    }

});

myH3.classList.add("enabled");

myH3.addEventListener("click" , event =>{
         
    if(event.target.classList.contains("enabled")){
          event.target.textContent += "Hey! You are  Tired 😵😫";   // += means append  and Apend mean adding to already Existed Element of content on WEBPAGE API(DOM HTML)
          event.target.style.color = "blue";
    }
    else{
        event.target.classList.replace("enabled" , "replaced");
    }

});