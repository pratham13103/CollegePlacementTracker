// console.log("editPage");
//URLSearchParams stores the string in object format
let urlId = new URLSearchParams(window.location.search);
let id = urlId.get("id");
// console.log(urlId.get("id"));

let loadStudent = async () => {
  let data = await fetch(
    `https://placementstracker-4.onrender.com/api/students/${id}`
  );
  let student = await data.json();
  console.log(student.personal_info.full_name);
  studentName.value = student.personal_info.full_name;
  studentGender.value = student.personal_info.gender;
  dob.value = student.personal_info.date_of_birth;
  // profileimg.value = student.personal_info.profile_image;
  collegeId.value = student.academic_info.college_id;
  department.value = student.academic_info.department;
  degree.value = student.academic_info.degree;
  graduation.value = student.academic_info.graduation_year;
  cgpa.value = student.academic_info.cgpa;
  backlogs.value = student.academic_info.backlogs;
  programming.value = student.skills.programming;
  database.value = student.skills.databases;
  tools.value = student.skills.tools;
  placementStatus.value = student.placement_status;
};

loadStudent();

let studentForm = document.getElementById("studentForm");
console.log(studentForm);

//Use e.preventDefault to prevent form default event that does refresh
//use async for fetching
studentForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  // console.log(studentName.value);

  let student = {
    personal_info: {
      full_name: studentName.value,
      gender: studentGender.value,
      date_of_birth: dob.value,
      profile_image: profileimg.value,
    },
    academic_info: {
      college_id: collegeId.value,
      department: department.value,
      degree: degree.value,
      graduation_year: graduation.value,
      cgpa: cgpa.value,
      backlogs: backlogs.value,
    },

    skills: {
      programming: programming.value.split(","),
      databases: database.value.split(","),
      tools: tools.value.split(","),
    },

    placement_status: placementStatus.value,
  };

  //content-type -which format you are sending here is json
  await fetch(`${baseUrl}/students/{$id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(student),
  });
  alert("Student updated successfully");
  window.location.href = "../HTML/students.html";
});
