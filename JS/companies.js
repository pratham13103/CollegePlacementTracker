let companiesContainer = document.getElementById("companies-container");
let allCompanies = [];

let callCompaniesFromApi = async () => {
    allCompanies = await getCompanies();
    displayCompanies(allCompanies);
};
callCompaniesFromApi();

let displayCompanies = (companies) => {
    companiesContainer.innerHTML = companies.map((ele, index) => `
        <div class="company-card">
            <div>
                <h3>${ele.name}</h3>
                <h4>Company ID : ${ele.company_id}</h4>
                <h4>Industry : ${ele.industry}</h4>
            </div>
        </div>
    `).join("");
};

let searchInput = document.getElementById("search");
searchInput.addEventListener("input", (e) => {
//   console.log(e.target.value);
  let searchFilter = allCompanies.filter((ele) => {
    return ele.name
      .toLowerCase()
      .includes(e.target.value.toLowerCase());
  });
//   console.log(searchFilter);
  displayCompanies(searchFilter);
});

let newCompany = document.getElementById("add-company");

newCompany.addEventListener("click", () => {
  window.location.href = "../HTML/addCompany.html";
});