// Static = a keywords that defines a class or method that 
//          belong to a class intself rather than te objects created 
//          itself  from that class (class owns static , not objects).


class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

   static getCircumference(radius){
        return 2 * this.PI * radius;
   }

   static getArea(radius){
    return this.PI * radius * radius;   // * radius * radius mean radius whole square and this mean MathUtil.
     }
}

 
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(15));   // radius = 15  Pi = 3.14159. 
console.log(MathUtil.getCircumference(15));
console.log(MathUtil.getArea(15));