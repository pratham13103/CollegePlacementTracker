let baseUrl = "https://placementstracker-4.onrender.com/api";

let getStudents = async () => {
    return fetch(`${baseUrl}/students`)
        .then(res => res.json());
};

let getColleges = async () => {
    return fetch(`${baseUrl}/colleges`)
        .then(res => res.json());
};

let getCompanies = async () => {
    return fetch(`${baseUrl}/companies`)
        .then(res => res.json());
};
let getRoles = async () => {
    return fetch(`${baseUrl}/job-roles`)
        .then(res => res.json());
};