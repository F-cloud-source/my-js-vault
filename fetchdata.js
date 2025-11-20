// fetch = Function used for making HTTPS Request to request fetch resources.
//        ( JSON style , data , files and images).
//        Simplifies Asyncronous Data Fecthing in  Javascript and 
//        used for interacting with api and send data Ascynronous over the Web.
//        fetch((url , {options}).

//fetch("https://pokeapi.co/api/v2/pokemon-species/mike")
     //.then(resolve => {
        //  if(!resolve.ok){
              // throw new Error("Fetch data not Accessed");
        //  }
         // return resolve.json();
    // })
    // .then(data =>
         //  console.log(data.id))
    // .catch(error =>
          // console.log(error));


async function  fetchApi(){
        
     try{
          const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/");

          if(!response.ok){
               throw new Error("This is not Correct Pokemon Name");
          }
          const data = await response.json();
          console.log(data);
     }
     catch(error){
           console.log(error);
     }
}

fetchApi();