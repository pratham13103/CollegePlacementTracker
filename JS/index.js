let animateCount = (element, finalValue, duration = 800) => {
  let start = 0;
  let increment = Math.ceil(finalValue / (duration / 16));

  let counter = setInterval(() => {
    start += increment;

    if (start >= finalValue) {
      start = finalValue;
      clearInterval(counter);
    }

    element.setAttribute("data-count", start);
  }, 16);
};

document.getElementById("students").addEventListener("click", () => {
    window.location.href = "./students.html";
});

document.getElementById("colleges").addEventListener("click", () => {
    window.location.href = "./colleges.html";
});

document.getElementById("companies").addEventListener("click", () => {
    window.location.href = "./companies.html";
});

document.getElementById("job roles").addEventListener("click", () => {
    window.location.href = "./roles.html";
});

let index = async () => {
  let students = await getStudents();
  let colleges = await getColleges();
  let companies = await getCompanies();
  let roles = await getRoles();

  let studentsbox = document.getElementById("students");
  let collegesbox = document.getElementById("colleges");
  let companiesbox = document.getElementById("companies");
  let rolesbox = document.getElementById("job roles");

  studentsbox.innerHTML = `<p>Students</p>`;
  collegesbox.innerHTML = `<p>Colleges</p>`;
  companiesbox.innerHTML = `<p>Companies</p>`;
  rolesbox.innerHTML = `<p>Job Roles</p>`;

  // start from 0
  studentsbox.setAttribute("data-count", 0);
  collegesbox.setAttribute("data-count", 0);
  companiesbox.setAttribute("data-count", 0);
  rolesbox.setAttribute("data-count", 0);

  // animate to final values
  animateCount(studentsbox, students.length);
  animateCount(collegesbox, colleges.length);
  animateCount(companiesbox, companies.length);
  animateCount(rolesbox, roles.length);
};

// let searchInput = document.getElementById("search")
//   searchInput.addEventListener("input",(e)=>{
//   console.log(e.target.value);
//   let searchFilter = all
  
// })

index();
