// fetch = Function used for making HTTPS Request to request fetch resources.
//        ( JSON style , data , files and images).
//        Simplifies Asyncronous Data Fecthing in  Javascript and 
//        used for interacting with api and send data Ascynronous over the Web.
//        fetch((url , {options}).

let InputBox = document.getElementById("display");
let MyButton = document.getElementById("Btn1");
let ContentArea  = document.getElementById("content");
     
     


MyButton.addEventListener("click" , event =>{
// Making Input bar all Elements lower Case
let PokemonName = InputBox.value.trim().toLowerCase()

// See if this Input is empty or not 

if(PokemonName === ""){
  ContentArea.textContent = "Please add a Pokeman Name"
   return;
}

// Fetching data from Pokeman API 

fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`)
     .then(response => {
      if(!response.ok){
        throw new Error("Pokemon Not found");
        
      }
      return response.json(); // Parse Data and Converted in to DOM to Update Live in UI on Browser Refreh
    })


// Access Differet JSON vlaue for data and use Map and img as to display Live image for Search Pokemon

     .then(data =>{
      let name = data.name
      let type = data.types.map(type => type.type.name).join(",");
      let image = data.sprites.front_default
      
      // Display Content on Web UI Use DOM 
ContentArea.innerHTML = `
           <h2>${name.charAt(0).toUpperCase() + name.slice(1)}</h2> 
           <p><strong>Type:</strong> ${type}
           <img src="${image}" alt="${name}" width=150>
           `;
     })

    .catch(error => {
      ContentArea.textContent = "Error: ${error.message}"
    })
      
});