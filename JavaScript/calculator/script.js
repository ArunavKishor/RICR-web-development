function Input(char) {
  // document.getElementById("number").value=char;
  console.log("C")
  if (char === "=") {
    document.getElementById("number").value = "result";
  } else if (char === "c") {
    document.getElementById("number").value = "";
  } else {
    document.getElementById("number").value = char;
  }
}
