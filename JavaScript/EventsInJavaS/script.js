function On() {
  document.getElementById("bulb").style.backgroundColor = "yellow";
}
function Off() {
  document.getElementById("bulb").style.backgroundColor = "white";
}
function Red() {
  document.getElementById("bulb").style.backgroundColor = "Red";
}
function Blue() {
  document.getElementById("bulb").style.backgroundColor = "Blue";
}
function Green() {
  document.getElementById("bulb").style.backgroundColor = "Green";
}
const userColor = document.getElementById("color");
// console.log(userColor.vaslue);
userColor.addEventListener("change", () => changeBulbColor(userColor.value));

function changeBulbColor(color) {
  document.getElementById("bulb").style.backgroundColor = color;
}
function SB_control() {
  const btn = document.getElementById("SB_btn");
  console.log(btn);
  if (btn.innerText === "On") {
    document.getElementById("SB_btn").innerText = "Off";
    document.getElementById("smartBulb").classList.add("On");
  } else {
    document.getElementById("SB_btn").innerText = "On";
    document.getElementById("smartBulb").classList.remove("On");
  }
}
function SB_control2() {
  document.getElementById("smartBulb").classList.toggle("On");
}
