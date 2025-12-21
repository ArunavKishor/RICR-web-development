function calculateBillUI() {
  const units = Number(document.getElementById("units").value);

  if (units <= 0 || isNaN(units)) {
    alert("Please enter valid units");
    return;
  }

  let u1 = 0, u2 = 0, u3 = 0, u4 = 0;
  let a1 = 0, a2 = 0, a3 = 0, a4 = 0;

  if (units <= 50) {
    u1 = units;
  } 
  else if (units <= 200) {
    u1 = 50;
    u2 = units - 50;
  } 
  else if (units <= 450) {
    u1 = 50;
    u2 = 150;
    u3 = units - 200;
  } 
  else {
    u1 = 50;
    u2 = 150;
    u3 = 250;
    u4 = units - 450;
  }

  a1 = u1 * 0.50;
  a2 = u2 * 0.75;
  a3 = u3 * 1.20;
  a4 = u4 * 1.50;

  const subtotal = a1 + a2 + a3 + a4;
  const surcharge = subtotal * 0.20;
  const total = subtotal + surcharge;

  document.getElementById("u1").innerText = u1;

  document.getElementById("u2").innerText = u2;

  document.getElementById("u3").innerText = u3;

  document.getElementById("u4").innerText = u4;

  document.getElementById("a1").innerText = ` ${a1.toFixed(2)}`;

  document.getElementById("a2").innerText = ` ${a2.toFixed(2)}`;

  document.getElementById("a3").innerText = ` ${a3.toFixed(2)}`;

  document.getElementById("a4").innerText = ` ${a4.toFixed(2)}`;

  document.getElementById("energyCharge").innerText =
    `₹ ${subtotal.toFixed(2)}`;

  document.getElementById("surcharge").innerText =
    `₹ ${surcharge.toFixed(2)}`;

  document.getElementById("totalBill").innerText =
    `₹ ${total.toFixed(2)}`;
}

function resetData() {
  document.getElementById("units").value = "";

  document.getElementById("energyCharge").innerText = " 0";
  document.getElementById("surcharge").innerText = " 0";
  document.getElementById("totalBill").innerText = " 0";

  document.getElementById("unit1").innerText = 0;
  document.getElementById("unit2").innerText = 0;
  document.getElementById("unit3").innerText = 0;
  document.getElementById("unit4").innerText = 0;

  document.getElementById("a1").innerText = " 0";
  document.getElementById("a2").innerText = " 0";
  document.getElementById("a3").innerText = " 0";
  document.getElementById("a4").innerText = " 0";
}