//  Simple way to use shuffle if  you are making game in js and also need some randominics.
// A mean Ace , J mean jack , Q mean queen , K mean King as in card Game.


// defects of using Sort Method = the Larger the size of 
// array element beceom the more Result become Less Efficient.


// const cards = ["A" , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , "J" , "Q" , "K"];


// cards.sort(() => Math.random() - 0.5);

// console.log(cards); 

// METHOD NO 2 :- FISHER-YATES ALGORITHM.

const cards = ["A" , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , "J" , "Q" , "K"];


shuffle(cards);

console.log(cards);


function shuffle(array){
    for(let i = array.length - 1; i > 0;  i--){
       const random = Math.floor(Math.random()  * (i + 1 ));

       [array[i], array[random]]  = [array[random] , array[i]]
    }
}


// i mean index and array.length mean total length of arrays and
//  math.Number()
//  mean genrating a random 
// decimal num,ber to muiltpy with i+1 to make it not in points

