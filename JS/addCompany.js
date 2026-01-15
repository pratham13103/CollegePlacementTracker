let baseUrl = "https://placementstracker-4.onrender.com/api";

let companyForm = document.getElementById("companyForm")
console.log(companyForm);

companyForm.addEventListener("submit" , async(e)=>{
    e.preventDefault();
    let company ={
        company_id : companyId.value,
        name : companyName.value,
        industry : industryName.value,
    }
    console.log(company);
    
    //content-type -which format you are sending here is json
    await fetch(`${baseUrl}/companies`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body : JSON.stringify(company)
    });
    alert("Company added successfully");
})
