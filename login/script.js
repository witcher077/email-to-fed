const signin_form = document.getElementById('signin-form');
const submitter = document.getElementsByClassName('submit-btn')[0];

const SubmitForm = (e) => {
    e.preventDefault();
    let formData = {}
    // const formData = new FormData(signin_form, submitter);
    // for(const [key, value] of formData){
    //     console.log(key, value);
    // }
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    formData = {
        'userName': userName,
        "password": password
    }
    // console.log();
    const formErrors = FormValidation(formData);
    const isValid = Object.keys(formErrors).length === 0;
    console.log(isValid);
    if (isValid) {
        console.log("haha");
        login(formData)
    } else {
        if (formErrors.password)
            document.getElementById('errorMsgpassword').innerText = formErrors.password;
        if (formErrors.userName)
            document.getElementById('errorMsguserName').innerText = formErrors.userName;
    }
}

signin_form.addEventListener("submit",SubmitForm)

const FormValidation = (formData) => {
    let formErrors = {}
    if (formData.userName === "") {
        formErrors.userName = "Usename is Required";
    }
    else {
        if (formData.userName.length < 5)
            formErrors.userName = "Enter a valid Usename ";
    }
    if (formData.password === "") {
        formErrors.password = "Enter your password";
    }
    else {
        var regX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (!regX.test((formData.password))) {
            formErrors.password = "please Enter a vailid Password"
        }
    }
    return formErrors;
}


const login = (formData) => {
    // fetch('https://fakestoreapi.com/auth/login',{
    //     method:'POST',
    //     body:JSON.stringify({
    //         "username": "mor_2314",
    //         "password": "83r5^_"
    //     })
    // })
    //     .then(res=>res.json())
        // .then(json=>console.log(json))
    //     .catch(error => console.log(error))
       localStorage.setItem('userName',formData.userName)

        if(localStorage.getItem("userName"))
          window.location.href = 'home.html';
    }
    
