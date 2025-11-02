

// FULL FUNCTIONAL 4 BUTTON PROGRAM USING HTML AND CSS AND JAVASCRIPT(event listener and all types and classlite)


// Select all buttons
let MyButton = document.querySelectorAll(".Btn");

// Add initial hover class to all buttons
MyButton.forEach(button => {
    button.classList.add("hover");
});

// Add hover effect on mouseover
MyButton.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

// Remove hover effect on mouseout
MyButton.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

// Click effect
MyButton.forEach(button => {
    button.addEventListener("click", event => {
        let btn = event.target;

        if(!btn.classList.contains("enabled")){
          btn.textContent += "🥰🥰";
        } 
        else {
            // Fix: add 'disblad' class correctly
            btn.classList.add("disblad");
        }
    });
});
