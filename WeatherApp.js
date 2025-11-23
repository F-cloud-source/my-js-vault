// JS CODE AND ALL WEATHER APP PROEJCT

const InputData = document.getElementById("search-box");

const Submit = document.getElementById("btn-search");

const displayDisplay = document.querySelector(".update")
let API_KEY = '549b9ea0034dd85e588e36acda42310d';

function handlesubmit() {
    // Your code to handle the form submission goes here
    console.log("Button clicked and submit() function called!");
    // event.preventDefault();
}

Submit.addEventListener("click" , async event =>{

    event.preventDefault(); // It Prevent UI refresh 
// IF USER ENTER EMPTY CITY AND TRY SUBMIT
     if(InputData.value.trim() === ""){
        displayDisplay.textContent = "Please Enter City NAME.INVALID"
     }
     
    const countryName = InputData.value; 
    const endpoint = `https://api.openweathermap.org/data/2.5/weather`

    const url = `${endpoint}?q=${countryName}&appid=${API_KEY}`;
     
     const response = await fetch(url)


    const data = await response.json()
    const city = data.name
    const humidity = data.main.humidity
    const tempC = (data.main.temp - 273.15).toFixed(1);
// Content Area and DOM 

    displayDisplay.innerHTML = `
     <h2 class="city-update">${city}.</h2>
     <p class="degree-update">${tempC}°C</p>
     <p class="humidity-update">${humidity}</p>
     `
     if(data.cod !== 200){
        displayDisplay.innerHTML = `<p>City Not Found. Try Again!</p>.`;
     }
});