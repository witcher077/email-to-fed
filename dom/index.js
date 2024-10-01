
const Team = [
    {
        name: "Ashok Mahto",
        Position: "Developer 1",
        department: "Technical Department",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        status: "available",
        working_hour: "Work hours: 08:00 - 17:00",
        timeZone: "18:25 - Same time zone as you",
        email: "ashok.mahto@epsilon.com",
        phone_no: "8210782716",
        location: "IN KA Bengaluru Karle Town Center Hub 2"
    },
    {
        name: "Dangeti Pooja",
        Position: "Senior Developer",
        department: "Technical Department",
        image: "",
        status: "busy",
        working_hour: "Work hours: 08:00 - 17:00",
        timeZone: "18:25 - Same time zone as you",
        email: "pooja@epsilon.com",
        phone_no: "8928022716",
        location: "IN KA Bengaluru Karle Town Center Hub 2"
    },
    {
        name: "Imran",
        Position: "Senior Developer",
        department: "Technical Department",
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        status: "away",
        working_hour: "Work hours: 5:30 PM - 2:30 AM",
        timeZone: "3:10 AM - Your time zone is 9 h 30 m ahead",
        email: "imran@epsilon.com",
        phone_no: "19820292092",
        location: "IN KA Bengaluru Karle Town Center Hub 2"
    },
    {
        name: "Ganya",
        Position: "Senior Developer",
        department: "Technical Department",
        image: "",
        status: "offline",
        working_hour: "Work hours: 08:00 - 17:00",
        timeZone: "18:25 - Same time zone as you",
        email: "Ganya@epsilon.com",
        phone_no: "25762929289",
        location: "IN KA Bengaluru Karle Town Center Hub 2"
    },
    {
        name: "Shasheendra",
        Position: "Senior Developer",
        department: "Technical Department",
        image: "",
        status: "offline",
        working_hour: "Work hours: 08:00 - 17:00",
        timeZone: "18:25 - Same time zone as you",
        email: "Shasheendra@epsilon.com",
        phone_no: "25762929289",
        location: "IN KA Bengaluru Karle Town Center Hub 2"
    },
    {
        name: "Shaik pamidi Suhail tanveer",
        Position: "Senior Developer",
        department: "Technical Department",
        image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        status: "away",
        working_hour: "Work hours: 08:00 - 17:00",
        timeZone: "18:25 - Same time zone as you",
        email: "tanveer@epsilon.com",
        phone_no: "25762929289",
        location: "IN KA Bengaluru Karle Town Center Hub 2"
    },
]

const statusColors = {
    available: 'green',
    busy: 'red',
    away: 'yellow',
    offline: "black"
}

const Display = (data) => {
    const container=document.getElementById("container");
    container.innerHTML="";
    data.forEach((ele) => {

        // ******conditinally show profile image
        let profileimg;
        if (ele.image) {
            // if image is present
            profileimg = `<div class="avatar"><img  width="80" height="80" src=${ele.image} /><span class="hideshow">${ele.name}</span></div>`;
        }
        else {
            // *******generate Random colors*******
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            // *********if firstname and last name is present then show first letter of both****
            if (ele.name.includes(" ")) {
                const myArray = ele.name.split(" ");
                const initials = `${myArray[0].charAt(0).toUpperCase()}${myArray[1].charAt(0).toUpperCase()}`;
                profileimg = `<div class="avatar" style="background-color:${color}">${initials}<span class="hideshow">${ele.name}</span></div>`
            }
            //*********if only first name is present show first two letters
            else {
                const initials = `${ele.name.charAt(0).toUpperCase()}${ele.name.charAt(1).toUpperCase()}`;
                profileimg = `<div class="avatar" style="background-color:${color}">${initials}<span class="hideshow">${ele.name}</span></div>`
            }
        }

        container.innerHTML += `<div class="card">
    <div id="profile_image">
        <div>
            ${profileimg}
            <span style="background-color:${statusColors[ele.status]}" class="status_circle"><span class="hideshow_status">${ele.status}</span></span>
        </div>
        <div>
            <h3>${ele.name}</h3>
            <p>${ele.Position}</p>
            <p>${ele.department}</p>
        </div>
    </div>
    <div class="contact_icons">
        <div><i class="fa-regular fa-comment"></i><span class="icon_info">chat</span></div>
        <div><i class="fa-solid fa-sitemap"></i><span class="icon_info">Organigatio</span></div>
        <div><i class="fa-solid fa-video"></i><span class="icon_info">video call</span></div>
        <div><i class="fa-solid fa-phone"></i><span class="icon_info">Audio call</span></div>
        <div><i class="fa-brands fa-linkedin" style="color: #078df3;"></i><span class="icon_info">linkedin</span></div>
    </div>
    <div class="input-container">
        <input class="input_box" placeholder="Send a quick message" />
        <button class="sendMsg" disabled><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send-2" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
        <path d="M6.5 12h14.5" />
      </svg></button>
    </div>
    <div class="status-container">
        <div>
            <div style="background-color:${statusColors[ele.status]};" class="status_circle">
            <span class="hideshow_status">${ele.status}</span>
            </div>
            <div>
                <p>
                    ${ele.status} . Free at 5:30 PM</p>
                <p>
                ${ele.working_hour}
                </p>
            </div>
        </div>
        <div>
            <i class="fa-solid fa-clock"></i>
            <div>
                <p>
                ${ele.timeZone}
                </p>
            </div>
        </div>
    </div>
    <div class="contact">
        <div><h4>Contacts ></h4></div>
        <div>
            <i class="fa-regular fa-envelope"></i>
            <a class="email"><span>${ele.email}</span>   <i class="fa-regular fa-copy copy"></i></a>
        </div>
        <div>
            <i class="fa-solid fa-phone"></i>
            <a><span>${ele.phone_no}</span>   <i class="fa-regular fa-copy copy"></i></a>
        </div>
        <div>
            <i class="fa-solid fa-location-dot"></i>
            <a><span>${ele.location}</span>  <i class="fa-regular fa-copy copy"></i></a>
        </div>
    </div>
    
    </div>`
    })
}
Display(Team);

// copy contacts
const copy = (document.getElementsByClassName("copy"));

for (var i = 0; i < copy.length; i++) {
    copy[i].addEventListener('click', (e) => {
        console.log(e);
        const text = e.explicitOriginalTarget.parentNode.childNodes[0].innerText;
        navigator.clipboard.writeText(text);
        alert(`"${text}"   is coppied on clipbord`)

    });
}

const input_box = document.getElementsByClassName("input_box");

for (var i = 0; i < input_box.length; i++) {
    input_box[i].addEventListener('keyup', (e) => {
        console.log(e);
        if (e.target.value !== "") {
            e.explicitOriginalTarget.parentNode.childNodes[3].style.opacity = 1;
            e.explicitOriginalTarget.parentNode.childNodes[3].removeAttribute("disabled")
        }
        else {
            e.explicitOriginalTarget.parentNode.childNodes[3].style.opacity = .5;
            e.explicitOriginalTarget.parentNode.childNodes[3].setAttribute("disabled", true)
        }
    });
}

var FilteredTeam;

const search_box = document.getElementById("search_box");
search_box.addEventListener('keyup', (e) => {
    FilteredTeam = Team.filter((ele) => ele.name.toLowerCase().includes(e.target.value.toLowerCase()));
    console.log(FilteredTeam);
    Display(FilteredTeam);
})

let checkedBox=[];

    let checkboxes=document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach((ele)=>{
        ele.addEventListener('change',(e)=>{
            if(e.target.checked)
            checkedBox.push(e.target.value);
            else
            checkedBox.pop(e.target.value)
            console.log(checkedBox);
        })
    })