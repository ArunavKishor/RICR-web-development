let inputnumber = 7;
function Guessnumber() {
  let guess = Number(document.getElementById("number").value);
  if (guess < inputnumber) {
    alert("TRY A SMALLER NUMBER.");
  } else if (guess > inputnumber) {
    alert("TRY A LARGER NUMBER.");
  } else {
    alert("Congratulations You guessed the right number");
  }
}
