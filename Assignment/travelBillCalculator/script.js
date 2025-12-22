function calculate() {
  let km = Number(document.getElementById("km").value);
  let error = document.getElementById("error");
  let totalEl = document.getElementById("total");
  let breakdown = document.getElementById("breakdown");
  error.innerText = "";
  breakdown.innerHTML = "";
  totalEl.innerText = "Rs. 0";
  if (isNaN(km) || km < 0) {
    error.innerText = "Please enter valid kilometers";
    return;
  }

  let total = 0;
  if (km <= 10) {
    total = km * 11;
    breakdown.innerHTML = `${km} km * Rs.11 = Rs.${total.toFixed(2)}`;
  } else if (km <= 50) {
    let first = 10 * 11;
    let remaining = km - 10;
    let second = remaining * 10;
    total = first + second;
    breakdown.innerHTML =
      `10 km * Rs.11 = Rs.${first.toFixed(2)}<br>` +
      `${remaining} km * Rs.10 = Rs.${second.toFixed(2)}`;
  } else {
    let first = 10 * 11;
    let second = 40 * 10;
    let remaining = km - 50;
    let third = remaining * 9;
    total = first + second + third;
    breakdown.innerHTML =
      `10 km * Rs.11 = Rs.${first.toFixed(2)}<br>` +
      `40 km * Rs.10 = Rs.${second.toFixed(2)}<br>` +
      `${remaining} km * Rs.9 = Rs.${third.toFixed(2)}`;
  }
  totalEl.innerText = "Rs. " + total.toFixed(2);
}
