
document.querySelector("#date").textContent = new Date().getFullYear();

document.querySelector(".arrow-1").addEventListener("click", () => {
  /* to rotate the arrow*/ 
  document.querySelector(".down-1").classList.toggle("rotate")
  document.querySelector(".down-2").classList.remove("rotate")
  document.querySelector(".down-3").classList.remove("rotate")
  /* to rotate the arrow*/ 


  document.querySelector(".p-1").classList.toggle("special");
  document.querySelector(".p-2").classList.remove("special");
  document.querySelector(".p-3").classList.remove("special");
});

document.querySelector(".arrow-2").addEventListener("click", () => {
  /* to rotate the arrow*/ 
  document.querySelector(".down-1").classList.remove("rotate")
  document.querySelector(".down-2").classList.toggle("rotate")
  document.querySelector(".down-3").classList.remove("rotate")
  /* to rotate the arrow*/ 


  document.querySelector(".p-1").classList.remove("special");
  document.querySelector(".p-2").classList.toggle("special");
  document.querySelector(".p-3").classList.remove("special");
});

document.querySelector(".arrow-3").addEventListener("click", () => {
  /* to rotate the arrow*/ 
  document.querySelector(".down-1").classList.remove("rotate")
  document.querySelector(".down-2").classList.remove("rotate")
  document.querySelector(".down-3").classList.toggle("rotate")
  /* to rotate the arrow*/ 


  document.querySelector(".p-1").classList.remove("special");
  document.querySelector(".p-2").classList.remove("special");
  document.querySelector(".p-3").classList.toggle("special");
});
