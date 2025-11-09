// IMAGE SLIDER PROJECT AND ALL COMPONENTS AND ALL LOGIC


let slides = document.querySelectorAll(".slide");


//console.log(Slides);

let slideIndex = 0;

let intervalId = null;

// For Pop Up first image we Use this IntializeSlider Feature in JS Code.

//IntializeSlider();

document.addEventListener("DOMContentLoaded" , IntializeSlider);


// console.log(intervalId); use it for testing js code for intervaId 

function IntializeSlider(){
    if(slides.length >= 1){
        slides[slideIndex].classList.add("displaySlide");
     // intervalId  = setInterval(nextSlide , 5000);
    }
    else{
        console.log(`Error in js Code! Please Try again`);
    }

}
// Building feature for ShowSlide For Slider Project 
function showSlide(index){
       if(index >= slides.length){
         slideIndex = 0;
       }
       else if(index < 0){
          slideIndex = slides.length - 1;
       }

       slides.forEach(slide =>{

       slide.classList.remove("displaySlide");
     });

     slides[slideIndex].classList.add("displaySlide");
}

// Building feature for previousSlide For Previous Slide

function previousSlide(){
   slideIndex--;
   showSlide(slideIndex);
}



// Building Feature  for nextSlide 
function nextSlide(){
  slideIndex++; 
  showSlide(slideIndex);
}