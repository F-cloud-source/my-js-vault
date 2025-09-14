// nested Objects = Objects inside of other objects.
//                  Allows to represent more complex data structures
//                  Child Objects are enclosed by a Parent Objects

//                 Person{Address{} , ContactInfo{}}
//                 Shopping Card { keyboard{} , mouse{} , Monitor{}}.


const person = {
     fullName: "Alex",
     age: 34,
     isStudent: true,
     Hobby: ["coding" , "Car racing" , "Reading Books"],

     Address: {

        street: "No 2",
        City: "California",
        martialStatus: "Yes",
        kid: "2 Twin kids baby Girls",

     }

};


 // . mean propterty  accessor in js of respective objects.


console.log(person.fullName);
console.log(person.isStudent);
console.log(person.age);
console.log(person.Hobby[0]);
console.log(person.Address.martialStatus);

for(const propterty in person.Address){
   console.log(person.Address[propterty]);
}

// example costumer bank account:-

class bankAccountHistory{
   constructor(montlhyIncome, accountOpenCost, bankAccountType , anyInvestment , ...bankStatment ){
      this.montlhyIncome = montlhyIncome;
      this.accountOpenCost = accountOpenCost;
      this.bankAccountType = bankAccountType;
      this.anyInvestment = anyInvestment;
      this.bankStatment = new BankStatment (...bankStatment);
     
   }
}

class BankStatment{
   constructor(month1, month2, month3, month4, month5, month6){

      this.month1 = month1
      this.month2 = month2
      this.month3 = month3
      this.month4 = month4
      this.month5 = month5
      this.month6 = month6
      
   }
}


const Costumer = new bankAccountHistory("6000$", 
                                        "100$ + tax" ,
                                        "Normal Silver Class",
                                         "None", 
                                         "3400$" ,
                                         "4200$" , 
                                         "5000$" , 
                                         "3909$" , 
                                         "3600$" ,
                                         "2000$");
 

console.log(Costumer.accountOpenCost);

