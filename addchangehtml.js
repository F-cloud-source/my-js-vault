//   EXAMPLE 1 <h1>

//  STEP 1 CREATE THE ELEMENT 

    const newH1 = document.createElement("h1");

//  STEP 2 ADD ATTRIBUTES/PROPERTIES

    newH1.textContent = "Js is used in web dev";

//  STEP 3 APPEND ELEMENT TO DOM

//  document.body.append(newH1);  // document.body mean we are accessing it main parent mean body of HTML document.
//  append give last child and prepend give first child on webpage.
//  document.body.prepend(newH1);
//  i choose box2 as parent rather as body.
    document.getElementById("box2").append(newH1);
//  document.getElementById("box2").prepend(newH1);
//  because Box2 is child of body(parent) of webpage it cool in js.

//  newElement we need to add = newH1 
//  currentElement is Box1 


//  const Box3 = document.getElementById("box3");
//  document.body.insertBefore(newH1, Box3);

//  in this example NodeList is Boxes
//  const Boxes = document.querySelectorAll(".box");
//  document.body.insertBefore(newH1, Boxes[4]);

 // console.log(Boxes); // passing Boxes as An Argument in console.log.

    newH1.id = "NewH1";
    newH1.style.color = "red";
    newH1.style.textAlign = "center";

//  REMOVE HTML ELEMENT
//  in this case  we remove child newH1 by Using removeChild()  js built in Method.
//  And pass the element we need to remove as an Argument In This Case Argument is newH1.
    document.getElementById("box2").removeChild(newH1);  





  