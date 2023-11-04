console.log("script file");
window.addEventListener("scroll", function () {
  const header = document.getElementById("sticky-header");
  const mainScreen = this.document.querySelector(".main-screen");
  console.log(mainScreen.clientHeight);
  console.log("script file");
  if (window.scrollY > mainScreen.clientHeight) {
    // You can adjust this value to your preferred scrolling point
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
