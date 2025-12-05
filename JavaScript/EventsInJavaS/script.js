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

document.getElementById("c1").addEventListener("mouseenter",()=>{fillColour("red")});
document.getElementById("c2").addEventListener("mouseenter",()=>{fillColour("orange")});
document.getElementById("c3").addEventListener("mouseenter",()=>{fillColour("yellow")});
document.getElementById("c4").addEventListener("mouseenter",()=>{fillColour("green")});
document.getElementById("c5").addEventListener("mouseenter",()=>{fillColour("blue")});
document.getElementById("c6").addEventListener("mouseenter",()=>{fillColour("indigo")});
document.getElementById("c7").addEventListener("mouseenter",()=>{fillColour("violet")});

// document.getElementById("led").addEventListener("mouseleave",()=>{fillColourA("white")});

// function fillColourA(Colour){
//   document.getElementById("led").style.backgroundColor=Colour;
// }

document.getElementById("c1").addEventListener("mouseleave",()=>{fillColour("white")});
document.getElementById("c2").addEventListener("mouseleave",()=>{fillColour("white")});
document.getElementById("c3").addEventListener("mouseleave",()=>{fillColour("white")});
document.getElementById("c4").addEventListener("mouseleave",()=>{fillColour("white")});
document.getElementById("c5").addEventListener("mouseleave",()=>{fillColour("white")});
document.getElementById("c6").addEventListener("mouseleave",()=>{fillColour("white")});
document.getElementById("c7").addEventListener("mouseleave",()=>{fillColour("white")});

function fillColour(colour){
  document.getElementById("led").style.backgroundColor=colour;
}