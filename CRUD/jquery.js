let List = [
    { id: 10, name: "Ashok Mahto", email: "ashok@email.com", designation: "FED", date: "2024-09-10" },
    { id: 11, name: "John", email: "john@email.com", designation: "Manager", date: "2024-09-10" },
    { id: 12, name: "Rahul Kumar", email: "ABC@email.com", designation: "developer", date: "2024-09-10" },
    { id: 13, name: "XYZ xyz", email: "XYZ@email.com", designation: "QA", date: "2024-09-10" }
];

const DisplayList = (data) => {
    let $tbody = $("#body");
    console.log(data);
    if (data.length !== 0) {
        $tbody.html("");  // Clear the table body
        $.each(data, (i, element) => {
            $tbody.append(`<tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td>${element.designation}</td>
                <td>${element.date}</td>
                <td>
                    <button id="edit" onClick="Edit(${i})"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button id="delete" class="delete" onClick="Delete(${i})"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>`);
        });
    } else {
        $tbody.html("");
    }
};
console.log(inputBox= $('input'));

DisplayList(List);

const form = $('#form');
form.on('submit', (e) => {
    e.preventDefault();

    const id = $("#id").val();
    const name = $("#name").val();
    const email = $("#email").val();
    const designation = $("#designation").val();
    const date = $("#date").val();

    const formData = {
        id: id,
        name: name,
        email: email,
        designation: designation,
        date: date
    };

    const formErrors = FormValidation(formData);
    const isValid = Object.keys(formErrors).length === 0;
    if (isValid) {
        List.push(formData);
        DisplayList(List);

        $("#id").val("");
        $("#name").val("");
        $("#email").val("");
        $("#designation").val("");
        $("#date").val("");
    } else {
        if (formErrors.id) $('#errorMsgId').text(formErrors.id);
        if (formErrors.name) $('#errorMsgname').text(formErrors.name);
        if (formErrors.email) $('#errorMsgemail').text(formErrors.email);
        if (formErrors.designation) $('#errorMsgdesignation').text(formErrors.designation);
        if (formErrors.date) $('#errorMsgdate').text(formErrors.date);
    }
});

const FormValidation = (formData) => {
    let formErrors = {};

    if (formData.id === "") {
        formErrors.id = "Id is Required";
    }
    if (formData.name === "") {
        formErrors.name = "Name is Required";
    }
    if (formData.email === "") {
        formErrors.email = "Email is Required";
    }
    if (formData.designation === "") {
        formErrors.designation = "Designation is Required";
    }
    if (formData.date === "") {
        formErrors.date = "Date is Required";
    }

    return formErrors;
};

const Delete = (i) => {
    List.splice(i, 1);
    DisplayList(List);
};

const Edit = (i) => {
    if (List.length !== 0) {
        $("#submit").hide();
        $("#update").show();

        $("#id").val(List[i].id);
        $("#name").val(List[i].name);
        $("#email").val(List[i].email);
        $("#designation").val(List[i].designation);
        $("#date").val(List[i].date);
    }
};

const Update = () => {
    const id = $("#id").val();
    const name = $("#name").val();
    const email = $("#email").val();
    const designation = $("#designation").val();
    const date = $("#date").val();

    const formData = {
        id: id,
        name: name,
        email: email,
        designation: designation,
        date: date
    };

    const formErrors = FormValidation(formData);
    const isValid = Object.keys(formErrors).length === 0;
    if (isValid) {
        let index = List.findIndex(ele => ele.id === parseInt(id));

        List[index] = formData;

        $("#id").val("");
        $("#name").val("");
        $("#email").val("");
        $("#designation").val("");
        $("#date").val("");

        DisplayList(List);
    } else {
        if (formErrors.name) $('#errorMsgname').text(formErrors.name);
        if (formErrors.email) $('#errorMsgemail').text(formErrors.email);
        if (formErrors.designation) $('#errorMsgdesignation').text(formErrors.designation);
        if (formErrors.date) $('#errorMsgdate').text(formErrors.date);
    }

    $("#submit").show();
    $("#update").hide();
};

$("#update").on('click', Update);
