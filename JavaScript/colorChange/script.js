const userColor = document.getElementById("color1");
console.log("Null");
userColor.addEventListener("change", () =>
  changeHeadingColour(userColor.value)
);
function changeHeadingColour(color1) {
  document.getElementById("Heading").style.color = color1;
}

const userColor1 = document.getElementById("color2");
console.log("Null");
userColor.addEventListener("change", () =>
  changeTextColour(userColor1.value)
);
function changeTextColour(color2) {
  document.getElementById("lorem").style.color = color2;
}

const userColor2 = document.getElementById("color3");
console.log("Null");
userColor.addEventListener("change", () =>
  changeBackColour(userColor2.value)
);
function changeBackColour(color3) {
  document.getElementById("text").style.backgroundColor=color3;
}
