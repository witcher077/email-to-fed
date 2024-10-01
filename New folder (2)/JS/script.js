
let course_list = document.getElementById("course_list");

document.getElementById('ham-Burger').addEventListener('click',function(e){
    console.log(e);
    this.classList.toggle('open')
    // $(navContainer).toggleClass('nav-Container-sm');
    // $(soc_media).toggleClass('soc-media-sm');
})

function theme_changer(e) {
    if (e.getAttribute('theme_name') == 'dark') {
        document.getElementById('icon-moon').style.display = 'none'
        document.getElementById('icon-sun').style.display = 'inline-block'
    }
    else {
        document.getElementById('icon-sun').style.display = 'none'
        document.getElementById('icon-moon').style.display = 'inline-block'
    }
}
function menu_toggle(e) {
    if (e.getAttribute('menu-status') == 'close') {
        document.getElementsByClassName('left-links')[0].classList.add('show')

        document.getElementsByClassName('left-links')[0].style.top = document.getElementById('header-first-container').offsetHeight+'px';
        e.setAttribute("menu-status", "open");

    }
    else {
        document.getElementsByClassName('left-links')[0].classList.remove('show')
        e.setAttribute("menu-status", "close");
    }
}

const Courses = [
    { sub: "SQL", link: '#' },
    { sub: "HTML", link: '#' },
    { sub: "CSS", link: '#' },
    { sub: "Javascript", link: '#' },
    { sub: "Python", link: '#' },
    { sub: "Java", link: '#' },
    { sub: "C", link: '#' },
    { sub: "C++", link: '#' },
    { sub: 'Scala', link: '#' },
    { sub: 'C#', link: '#' },
    { sub: 'Node.js', link: '#' },
    { sub: 'Mysql', link: '#' },
    { sub: 'MongoDB', link: '#' },
    { sub: 'PL/SQL', link: '#' },
    { sub: 'Swift', link: '#' },
    { sub: 'Bootstrap', link: '#' },
    { sub: 'R', link: '#' },
    { sub: 'Machine Learnig', link: '#' },
    { sub: 'Blockchain', link: '#' },
    { sub: 'Angular', link: '#' },
    { sub: 'React Native', link: '#' },
    { sub: 'React', link: '#' },
    { sub: 'Computer Fundamentals', link: '#' },
    { sub: 'Compuler Designe', link: '#' },
    { sub: 'Operating system', link: '#' },
    { sub: 'DSA', link: '#' },
    { sub: 'DBMS', link: '#' },
    { sub: 'Exel', link: '#' },
    { sub: 'Computer Network', link: '#' }]

Courses.map((ele, i) => {
    const node = document.createElement("li");
    const node2 = document.createElement("a");
    node2.href = ele.link;
    const textnode = document.createTextNode(ele.sub);
    node2.appendChild(textnode);
    node.appendChild(node2)
    course_list.appendChild(node);

})

//slide left right
let left_btn_nav = document.getElementById("left-btn-nav");
let right_btn_nav = document.getElementById("right-btn-nav");

right_btn_nav.addEventListener('click', (e) => {
    var nav_container = document.getElementById('course_list')
    horozontal_Scroll(nav_container, 'right', 25, 100, 10);

})
left_btn_nav.addEventListener('click', (e) => {
    var nav_container = document.getElementById('course_list')
    horozontal_Scroll(nav_container, 'left', 25, 100, 10);
})

function horozontal_Scroll(element, direction, speed, dist, steps) {
    var scrollAmount = 0;
    var slideTimer = setInterval(() => {
        if (direction == 'left')
            element.scrollLeft -= steps;
        else
            element.scrollLeft += steps;

        scrollAmount += steps;

        if (scrollAmount >= dist) {
            window.clearInterval(slideTimer);

        }
    }, speed)
}
