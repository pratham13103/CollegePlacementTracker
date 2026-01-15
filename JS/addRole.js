let baseUrl = "https://placementstracker-4.onrender.com/api";

let roleForm = document.getElementById("roleForm")
console.log(roleForm);

roleForm.addEventListener("submit" , async(e)=>{
    e.preventDefault();
    let role ={
        role_id : roleId.value,
        title : title.value,
    }
    console.log(role);
    
    //content-type -which format you are sending here is json
    await fetch(`${baseUrl}/job-roles`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body : JSON.stringify(role)
    });
    alert("Job role added successfully");
})
