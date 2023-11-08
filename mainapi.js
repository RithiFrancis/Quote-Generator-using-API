const url = "https://api.quotable.io/random";

let btn = document.getElementById("btn");

function generateQuote(){
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
    document.getElementById("quote").innerHTML = data.content; 
    document.getElementById("author").innerHTML = data.author;
   })
 .catch(function(err) {
    console.log(err); 
    });
 }
 // Repeat generateQuote() every 10 seconds
btn.addEventListener("click", generateQuote);
setInterval(generateQuote() ,10000);
