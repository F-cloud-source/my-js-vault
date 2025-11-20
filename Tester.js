
function newTask1() {
    return new Promise((resolve , rejected  =>{
        setTimeout(() => {
           resolve("This is task 1  and it is ended");
        }, 3000);
    }));
}

function newTask2() {
    return new Promise((resolve , rejected  =>{
        setTimeout(() => {
           resolve("This is task 2  and it is ended");
        }, 2000);
    }));
}

function newTask3() {
    return new Promise((resolve , rejected  =>{
        setTimeout(() => {
           resolve("This is task 3  and it is ended");
        }, 500);
    }));
}

async function  taskResults(){
  
    try{
    const  result1 = await newTask1();
    console.log(result1);

    const  result2 = await newTask1();
    console.log(result2);

    const  result3 = await newTask1();
    console.log(result3);
    }
    catch(error){
   console.error("Error Caught and it Unknown 💀☠️");
    }
}

taskResults();