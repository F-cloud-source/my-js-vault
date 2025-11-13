// Promises = A object that manages Acyncronous Code Operation in Js.
//            Wrap the promises Object Around the { Acyncronous Code}.
//            "I Promiss to Return A Value".
//            PENDING -> RESOLVED OR REJECTED.
//            new Promise((resolve , reject ) =>  acyncronous code}).

// DO THIS IN ALL CHORES

// 1.WALK THE DOG
// 2.CLEAN THE KITCHEN
// 3.TAKE OUT THE TRASH
// 4. CLEAN ALL ROOM FOR ALL ROOMMATES

function walkDog(){

    return new Promise((resolve , reject) =>{   // resolve mean Code performed successfully and reject Code Performed successfully
          setTimeout(() => {
          resolve("The walking of Dog is OVER!🐕🦮🐶🦴");
                        },  2000);
    });
}

function kitchenClean(){
    
    return new Promise((resolve , reject) =>{
         setTimeout(() => {
       resolve("The tasks in kitchen is Over and All kitchen is Cleaned🔪🔪");
    },  3000 );
    });

}

function  TrashOut(){
    
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
        resolve("The trash is Clean and City is Protected from all Bacteria and Virus🦠🦟🧫");
    }, 5000);
    });
}

function CleanRoom(){

    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            resolve("This All 12 ROOMS are cleaned and well Maintained by Servants and Staffs so Please Use CAREFULLY🚨🚨🚨");
        } , 6000);
    });
}

// Chaining in Promises to call one to second Function in js code base


walkDog().then((value) => {console.log(value) ; return kitchenClean()})
         .then((value) => {console.log(value); return TrashOut()})   
         .then((value) => {console.log(value); return CleanRoom()})
         .then((value) => {console.log(value)});

    