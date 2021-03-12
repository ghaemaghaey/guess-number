let writerChange = document.querySelectorAll(".writed");
let bodyChange = document.querySelectorAll(".body");
let btnChange = document.querySelectorAll(".btn");
let change_theme = document.getElementById("change-theme");
let inputChange = document.querySelectorAll('.input')
change_theme.addEventListener("click", ChangeTheme);
if (localStorage.getItem("theme") == "dark") {
  switchToDark();
} else if (localStorage.getItem("theme") == "light") {
  switchToLight();
} else {
  localStorage.setItem("theme", "dark");
}
function ChangeTheme() {
  switch (localStorage.getItem("theme")) {
    case "light":
      switchToDark();
      break;
    case "dark":
      switchToLight();
      break;
  }
}
function switchToDark() {
  changeThemefrom(true, bodyChange);
  changeThemefrom(true, writerChange);
  changeThemefrom(true, btnChange);
  changeThemefrom(true, inputChange);
  localStorage.setItem("theme", "dark");
}
function switchToLight() {
  changeThemefrom(false, bodyChange);
  changeThemefrom(false, writerChange);
  changeThemefrom(false, btnChange);
  changeThemefrom(false, inputChange);
  localStorage.setItem("theme", "light");
}
//change theme with foreach functions
function changeThemefrom(dark, htmlElement) {
  if (dark === true) {
    htmlElement.forEach((element) => element.classList.remove("light"));
    htmlElement.forEach((element) => element.classList.add("dark"));
  }
  if (dark === false) {
    htmlElement.forEach((element) => element.classList.remove("dark"));
    htmlElement.forEach((element) => element.classList.add("light"));
  }
}
