// Date Objects = Objects that contain values to represent dates and time 
 //                  these date objecta can be changed and formatted.


 //const date = new Date();


//console.log(date);

// Date(year , month , day , hour , minute , second , milli second(ms))


//const date = new Date(2025 , 3 , 14 , 2 , 13 , 5);


//console.log(date);

//const date = new Date(0);

//console.log(date);


//const date = new Date();


//const year = date.getFullYear();
//const month = date.getMonth();
//const day = date.getDate();
//const hour = date.getHours();
//const minutes = date.getMinutes();
//const seconds = date.getSeconds();
//const dayofWeek = date.getDay();





//console.log(year);
//console.log(month);
//console.log(day);
//console.log(hour);
//console.log(minutes);
//console.log(seconds);
//console.log(dayofWeek);

const date = new Date();

date.setFullYear(2024);
date.setMonth(2);
date.setDate(8);
date.setHours(12);
date.setMinutes(34);
date.setSeconds(55);

console.log(date);

// COMPARE 2 DATES OBJECTS.

const date1 = new Date("2024-4-21");

const date2 = new Date("2021-12-13");

if(date1 > date2){
      console.log("Happy New Year");
}
else{
    console.log("Not New Year");
}


