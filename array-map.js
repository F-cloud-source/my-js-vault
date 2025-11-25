// .map() = accpets a callback from a array 
//          and applies that function 
//          to each elelemt of an array, 
//          then return a new array.


const students = ["Alex" , "John" , "Patrick" , "Ali"];
const studentsUpper = students.map(UpperCase); // Passing UpperCase as an call back To get resutls in Sync manner
const studentsLower = students.map(LowerCase); // Passing LowerCase as an call back To get resutls in Sync manner


console.log(studentsUpper);
console.log(studentsLower);

function UpperCase(element){
      return  element.toUpperCase(); // return value after use toUpperCase() funcntion
}

function LowerCase(element){
    return element.toLowerCase();  // return value after use toLowerCase() funcntion
}


// Another practical Of Sets of Dates example of .map() in js.

const dates = ["2014-1-12", "2034-4-19", "2025-4-24"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts  = element.split("-");
    return `${parts[1]}/${parts[0]}/${parts[2]}`
}


// another example related to game Real Life Games


const game = ["Pub-g", "Ass-aian Creed", "Free-Fire"];
const gamenewname = game.map(gamecorrection);


console.log(gamenewname)

function gamecorrection(element){
  return element.replace(/[^a-zA-Z0-9]/g ,"");
}
