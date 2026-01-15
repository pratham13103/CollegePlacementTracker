let baseUrl = "https://placementstracker-4.onrender.com/api";

let studentForm = document.getElementById("studentForm")
console.log(studentForm);

//Use e.preventDefault to prevent form default event that does refresh
//use async for fetching
studentForm.addEventListener("submit" , async(e)=>{
    e.preventDefault();
    // console.log(studentName.value);

    let student ={
        personal_info:{
            full_name:studentName.value,
            gender:studentGender.value,
            date_of_birth: dob.value,
            profile_image : profileimg.value 
        },
        academic_info: {
            college_id: collegeId.value,
            department: department.value,
            degree: degree.value,
            graduation_year: graduation.value,
            cgpa: cgpa.value,
            backlogs: backlogs.value
        },

        skills: {
            programming: programming.value.split(","),
            databases: database.value.split(","),
            tools: tools.value.split(",")
        },

        placement_status: placementStatus.value
    }
    console.log(student);
    
    //content-type -which format you are sending here is json
    await fetch(`${baseUrl}/students`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body : JSON.stringify(student)
    });
    alert("Student added successfully");
})