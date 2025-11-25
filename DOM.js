// DOM = DOCUMENT OBJECT MODEL
//        object{} that represent the page you see in the web browser
//        and provides you with an API to interact with it.
//        Web browser contructs the DOM when it loads an HTML document 
//        structure all the elements in a tree-like representation.
//        Javascript can Access the DOM  to dynamically
//        change the content, structure , and style of a web page.

 //console.log(document);

//document.title = "My First JS Project in REACT.Js"

//document.body.style.backgroundColor = "hsla(0, 8%, 72%, 1.00)";s

 //console.dir(document);

const userName = "";   // Try "ali" or leave empty

const travelMSG = document.getElementById("travel-msg");

// ? mean if and : means else in coding language  and === mean Strict OPERATOR assign 
// any varible for Storign data give this or nothing as Strich not Comparsion in Modern Js

travelMSG.textContent = "Welcome " + (userName === "" ? "Guest" : userName);


