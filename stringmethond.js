// string methods = allow you to manipulate and work with text (strings)

//username.charAt("1") tell exact position of string in case of faizan ali name it is f as it is 0 mean 1 position as f is 1 word in string faizan ali 
//username.lastindexof("a")  a mean letter of variable of faizan as telling waht is position in number mean in case of a it is 2 as a lies in second posbition
 // username.length mean the total charcter of all string in case of faizan ali it is total words length 
 // username.trim mean it can cut all emppty space in valirble like in faizan ali
// username.toUpperCase () is use to make all word in upper case words
// username.toLowerCase() is to use all word lower case.
// username.repeat () is use to make repeat all string as if (1) it mean faizan ali repeat on time as  OUTPUT= faizan ali faizan ali.
// start with method help with ti idetify to check any space in word start.
// end with method help with to identify to check any space with word end.
// replece all is use to replece any specifc value on string data type and it vry usefull 
// pad end and pad start help to if i ahve 15 cword and i need to pad it help me as addig 0 or any numer to fill that gap in start called padding edna nd padding start.
let userName = "faizanali";

let result = userName.includes(" ");

if(result){
    console.log("Your username can't include  with '  ' ");
}
else{
console.log(userName);
}

let phoneNumber = "123-4567-901";

phoneNumber = phoneNumber.padEnd( "18", "0");

console.log(phoneNumber);
