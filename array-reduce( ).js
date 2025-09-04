// .reduce() = Reduce the elemnet of a
//             array to a new single array


const Prizes = [10, 4, 6, 12, 19 , 23];

const TotalSum = Prizes.reduce(sum, 0);  // callback is sum and 0 mean first 
                                         // intial value as in reduce methond to 
                                         // const Prizes = [10, 4, 6, 12, 19, 7];


console.log(`$${TotalSum.toFixed(2)}`);

function sum(accumulator , element){  
      return accumulator + element;
}


//  finding max and min grades use .reduce( ) in arrays in javascript ;

const grades = [13, 23, 70 , 65, 89, 92];

const max = grades.reduce(MaxGrade);
const min = grades.reduce(MinGrades);

console.log(max);

console.log(min);

function MaxGrade(accumulator, element){
    return Math.max(accumulator, element);
}

function MinGrades(accumulator, element){
    return Math.min(accumulator, element);
}
