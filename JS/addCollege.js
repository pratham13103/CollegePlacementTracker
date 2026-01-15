let baseUrl = "https://placementstracker-4.onrender.com/api";

let collegeForm = document.getElementById("collegeForm")
console.log(collegeForm);

collegeForm.addEventListener("submit" , async(e)=>{
    e.preventDefault();
    let college ={
        college_id : collegeId.value,
        name : collegeName.value,
        type : type.value,
        affiliated_to :UniversityName.value,
        established_year : establishedYear.value,
        location :{
            city : city.value,
            state : state.value,
            country : country.value,
            pincode : pincode.value
        },
        departments : departments.value.split(","),
        total_students : totalStudents.value
    }
    console.log(college);
    
    //content-type -which format you are sending here is json
    await fetch(`${baseUrl}/colleges`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body : JSON.stringify(college)
    });
    alert("College added successfully");
})
