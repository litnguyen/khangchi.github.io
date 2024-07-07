
// Image switcher code 

let myImage = document.querySelector('img');

myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox_png.webp") {
    myImage.setAttribute("src","images/chrome_icon.webp");
  } else {
    myImage.setAttribute("src", "images/firefox_png.webp");
  }
};

// Personalized welcome message code

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName)
    myHeading.innerHTML = 'Mozilla is cool, ' +  myName;
  }
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
};

myButton.onclick = () => {
  setUserName();
};