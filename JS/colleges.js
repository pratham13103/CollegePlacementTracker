let collegesContainer = document.getElementById("colleges-container");
let allColleges = [];

// initial load
let callCollegesFromApi = async () => {
    allColleges = await getColleges();
    displayColleges(allColleges);
    console.log(allColleges);
};
callCollegesFromApi();

let displayColleges = (colleges) => {
    collegesContainer.innerHTML = colleges.map((ele, index) => `
        <div class="college-card">
            <h3>College Name : ${ele.name}</h3>
            <h4>College ID : ${ele.college_id}</h4>
            <h4>City : ${ele.location?.city || "N/A"}</h4>
            <h5>Students : ${ele.total_students}</h5>
        </div>
    `).join("");
};

let searchInput = document.getElementById("search");
searchInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  let searchFilter = allColleges.filter((ele) => {
    return ele.name
      .toLowerCase()
      .includes(e.target.value.toLowerCase());
  });
  console.log(searchFilter);
  displayColleges(searchFilter);
});


let newCollege = document.getElementById("add-college");

newCollege.addEventListener("click", () => {
  window.location.href = "../HTML/addCollege.html";
});
