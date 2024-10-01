let List = [
    { id: 10, name: "Ashok Mahto", email: "ashok@email.com", designation: "FED", date: "2024-09-10" },
    { id: 11, name: "John", email: "john@email.com", designation: "Manager", date: "2024-09-10" },
    { id: 12, name: "Rahul Kumar", email: "ABC@email.com", designation: "developer", date: "2024-09-10" },
    { id: 13, name: "XYZ xyz", email: "XYZ@email.com", designation: "QA", date: "2024-09-10" }
];
 const inputBox=$('input')

const DisplayList = (data) => {
    const Tbody = document.getElementById("body");
    console.log(data);
    if (data.length !== 0) {
        Tbody.innerHTML = "";
        data.forEach((element, i) => {
            Tbody.innerHTML += `<tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.designation}</td>
            <td>${element.date}</td>
            <td><button id="edit" onClick="Edit(${i})"><i class="fa-solid fa-pen-to-square"></i></button>
            <button id="delete class="delete" onClick="Delete(${i})"><i class="fa-solid fa-trash"></i></button></td>
            </tr>`
        });
    }else{
        Tbody.innerHTML = "";
    }
}
DisplayList(List);

for (const key in inputBox) {
    (inputBox[key]).on('change',(e)=>{
        console.log(e);
    })
}

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById("id").value
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const designation = document.getElementById("designation").value
    const date = document.getElementById("date").value
    formData = {
        "id": id,
        'name': name,
        "email": email,
        "designation": designation,
        "date": date
    }

    const formErrors = FormValidation(formData);
    const isValid = Object.keys(formErrors).length === 0;
    if (isValid) {
        List.push(formData)
        DisplayList(List);
        document.getElementById("id").value = ""
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("designation").value = ""
        document.getElementById("date").value = ""
    }
    else {
        if (formErrors.id)
            document.getElementById('errorMsgId').innerText = formErrors.id;
        if (formErrors.name)
            document.getElementById('errorMsgname').innerText = formErrors.name;
        if (formErrors.email)
            document.getElementById('errorMsgemail').innerText = formErrors.email;
        if (formErrors.designation)
            document.getElementById('errorMsgdesignation').innerText = formErrors.designation;
        if (formErrors.date)
            document.getElementById('errorMsgdate').innerText = formErrors.date;
    }
})

const FormValidation = (formData) => {
    let formErrors = {}
    if (formData.id === "") {
        formErrors.id = "Id is Required";
    }
    // else if (formData.id !== "") {
    //     List.map(ele => {
    //         if (ele.id == formData.id) {
    //             formErrors.id = "Id should be Unique";
    //         }
    //     })
    // }
    if (formData.name === "") {
        formErrors.name = "name is Required";
    }
    if (formData.email === "") {
        formErrors.email = "Email is Required";
    }
    if (formData.designation === "") {
        formErrors.designation = "designation is Required";
    }
    if (formData.date === "") {
        formErrors.date = "date is Required";
    }

    return formErrors;
}

const Delete = (i) => {
    // List = List.filter(ele => ele.id !== i)
    List.splice(i,1)
    DisplayList(List);
}
const Edit = (i) => {
    if (List.length !== 0) {
        document.getElementById("submit").style.display = "none";
        document.getElementById("update").style.display = "block";

        document.getElementById("id").value = List[i].id
        document.getElementById("name").value = List[i].name
        document.getElementById("email").value = List[i].email
        document.getElementById("designation").value = List[i].designation
        document.getElementById("date").value = List[i].date
    }
}


const Update = () => {
    const id = document.getElementById("id").value
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const designation = document.getElementById("designation").value
    const date = document.getElementById("date").value

    formData = {
        "id": id,
        'name': name,
        "email": email,
        "designation": designation,
        "date": date
    }
    const formErrors = FormValidation(formData);
    const isValid = Object.keys(formErrors).length === 0;
    if (isValid) {
       
        const id = parseInt(document.getElementById("id").value)
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const designation = document.getElementById("designation").value
        const date = document.getElementById("date").value
        formData = {
            "id": id,
            'name': name,
            "email": email,
            "designation": designation,
            "date": date
        }
        let index = List.findIndex(ele => ele.id === id);
        console.log(index);
        console.log(formData.id);
        console.log(List[0].id);
        document.getElementById("id").value = ""
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("designation").value = ""
        document.getElementById("date").value = "";
        List[index] = formData;
        DisplayList(List);
    }
    else {
        if (formErrors.name)
            document.getElementById('errorMsgname').innerText = formErrors.name;
        if (formErrors.email)
            document.getElementById('errorMsgemail').innerText = formErrors.email;
        if (formErrors.designation)
            document.getElementById('errorMsgdesignation').innerText = formErrors.designation;
        if (formErrors.date)
            document.getElementById('errorMsgdate').innerText = formErrors.date;
    }
    document.getElementById("submit").style.display = "block";
    document.getElementById("update").style.display = "none";
}
document.getElementById("update").addEventListener('click',Update);
