
// js code test and challenger

function pizzaPlace() {
   return new Promise((resolve , reject)  =>{
    setTimeout(() => {
        resolve(`Pizza is Ready and it Prize is $${12} per Piece`);
    }, 2000);
   });
}


function BurgerHome() {
   return new Promise((resolve , reject)  =>{
    setTimeout(() => {
        resolve(`BurgerHome is New Shop we create All Fast food and for First 100 Costumers we Offer ${10}% OFF🛍️👜👛🏬 on ALl items`);
    }, 3000);
   });
}


function SushiCorner() {
   return new Promise((resolve , reject)  =>{
    setTimeout(() => {
        resolve(`Sushi is ready and it has Samon Fish Special Japan Grade`);
    }, 1000);
   });
}

pizzaPlace().then(value => {console.log(value) ; return BurgerHome()})
            .then(value => {console.log(value) ; return SushiCorner()})
            .then(value  => console.log(value))