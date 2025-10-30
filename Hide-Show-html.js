// =====================================================
// JavaScript Intro: DOM Manipulation & Event Handling
// =====================================================
// This code shows how to use JavaScript to:
// 1. Select elements from the page (getElementById)
// 2. Respond to user actions (click events)
// 3. Read and change CSS properties dynamically
// 4. Update the page content (button text) in real-time
// =====================================================

// Step 1: Select the button and the image elements from the HTML
const myButton = document.getElementById("my-car");
const myCar = document.getElementById("mycar");

// Step 2: Add a click event listener to the button
// When the button is clicked, the function inside runs
myButton.addEventListener("click", () => {

    // =====================================================
    // Main Function Highlight:
    // window.getComputedStyle(element)
    // - Reads the actual CSS applied by the browser
    // - Works even if the style is defined in CSS (not inline)
    // =====================================================
    const displayStyle = window.getComputedStyle(myCar).display;

    // Step 3: Toggle the image visibility and button text
    if (displayStyle === "none") {
        // If image is hidden, show it
        myCar.style.display = "block";
        myButton.textContent = "Hide Car Image 🛻🛻";
    } else {
        // If image is visible, hide it
        myCar.style.display = "none";
        myButton.textContent = "Show Car Image 🛻🛻";
    }
});