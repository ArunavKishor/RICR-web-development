// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("cname").value;
      const email = document.getElementById("cemail").value;
      const message = document.getElementById("cmessage").value;

      if (!email.includes("@")) {
        alert("Email must contain @");
        return;
      }
      if (message.length < 10) {
        alert("Message must be at least 10 characters");
        return;
      }

      alert("Thank you for contacting us, " + name + "!");
    });
  }

  // Registration Form Validation
  const regForm = document.getElementById("regForm");
  if (regForm) {
    regForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      alert("Thank you for Enrolling, " + name + "!");
    });
  }
});
