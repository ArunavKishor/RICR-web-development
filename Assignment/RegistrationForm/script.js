function Submit() {
  const nm = document.getElementById("fullName").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("mobile").value.trim();
  const db = document.getElementById("dob").value.trim();

  const qualification = document.getElementById("qualification").value;
  const score = document.getElementById("score").value.trim();
  const course = document.getElementById("course").value;

  const address = document.getElementById("Residential").value.trim();
  const city = document.getElementById("city").value.trim();
  const pin = document.getElementById("pin").value.trim();

  const gname = document.getElementById("Details").value.trim();
  const gcontact = document.getElementById("GuardianContact").value.trim();

  const how = document.getElementById("How").value;
  const special = document.getElementById("special").value.trim();
  if (!nm) {
    alert("Full Name is Required");
    return;
  } else if (!/^[A-Za-z ]+$/.test(nm)) {
    alert("Name should contain only alphabets and spaces");
    return;
  }

  if (!em) {
    alert("Email is Required");
    return;
  } else if (!/^[\w\.]+@(gmail|outlook|yahoo)\.(com|in|co.in)$/.test(em)) {
    alert("Enter a valid Email");
    return;
  }

  if (!ph) {
    alert("Mobile number is Required");
    return;
  } else if (!/^[6-9]\d{9}$/.test(ph)) {
    alert("Only valid Indian mobile numbers allowed");
    return;
  }

  if (!db) {
    alert("Date of Birth is Required");
    return;
  } else {
    const currentYear = new Date().getFullYear();
    const birthYear = Number(db.split("-")[0]);
    if (currentYear - birthYear < 18) {
      alert("You must be at least 18 years old");
      return;
    }
  }

  if (!qualification) {
    alert("Please select Qualification");
    return;
  }

  if (!score) {
    alert("Percentage / Grade is Required");
    return;
  }

  if (!course) {
    alert("Please select a Course");
    return;
  }

  if (!address) {
    alert("Residential Address is Required");
    return;
  }

  if (!city) {
    alert("City is Required");
    return;
  }

  if (!pin) {
    alert("Pin Code is Required");
    return;
  } else if (!/^\d{6}$/.test(pin)) {
    alert("Enter a valid 6-digit Pin Code");
    return;
  }

  if (!gname) {
    alert("Guardian Name is Required");
    return;
  }

  if (!gcontact) {
    alert("Guardian Contact is Required");
    return;
  } else if (!/^[6-9]\d{9}$/.test(gcontact)) {
    alert("Enter valid Guardian Mobile Number");
    return;
  }

  if (!how) {
    alert("Please select how you heard about us");
    return;
  }

  if (!special) {
    alert("Special Requirements field cannot be empty");
    return;
  }
  const data = {
    FullName: nm,
    Email: em,
    Mobile: ph,
    DOB: db,
    Qualification: qualification,
    Score: score,
    Course: course,
    Address: address,
    City: city,
    Pin: pin,
    GuardianName: gname,
    GuardianContact: gcontact,
    Reference: how,
    SpecialRequirement: special,
  };

  console.log(data);
  alert("Form Submitted Successfully");
}
