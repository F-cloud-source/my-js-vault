// eventListener = Listen for a Specific events to make Interactive Webpages 
//                event: click, mouseover , mouseout.
//               .addEventLsitener(event , callbacks,  anonymous function and Arrow function in JS );




//function changeColor(event) {
    //console.log(event);
    //event.target.style.backgroundColor = "skyblue";
    //event.target.style.color = "blue";
    //event.target.textContent = "Ah! You Hurt Me🤕🤕🩼 User!🚨";
    
//}
// Passing function as anonymous function Passing Event as Call back,
 //MyButton.addEventListener("click" , function(event){
   // event.target.style.backgroundColor = "skyblue";
   // event.target.style.color = "blue";
   // event.target.textContent = "Ah! You Hurt Me🤕🤕🩼 User!🚨";
//});   
// call back = changeColor , event = event tells about all browser behaviour what happened


// Passing function  Use Arrow function and IF use Event as one paramters no need to use ( ) around Event it cool in js 

//MyButton.addEventListener("click", event => {  
//    event.target.style.backgroundColor = "skyblue";
//    event.target.style.color = "blue";
//    event.target.textContent = "Ah! You Hurt Me🤕🤕🩼 User!🚨";
//}); 

//MyButton.addEventListener("mouseover", event => {
//    event.target.style.backgroundColor = "purple";
//    event.target.style.color = "white";
//    event.target.textContent = "Please User! 🙂🙂 Help me 🆘😣 ";
//    event.target.fontfamily = "Verdena sans-sarif"; // note: correct is style.fontFamily
//});

//MyButton.addEventListener("mouseout", event => {
//    event.target.style.backgroundColor = "Blue";
//    event.target.style.color = "yellow";
//    event.target.style.fontWeight = "bold";
//    event.target.textContent = "Not Leave me User!🥺🥹, I Love You💘💝";
//});


// Get DOM elements
const MyBox = document.getElementById("box1");
const UserButton  = document.getElementById("button-1");

// Click event
UserButton.addEventListener("click", event => {
    MyBox.style.backgroundColor = "skyblue";
    MyBox.style.color = "blue";
    MyBox.textContent = "Ah! You Hurt Me🤕🤕🩼 User!🚨";
});

// Mouseover event
UserButton.addEventListener("mouseover", event => {
    MyBox.style.backgroundColor = "purple";
    MyBox.style.color = "white";
    MyBox.textContent = "Please User! 🙂🙂 Help me 🆘😣 ";
    MyBox.style.fontFamily = "Verdana, sans-serif";
});

// Mouseout event
UserButton.addEventListener("mouseout", event => {
    MyBox.style.backgroundColor = "hsl(116, 84%, 65%)"; // reset to original
    MyBox.style.color = "yellow";
    MyBox.style.fontWeight = "bold";
    MyBox.textContent = "Not Leave me User!🥺🥹, I Love You💘💝";
});

