// fetch = Function used for making HTTPS Request to request fetch resources.
//        ( JSON style , data , files and images).
//        Simplifies Asyncronous Data Fecthing in  Javascript and 
//        used for interacting with api and send data Ascynronous over the Web.
//        fetch((url , {options}).

let InputBox = document.getElementById("display");




let MyButton = document.getElementById("Btn1");

          MyButton.addEventListener("click" , event =>{
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
              .then(response => response.json())
              .then(data => console.log(data))
              .catch(error => console.log(error))
                });


