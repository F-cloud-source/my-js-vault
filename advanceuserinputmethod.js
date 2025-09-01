// how to create user input

// 2. PROFESSIONAL WAY = HTML textbox

let username;

document.getElementById("mysubmit").onclick = function(){
      username = document.getElementById("mytext").value;
      document.getElementById("myH1").textContent = `Hello ${username}`
}