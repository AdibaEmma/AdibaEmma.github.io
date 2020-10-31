$(document).ready(function () {

    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        })
    });
    // Toggle Menu/Navbar Script 
    $('.menu-btn').click(function () {
        $('.navbar .nav-menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});


// Typing animation script 
var typed = new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

    //  File Download
    // let fileDownload = document.querySelector('#downloadCV');     
     
    // // Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
    // fileDownload.addEventListener('click', () => {
    //     let filePath = a.getAttribute('href');
    //     let fileName = getFileName(filePath);
    //     saveAs("c/documents", fileName);
    // });
     
    // function getFileName(str) {
    //     return str.substring(str.lastIndexOf('/') + 1)
    // }

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    opacity: 0,
    reset: true
})

// Scroll Home
sr.reveal('.home-content .text-2', {
    origin: 'top',
    distance: '150%',
    duration: 2000,
})
sr.reveal('.home .social-icons', {
    origin: 'left',
    distance: '150%',
    duration: 2000,
    delay: 300
})

// Scroll About
sr.reveal('.about .title', {})
sr.reveal('.about img', {
    delay: 200
})
sr.reveal('.about-content .column p', {
    distance: '30px',
    delay: 200
})

// Scroll Services
sr.reveal('.services .title', {})
sr.reveal('.services-content .card', {
    interval: 200
})

// Scroll Skills
sr.reveal('.skills .title', {})
sr.reveal('.skills-content .column', {
    interval: 200
})


// Scroll Contact
sr.reveal('.contact .title', {})
// sr.reveal('.contact .column', {
//     delay: 200
// })
sr.reveal('.contact .contact-content .row', {
    interval: 200
})
// sr.reveal('.contact .right .button', {
//     delay: 400
// })