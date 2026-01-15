let rolesContainer = document.getElementById("roles-container");
let allRoles = [];

let callRolesFromApi = async () => {
    allRoles = await getRoles();
    displayRoles(allRoles);
};
callRolesFromApi();

let displayRoles = (roles) => {
    rolesContainer.innerHTML = roles.map((ele, index) => `
        <div class="role-card">
            <div>
                <h3>${ele.title}</h3>
                <h4>Role ID : ${ele.role_id}</h4>
            </div>
        </div>
    `).join("");
};

let searchInput = document.getElementById("search");
searchInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  let searchFilter = allRoles.filter((ele) => {
    return ele.title
      .toLowerCase()
      .includes(e.target.value.toLowerCase());
  });
  console.log(searchFilter);
  displayRoles(searchFilter);
});

let newRole = document.getElementById("add-role");

newRole.addEventListener("click", () => {
  window.location.href = "../HTML/addRole.html";
});