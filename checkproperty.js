// .checked = property that determines the checked state of an
//       HTML  checkbox or radio button element 

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const bankaccountBtn = document.getElementById("bankaccountBtn");
const easypaisa = document.getElementById("easypaisa");
const jazzCash = document.getElementById("jazzCash");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `You are NOT subscribed`;
    }
   if(visaBtn.checked){
      paymentResult.textContent = `You are paying with Visa BanK Account`;
   }
   else if(mastercardBtn.checked){
   paymentResult.textContent = `You are paying with master card`;
   }
   else if(bankaccountBtn.checked){
    paymentResult.textContent = `You are paying with Bank Account`;
   }
   else if(easypaisa.checked){
    paymentResult.textContent = `You are paying with Pakistan Easy Paisa`;
   }
   else if(jazzCash.checked){
    paymentResult.textContent = ` You are paying with Jazz Cash Now!`;
   }
   else{
     paymentResult.textContent = `You must select a payment type`;
   }
}
