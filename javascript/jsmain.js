// ------------------------- Interviews Tab -------------------------

// Show the interviews tab
function interviewShow() {
    document.querySelector(".interviews-container").classList.add("show");
}

document.getElementById("coderCard").onclick = interviewShow;

//Hide the interviews tab (when have time)

// ------------------------- RL Interviews Tab -------------------------

// Show the interviews tab
function interviewShow() {
    document.querySelector(".interviews-container").classList.add("show");
}

document.getElementById("rlCoder").onclick = interviewShow;


// -------------------------Side Menu-------------------------


var navbar = document.querySelector(".menu");
var ham = document.querySelector(".ham");

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger() {
    navbar.classList.toggle("showNav");
    ham.classList.toggle("showClose");
}



ham.addEventListener("click", toggleHamburger);

// toggle when clicking on links

var menuLinks = document.querySelectorAll(".menuLink");

menuLinks.forEach(
    function (menuLink) {
        menuLink.addEventListener("click", toggleHamburger);
    }
);