// random passowrd generartor


function generatePassword(length, includeLowercase, includeUppercase, includeSymbols, includeNumbers){
    


       const UppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       const LowercaseChars = "abcdefghijklmnopqrstuvwxyz"
       const SymbolsChars = "!@$%&*()?}{|<>"
       const NumbersChars  = "0123456789"
        
       let allowedChars = "";
       let password = "";
        
       allowedChars += includeLowercase ? LowercaseChars : "";
       allowedChars += includeUppercase ? UppercaseChars : "";
       allowedChars += includeNumbers ? NumbersChars : "";
       allowedChars += includeSymbols ? SymbolsChars : "";
         
       if(length <=0){
            return `(length must be at least 1)`;
       }

       if(allowedChars.length === 0){
            return `(at least be 1)`;
       }
       for(let i=0; i < length; i++){
            const randomIndex =    Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
       }
      
      return password;

}

const passwordlength = 12;
const includeLowercase = true;
const includeUppercase = false;
const includeSymbols = false;
const includeNumbers = false;


const password =  generatePassword(passwordlength, 
                                  includeLowercase, 
                                  includeUppercase, 
                                  includeSymbols, 
                                  includeNumbers);

console.log(`Generate Password: ${password}`);