// NodeList = static collection of html collection (id , class, element)
//            Can be created by use QuerySelectorAll()
//            Similar to an Array, But no ( .map , .reduce. , filter)
//            Node   won't  update automatically reflect 

// ADD / Changing HTML and CSS 


 let myButton = document.querySelectorAll(".myBtn")

//myButton.forEach(button => {

 // changing backgroundColor to green

   // button.style.backgroundColor = "green";
// changing textContent from Buttons to Hello

   // button.textContent = "Hello";
//  changing  button font color to White on Webpage in all Nodelist  

   // button.style.color = "white";

//});


// CLICK EVENT LISTENER USE MODERN JS CODE BASE.


//myButton.forEach(button =>{
     // button.addEventListener("click" , event =>{
          //  event.target.style.backgroundColor = "purple";
     // });
//});


// add MOUSEOVER + MOUSEOUT eventListener

//myButton.forEach(button =>{
   // button.addEventListener("mouseover" , event =>{
       // event.target.style.backgroundColor = "pink";
       // event.target.style.color = "black";
   // });
//});


//myButton.forEach(button =>{
  //  button.addEventListener("mouseout" , event =>{
       // event.target.style.backgroundColor = "yellow";
       // event.target.style.color = "black";
   // });
//s});

// ADD A ELEMENT 
//STEP 1 CREATE A SIMPLE BUTTON HTML ELEMENT IN JS CODE BASE FILE.

let newButton = document.createElement("button");

// STEP 2 ADD TEXT CONTENT OF NEW BUTTON ON JS CODE BASE.

newButton.textContent  = "Button 6";

// STEP 3 MAKE A SEPERATE CLASSLIST FOR THIS NEW HTML BUTTON (disclaimer⚠️⚠️:- 
// we need to create Element in JS code not in html file that why we use classlist instead of 
// class="any unique class name"  in seperate HTML file for Web or other UI projects)


newButton.classList.add("myBtn"); // ✅ Correct

//newButton.classList.add("myBtn");  // Adds "myBtn" class to the new button


// PASS THIS NEW  BUTTOM AS A CALL BACK  TO BODY AS API(DOM) IN WEBPAGE for live Response.

document.body.appendChild(newButton);

// UPDATING NEW BUTTON IN DOM AS LAST NODELIST AS Dev Tool and DOM API 

newButton = document.querySelectorAll(".myBtn");

console.log(newButton);




