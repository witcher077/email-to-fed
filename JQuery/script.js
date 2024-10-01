$(document).ready(function () {
    fetchUsers();
    $("#loginForm").on("submit", (e) => {
        e.preventDefault();
        const credentials = {
            "username": $("#username").val(),
            "password": $("#password").val()
        };
        login(credentials);
    });
});


const fetchUsers = () => {
    $("#productContainer").append("<h1>Loading...</h1>")
    const apurul = 'https://fakestoreapi.com/users';
    $.ajax({
        url: apurul,
        method: 'GET',
        success: function (results) {
            console.log(results);
            $("#welcome").text("Welcome "+localStorage.getItem("username") + " 😄")
            $("#productContainer").html("")
            results.forEach(element => {
                $("#productContainer").append(`
                    <div class="card-container">
                        <div id="hero-img"></div>
                        <div class="d-flex justify-content-center align-items-center" id="profile-img">
                            <h1>${element.name.firstname.charAt(0).toUpperCase() + element.name.lastname.charAt(0).toUpperCase()}</h1>
                        </div>
                        <div id="content">
                            <h1>${element.name.firstname} ${element.name.lastname}</h1>
                            <div class="my-2 contact">
                                <span><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin-filled" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor" />
                                </svg></span>
                                <span class="location_info">${element.address.city} ${element.address.street} ${element.address.zipcode}</span>
                            </div>
                            <div class="my-2 contact">
                                <span><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg></span>
                                <span class="location_info">${element.username}</span>
                            </div>
                            <div class="my-2 contact">
                                <span><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                                </svg></span>
                                <span class="location_info">${element.phone}</span>
                            </div>
                        </div>
                    </div>
                `);
            });
        },
        error: function (error) {
            console.log('Error fetching users:', error);
        }
    });
};

const login = (credentials) => {
    const apurul = 'https://dummyjson.com/auth/login';
    $.ajax({
        url: apurul,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(credentials),
        success: function () {
            localStorage.setItem("username",credentials.username);
            localStorage.setItem("password",credentials.password);
            window.location.href='index.html';

        },
        error: function (error) {
            console.log('Login error:', error);
        }
    });
};

const Logout=()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href='login.html';

}
