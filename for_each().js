// forEach() = methond used to iterate over the elements
//             of any array and apply a specified fucnction(call back)
//             to each elements 






let numbers = [1 , 2 , 3 , 4 , 5 , 6 ];

numbers.forEach(triple);
numbers.forEach(double);
numbers.forEach(display);


function triple(element, index, array){
    array[index] = element * 3;
}

function double(element, index , array){
    array[index] = element * 2;
}


function display(element){
    console.log(element);
}

