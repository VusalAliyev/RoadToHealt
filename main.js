var toInput = document.querySelector('.right-input');
var adversting = document.querySelector(".adversting");
var body = document.querySelector("body");
var container=document.querySelector(".container")
console.log("JS worked!");

toInput.addEventListener("click", myFunction); 

function myFunction(e) {
  console.log("eventHandling worked");
  e.preventDefault();
  adversting.style.display = "block ";
  container.style.opacity="0.1";
  adversting.style.opacity = "1 ";
  setTimeout(() => {
    adversting.style.display="none"
    container.style.opacity="1";

  }, 4000);

}


  
