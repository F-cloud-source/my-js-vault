// function = a section of resubsle code .
//            Declare code once , use it whenever you want.
//           call the function to excute that code.


function happyBirthday(DadName, age, Gamedevice){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`This is your Gift ${Gamedevice}!`);
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday ${DadName}`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old boy`);
    console.log("Happy Birthday to you!");

}

happyBirthday("faizanali", "19", "PS5");
happyBirthday("Oggy", "13", "gaming mobile");


function add(x , y){
    let result = x + y;
    return result;
}

console.log(add(10, 48));

function subtract(A , B){
    let score = A - B;
    return score;
}

console.log(subtract(122 , 500));


function divide(C , D){
    let student = C/D;
    return student;
}

console.log(divide(200 , 75));


function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
       return false;
    }
}

console.log(isValidEmail("ABC@fake.com"));
console.log(isValidEmail("John123.com"));
console.log(isValidEmail("DEFC@fakeemail.com"));

function isValidsScore(score){
    if(score.includes("23")){
    return true;
}
else{
    return false;
}
}

console.log(isValidsScore("he is 23 years old"));
console.log(isValidsScore("he is 25 year old in 2025"));


function isValidSchoolID(id){
    if(id.includes("Cxnyt.#@1224aaAs")){
        return true;
    }
    else{
        return false;
    }
}

console.log(isValidSchoolID("ASsdA12434AS"));

console.log(isValidSchoolID("Cxnyt.#@1224aaAs"));

    function isValidAnime(anime){
        if(anime.includes("Attack On Titan")){
            return true;
        }
        else{
            return false;
        }
    } 
    

console.log(isValidAnime("Solo Levelling"));
console.log(isValidAnime("Attack On Titan"));
