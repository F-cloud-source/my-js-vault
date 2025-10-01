// Clock program  in JS  Code.

function UpdateClock(){

       const now = new Date();
       let hours = now.getHours();
       const merediem  = hours >= 12 ? "PM" : "AM";    // ? mean if and : measn else.
       hours = hours % 12 || 12;
       hours = hours.toString().padStart(2 , 0)
       const minutes = now.getMinutes().toString().padStart(2 , 0);
       const seconds = now.getSeconds().toString().padStart(2 , 0);
       const timeString = `${hours}:${minutes}:${seconds} ${merediem}`;
       document.getElementById("clock").textContent = timeString;




}

UpdateClock();
setInterval(UpdateClock , 1000);