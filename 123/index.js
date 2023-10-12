
document.addEventListener("DOMContentLoaded", function() {

const userButton = document.getElementById("userButton");
const investorButton = document.getElementById("investorButton");



    
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSf2a9KiloE1HhxhkIq9sF7kGXCaNjHAm5PmYchHpJeaYkIB7Q/viewform?usp=sf_link";
  
    userButton.addEventListener("click", function() {
      window.location.href = googleFormURL;
    });
  
    investorButton.addEventListener("click", function() {
      window.location.href = googleFormURL;
    });
  });
  