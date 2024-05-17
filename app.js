const menuicon = document.querySelector("#menuicon");
const menu = document.querySelector("#menu");

menuicon.addEventListener("click", () => {
    menu.classList.toggle("disp");
});