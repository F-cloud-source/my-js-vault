// class = (ES6 feature)  provide a more structured and 
// cleaner way to work with Objects compared to Traditional
//  Constructor fuction example:-
//  Static Keyword , encapsculation , inheritance.


class Product{
    constructor(Companyname, productType ,  color , retailprice,  discountoffer , warranty , DozenBuyDiscount , dirttest , militaryGradeTest, deliveryCharges){
        this.Companyname = Companyname;
        this.productType = productType;
        this.color = color;
        this.retailprice = retailprice;
        this.discountoffer = discountoffer;
        this.warranty = warranty;
        this.DozenBuyDiscount = DozenBuyDiscount;
        this.dirttest = dirttest;
        this.militaryGradeTest = militaryGradeTest;
        this.deliveryCharges = deliveryCharges;

    }

    displayProduct(){
        console.log(`Company Name: ${this.Companyname}`);
        console.log(`Product Type: ${this.productType}`);
        console.log(`Color : ${this.color}`);
        console.log(`Retail Price: $${this.retailprice}`);
        console.log(`Discount Offer: $${this.discountoffer}`);
        console.log(`Warranty : $${this.warranty}`);
        console.log(`Dozen Buy Discount: $${this.DozenBuyDiscount}`);
        console.log(`Dirt Test: $${this.dirttest}`);
        console.log(`Military Grade Test: $${this.militaryGradeTest}`);
        console.log(`Delivery Charges Cost $${this.deliveryCharges} from Store to Around 5 MPH Radius`)
       
}

  calculateTotal(salestax){
       return this.retailprice + (this.retailprice * salestax);
  }

}


const salestax = 0.07;

const Product1 = new Product(
                 "NIKE ",
                 "Snikkers For Under 18 Boy and Girls",
                 "Light Grey",
                  35.99,
                  32.99,
                  "6 Months",
                  "If Costumers Buy One Dozen they will get 10 % OFF",                  
                  "Pass All military Grades Dirt",
                  "Pass all Military Grades Test in Differnt Weathers",
                  7
                            );



const Product2 = new Product(
                 "NIKE",
                 "Snikkers For Under 18 Boy and Girls",
                 "Black",
                  55.99,
                  52.99,
                  "8 Months",
                  "If Costumers Buy One Dozen they will get 9 % OFF",                  
                  "Pass All military Grades Dirt",
                  "Pass all Military Grades Test in Differnt Weathers",
                  7
                            );



const Product3 = new Product(
                 "NIKE",
                 "Snikkers For Under 18 Boy and Girls",
                 "PINK Girl  HIGH SCHOOL EDITION",
                  40.99,
                  39.99,
                  "8 Months",
                  "If Costumers Buy One Dozen they will get 12 % OFF+ 2.5% OFF if buy in first month on Sales",                  
                  "Pass All military Grades Dirt",
                  "Pass all Military Grades Test in Differnt Weathers",
                  7
                            );



const Product4 = new Product(
                 "NIKE",
                 "Snikkers For Under 18 Boy and Girls",
                 "BLACK Boys COLLEGE EDITION",
                  67.99,
                  64.99,
                  "7 Months",
                  "If Costumers Buy One Dozen they will get 10 %  OFF + 3% OFF if buy in first month on Sales",                  
                  "Pass All military Grades Dirt",
                  "Pass all Military Grades Test in Differnt Weathers",
                  7
                            );



const Product5 = new Product(
                 "NIKE ",
                 "Snikkers For Under 18 Boy and Girls",
                 "Light Grey",
                  54.99,
                  50.99,
                  "7 Months",
                  "If Costumers Buy One Dozen they will get 8 % OFF",                  
                  "Pass All military Grades Dirt",
                  "Pass all Military Grades Test in Differnt Weathers",
                  7
                            );


const Product6 = new Product(
                 "NIKE",
                 "Snikkers For Under 18 Boy and Girls",
                 "Light Grey",
                  35.99,
                  32.99,
                  "6 Months",
                  "If Costumers Buy One Dozen they will get 10 % OFF",                  
                  "Pass All military Grades Dirt",
                  "Pass all Military Grades Test in Differnt Weathers",
                  7
                            );
                           
 
const total =  Product1.calculateTotal(salestax);
console.log(`Total Retail Price (with salestax): $${total.toFixed(2)}`);             

Product1.displayProduct();
Product2.displayProduct();
Product3.displayProduct();
Product4.displayProduct();
Product5.displayProduct();
Product6.displayProduct();




