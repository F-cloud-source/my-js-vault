// .map() = accpets a callback from a array 
//          and applies that function 
//          to each elelemt of an array, 
//          then return a new array.


const students = ["Alex" , "John" , "Patrick" , "Ali"];
const studentsUpper = students.map(UpperCase);
const studentsLower = students.map(LowerCase);


console.log(studentsUpper);
console.log(studentsLower);

function UpperCase(element){
      return  element.toUpperCase();
}

function LowerCase(element){
    return element.toLowerCase();
}


// Another practical example of .map() in js.

const dates = ["2014-1-12", "2034-4-19", "2025-4-24"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts  = element.split("-");
    return `${parts[1]}/${parts[0]}/${parts[2]}`
}


// another exapmel relted to game name 


const game = ["Pub-g", "Ass-aian Creed", "Free-Fire"];
const gamenewname = game.map(gamecorrection);


console.log(gamenewname)

function gamecorrection(element){
  return element.replace(/[^a-zA-Z0-9]/g ,"");
}
