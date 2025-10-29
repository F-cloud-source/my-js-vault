// eventListener = Listen for a Specific events to make Interactive Webpages 
//                event: keyup , keydown.
//               .addEventLsitener(event , callbacks,  anonymous function and Arrow function in JS );

// making a Program for Practical Demostration in Key Event in Modern Js.

const MyEmoji = document.getElementById("emoji");
const moveAmount = 50; 
// mean 50px mean the Content on webpage Move on distance difference of 100px Gap on WebPage.

// intial coordinates of x and y are 0 for webpage
let x = 0;
let y = 0;

// Choose event.key.startsWith("Arrow")  mean we are access that key event and startsWith()
//  mean only if we press Arrow key Js and if and else  loop behaves

document.addEventListener("keydown" ,  event =>{
      if(event.key.startsWith("Arrow")){    

          

event.preventDefault();   //preventDefault()  means it Stop movement of Content on Webpage after a Limit

          switch (event.key){
               case "ArrowUp":
                    y -= moveAmount
                    break;
               
              case "ArrowDown":
               y  += moveAmount
               break;

               case "ArrowLeft":
               x -= moveAmount
               break;

               case "ArrowRight":
               x += moveAmount
               break;

          }
           
          MyEmoji.style.top = `${y}px`;
          MyEmoji.style.left = `${x}px`;
      }
});


                
                         


          
        
    










        
