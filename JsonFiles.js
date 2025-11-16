// JSON = (Javascript Object Notation) data-Exchange Format
//        Used for exchanging Data between server and Web applications 
//        JSON Files  {key : value}   OR [value1 , value2 , value 3],

 
//       JSON.stringfy() =  converts a Js object in to a Json string
//       JSON.parse() =  converts a Json string in to js object

// Array and Object and Bollean and Null to JSON format Conversion

const Name1 = ["Faizan" , "Ali" , "Hamza" , "Hamid" , "Sara"];

const Person1 = {
    "name": "Faizan Ali",
    "age": 30,
    "Roll Number": "F25-XXXX",
    "isemployed": false,
    "isMarried": true,
    "totalKids": 2,
    "Hobby": ["Eating" , "Cooking" , "Karate" , "Baking Cake"]

}


const People1 = [
    {
    "name": "Faizan Ali",
    "age": 30,
    "Roll Number": "F25-XXXX",
    "isemployed": false,
    "isMarried": true,
    "totalKids": 2
    },

    {
    "name": "Hamid",
    "age": 56,
    "Roll Number": "F00-XXXX",
    "isemployed": true,
    "isMarried": false,
    "totalKids": "None"
    },

    {
    "name": "Sarah",
    "age": 56,
    "Roll Number": "F12-XXXX",
    "isemployed": true,
    "isMarried":  true,
    "totalKids": 3 
    }

]



const jsonString1 = JSON.stringify(Name1);
const jsonString2 = JSON.stringify(Person1);
const jsonString3 = JSON.stringify(People1);

console.log(Name1);
console.log(jsonString1);

console.log(Person1);
console.log(jsonString2);

console.log(People1);
console.log(jsonString3);


// From JSON Text to Array  and Bollean and Objects
// We use `` to mame any array or object or bollean of Json file to make Json plan Text for Fetching APi or other Web Applications Operations


const JsonName2 = `["David" , "Luci" , "Micheal" , "Kevin" , "Eren" , "Xroarath"]`;

const JsonPerson2 = `{
    "name": "Micheal",
    "age": 20,
    "Roll Number": "A05-XXXX",
    "isemployed": false,
    "isMarried": true,
    "totalKids": 5,
    "Hobby": ["Eating" , "Fishing" , "Karate" , "Baking Cake"]

}`

const JsonPeople2 = `[
    {
    "name": "Micheal",
    "age": 20,
    "Roll Number": "A05-XXXX",
    "isemployed": false,
    "isMarried": true,
    "totalKids": 5
    
    },
 

    {
    "name": "Luci",
    "age": 24,
    "Roll Number": "A55-XXXX",
    "isemployed": false,
    "isMarried": false,
    "totalKids": "None"

    },

    {
    "name": "Eren",
    "age": 16,
    "Roll Number": "F12-XXXX",
    "isemployed": true,
    "isMarried":  false,
    "totalKids": "None"
    }

]`

const ParseData1 = JSON.parse(JsonName2);
const ParseData2 = JSON.parse(JsonPeople2);
const ParseData3 = JSON.parse(JsonPerson2);

console.log(JsonName2);
console.log(ParseData1);

console.log(JsonPeople2);
console.log(ParseData2);

console.log(JsonPerson2);
console.log(ParseData3);