let studentsContainer = document.getElementById("students-container");
let allStudents;

//for first time showing all students
let callStudentFromApi = async () => {
  allStudents = await getStudents();
  displayStudents(allStudents);
  console.log(allStudents);
};
callStudentFromApi();

let displayStudents = async (students) => {
  studentsContainer.innerHTML = students
    .map(
      (ele, index) => `
        <div id = "student-card">
            <img src = "${ele.personal_info?.profile_image}">
            <h4>Name : ${ele.personal_info?.full_name}</h4>
            <h4>CollegeId : ${ele.academic_info?.college_id}</h4>
            <h5>Placement Status : ${ele.placement_status}</h5>
            <div class="card-actions">
                <button id="edit" class="edit-btn" onclick="editStudent('${ele.student_id}')">Edit</button>
                <button id="delete" class="delete-btn" onclick="deleteStudent('${ele.student_id}')">Delete</button>
                </div>
            </div>
        `
    )
    .join("");
};

let editStudent = (id) => {
  console.log("editStudent",id);
  window.location.href=`../HTML/editStudent.html?id=${id}`
}

// function editStudent(index) {
//   console.log("Edit student:", allStudents[index]);
// }

let deleteStudent = async(id)=>{
  let comfirmDelete = confirm("Are you sure");
  if(!comfirmDelete) return;

  await fetch(`https://placementstracker-4.onrender.com/api/students/${id}`,{
    method : "DELETE",
  });
  callStudentFromApi();
};
// function deleteStudent(id) {
//     allStudents.splice(index, 1);
//     displayStudents(allStudents);
// }

let placedStudents = document.getElementById("placed");
placedStudents.addEventListener("click", () => {
  let filterPlaced = allStudents.filter((ele) => {
    return ele.placement_status === "Placed";
  });
  console.log(filterPlaced);
  displayStudents(filterPlaced);
});

let notplacedStudents = document.getElementById("not-placed");
notplacedStudents.addEventListener("click", () => {
  let filterNotPlaced = allStudents.filter((ele) => {
    return ele.placement_status === "Not Placed";
  });
  console.log(filterNotPlaced);
  displayStudents(filterNotPlaced);
});

let searchInput = document.getElementById("search");
searchInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  let searchFilter = allStudents.filter((ele) => {
    return ele.personal_info.full_name
      .toLowerCase()
      .includes(e.target.value.toLowerCase());
  });
  console.log(searchFilter);
  displayStudents(searchFilter);
});

let newStudent = document.getElementById("add-student");

newStudent.addEventListener("click", () => {
  window.location.href = "../HTML/addStudent.html";
});


