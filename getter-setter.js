// getter = A special method to make a property readbale.
// setter = A special method to  make a property writeable.



// validate and modify a value when writing / reading a property.

class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
        
    }

    set width(newWidth){
       if(newWidth > 0){    // _width mean private value for other developers in js code.
        this._width = newWidth;
       }
       else{
         console.error("Width must be a positive Number!");
       }
    }

   set height(newHeight){
    if(newHeight > 0){     // _height mean private value for other developers in js code.
     this._height  = newHeight;
    }
    else{
        console.error("Height must be a positive Number!")
    }
}

  get width(){
    return `${this._width.toFixed(1)} cm`;

}

 get height(){
    return `${this._height.toFixed(1)} cm`;
 }

 get area(){
    return `${(this._width * this._height).toFixed(1)} cm ^ 2`;   //accessiblility without make property and not in contructor of main parent class in js.
 }

}

const rectangle = new Rectangle(120 , 34);

console.log(rectangle.height);
console.log(rectangle.width);
console.log(rectangle.area);