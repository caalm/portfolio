// MOBILE MENU

const hamburger = document.getElementById("hamburger");

const navMenu = document.getElementById("navMenu");


hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});



// Close mobile menu after selecting a section

document.querySelectorAll("nav a").forEach(link => {


    link.addEventListener("click", () => {


        navMenu.classList.remove("show");


    });


});


// FADE-IN SECTIONS


const fadeSections = document.querySelectorAll(".fade-section");



const fadeObserver = new IntersectionObserver(

    entries => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.classList.add("visible");


            }


        });


    },


    {

        threshold: 0.15

    }


);

fadeSections.forEach(section => {


    fadeObserver.observe(section);


});


// ACTIVE NAVIGATION

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll("nav a");


function updateActiveNavigation() {


    let currentSection = "";

    let closestDistance = Infinity;



    sections.forEach(section => {


        const sectionPosition = section.getBoundingClientRect().top;


        const distance = Math.abs(sectionPosition - 150);



        if (distance < closestDistance) {


            closestDistance = distance;

            currentSection = section.id;


        }


    });

    navLinks.forEach(link => {


        link.classList.remove("active");



        if (link.getAttribute("href") === "#" + currentSection) {


            link.classList.add("active");


        }


    });


}

window.addEventListener(

    "scroll",

    updateActiveNavigation

);

window.addEventListener(

    "resize",

    updateActiveNavigation

);

// PAGE LOAD

window.addEventListener("load", () => {


    const homeSection = document.querySelector("#home");


    if (homeSection) {


        homeSection.classList.add("visible");


    }



    updateActiveNavigation();


});