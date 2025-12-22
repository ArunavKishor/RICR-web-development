function CalculateSalary() {
  const salary = Number(document.getElementById("Salary").value);
  const btn = document.getElementById("btn");

  if (salary <= 0 || isNaN(salary)) {
    alert("Please enter valid salary");
    return;
  }

  const hra = (salary * 20) / 100;
  const da = (salary * 10) / 100;
  const GrossSalary = salary + hra + da;

  document.getElementById("Basic").innerText = `${salary.toFixed(0)}`;
  document.getElementById("Hra").innerText = `${hra.toFixed(0)}`;
  document.getElementById("Da").innerText = `${da.toFixed(0)}`;
  document.getElementById("Gross").innerText = `${GrossSalary.toFixed(0)}`;
  document.getElementById("salaryTable").style.display = "block";

  const add = document.getElementById("input");
  const ele = document.createElement("input");
  ele.classList.add("form-control", "container", "w-100", "gap-2");
  add.appendChild(ele);

  const btn1 = document.createElement("button");

  btn1.classList.add("btn", "btn-primary");

  btn1.innerText = "Add";
  btn.appendChild(btn1);
}

function Reset() {
  document.getElementById("Salary").value = "";

  document.getElementById("Basic").innerText = "";
  document.getElementById("Hra").innerText = "";
  document.getElementById("Da").innerText = "";
  document.getElementById("Gross").innerText = "";
  document.getElementById("salaryTable").style.display = "none";
}
