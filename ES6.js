// ES6 Module = An external file that contain reusable file code that can be Imported in to Javascript files.
                // Write resuable code for differt apps and Can contain variable , fuction and clasess and more
                //  as introduced as a Part of ECMAScript 20105 Update.
                

// import Module.js  CODE 

import {PI, getCircumference , getArea , getVolume} from  './Module.js';

console.log(PI);

const Circumference = getCircumference(10);

console.log(`${Circumference.toFixed(2)}cm`);   // to.Fixed(2) mean rounding off number  in this case we round off 2 numbers.

const Volume  = getVolume(12);

console.log(`${Volume.toFixed(1)}cm^2`);


const Area  = getArea(6);

console.log(`${Area.toFixed(2)}cm^3`);