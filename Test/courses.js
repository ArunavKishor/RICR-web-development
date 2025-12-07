const courses = [
  { title: "Full Stack Web Development", level: "Beginner to Advanced", price: "rs.20,000", link: "registration.html" },
  { title: "Java Programming", level: "Beginner", price: "Rs.10,000", link: "registration.html" },
  { title: "Python Programming", level: "Beginner to Intermediate", price: "Rs.20,000", link: "registration.html" },
  
];

const container = document.getElementById("course-container");

courses.forEach(course => {
  container.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="card course-card shadow-sm h-100">
        <div class="card-body">
          <h4 class="card-title fw-bold">${course.title}</h4>
          <p><strong>Level:</strong> ${course.level}</p>
          <p><strong>Price:</strong> ${course.price}</p>
          <a href="${course.link}" class="btn btn-primary w-100 mt-2">Enroll</a>
        </div>
      </div>
    </div>
  `;
});
