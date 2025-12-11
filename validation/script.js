function Submit() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("Email").value.trim();
  const number = document.getElementById("number").value.trim();
  const dob = document.getElementById("dob").value.trim();

    document.querySelectorAll

  if (!/^[a-zA-Z ]+$/.test(name)) {
    alert("Invalid name format");
    return;
  }
  if (!/^[a-zA-Z0-9._]+@(gmail\.com|yahoo\.co\.in|outlook\.com)$/.test(email)) {
    alert("Invalid email format");
    return;
  }
  if (!/^[6-9]\d(9)+$/.test(number)) {
    alert("Invalid number");
    return;
  }

  const currentDate = new Date().getFullYear();
  const birthYear=Number (db.split("-")[0]);

  console.log(currentDate);

  //use logic of age calculator

  const data = {
    FullName: name,
    Email: email,
    Number: number,
    DOB: dob,
  };
  console.log(data);
}
