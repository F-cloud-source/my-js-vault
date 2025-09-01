// for loop =  repeat some code a LIMITED amount of times 


// for loop simple concept code and all concept deatils in javascript.
for(let Pi = 0;   Pi<=12;   Pi+=3){
    console.log(Pi);
    
}

console.log("HAPPY NEW YEAR 2025");

  // for loop continue case in js. and contiune mean it just neglect that specific number like 13 we choose and  go all loop.

for(let p = 2; p <= 20; p++){

     if(p == 12){
        continue;
     }
     else{
        console.log(p);
     }

}

// for loop break case in js. as break loop just stop the number loop as in this case we choose 12 so all loop stop at 12.
for( let A = 1; A <= 30; A++){

    if(A == 12){
        break;
    }
    else{
        console.log(A);
    }
}