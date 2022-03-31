const hamburger = document.querySelector("#hamburger");
const navList = document.querySelector("#navList");
const line = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
   line.forEach((e) => {
      e.classList.toggle("open");
   });
   if (navList.style.maxHeight) {
      navList.style.maxHeight = null;
   } else {
      navList.style.maxHeight = navList.scrollHeight + "px";
   }
});
