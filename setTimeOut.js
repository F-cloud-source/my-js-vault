// setTimeOut = function in JS that allows you to schedule.
//              the excution of a after an amont of time  (milliseconds).
//              Times are approptiate (varies based on the Workload of the JS runtime env.).
// ClearTimeout(timeoutID) =  can cancel a timeout before it triggers.

//             setTimeOut(call back , delay);

 //function setTimeOut(){
    //window.alert("I am Good Skill in JS ");
 //}


//setTimeOut(setTimeOut , 3000);

//setTimeout(() =>  window.alert("Hello Guys") , 4000);


//const timeoutID  = setTimeOut(() => window.alert(`Js is cool`), 4000);


//ClearTimeout(timeoutID);


let timeoutID;


function startTimer(){
     timeoutID  =  setTimeout(()  => window.alert(`Hello JS`), 5000);
     console.log("Count is Started");
}

function clearTimer(){
   clearTimeout(timeoutID);
   console.log("Count is End");
}

