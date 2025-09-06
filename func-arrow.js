// arrow function = a consie way to write function expressions 
// and good for simple fucntion that you use only one 
//         (parameters)   =>  some code

// basic way to write js code

function Country(){
    console.log("Japan is a Modern and Anime style COUNTRY!")
}

Country();


//  Mdeium  way to write js code 

const hello  = function(){
    console.log("HELLO GUYS!");
}

hello();

// more concise way  to write js code give same output in 
// console in chrome dev tool use arrow function in js 
// use tihs arrow function formula (parameters)  => some code


const grades = () => console.log("This Boy Has A1 Grades in Whole CLASS!")

grades();
 
// more advanced example use arguemnets and placeholder ${ } 
// and template literals and adding one than more arguments 
// for a software engerring resume.


const MyBackGround = (name, age, education, siblings, portfolio , experience) => {console.log(`My Name is  ${name}`)
                                    console.log(`My age is ${age}`)
                                    console.log(`MY education is ${education}`)
                                    console.log(`I have ${siblings} siblings One is bigger brother and one is little sister as i am middle child`)
                                    console.log( `I have make good project related to ${portfolio} `)
                                    console.log(`I have 2 Small FINTECH ${ experience}`)};                         
 

MyBackGround("Alya", "26","BS Software engerring", "2","AI and WEB APPS  and BACKENDS  PROJECTS in JS  and  learn DSA and Practice LeetCode" , "Local Software House INTERSHIPS in my University 6-8 Semester. Dear Recruiter SIR");