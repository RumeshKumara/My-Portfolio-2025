//include 
lucide.createIcons();
//Include the highlight js
hljs.highlightAll();

gsap.registerPlugin(ScrollTrigger);

//Custom svg icon implementation
const dataCustomIcon = document.querySelectorAll('[data-custom-icon]'); // Fix: Added square brackets
dataCustomIcon.forEach((icon) => {
    if (icon.getAttribute('data-custom-icon')) {
        const request = new XMLHttpRequest();
        request.open("GET", "./assets/icons/" + icon.getAttribute('data-custom-icon') + ".svg");
        request.setRequestHeader("Content-Type", "image/svg+xml");
        request.addEventListener("load", (event) => {
            if (event.target.status === 200) {
                const response = event.target.responseText;
                icon.innerHTML = response;
            } else {
                console.error('Failed to load SVG icon:', icon.getAttribute('data-custom-icon'));
            }
        });
        request.send();
    }
});
//NAVBAR START
const navbar = document.getElementById("navbar");
const routes = document.querySelectorAll("#navbar .nav-routes .route");
const section = document.querySelectorAll("section");

window.onscroll = () => {
    if (window.scrollY > 100) { // Example condition: Check if the scroll position is greater than 50
        navbar.classList.add("drop");
    } else {
        navbar.classList.remove("drop");
    }

    section.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100; // Adjust offset as needed
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            routes.forEach((route) => {
                route.classList.remove('active');
                document.querySelector("#navbar .nav-routes a[href*=" + id + "]")
                    .classList.add("active");

            });
        }
    });
};
// Theme switching
const themeCheckbox = document.getElementById('theme-checkbox'); // Ensure you have a button or element with this ID
const storageKey = "theme";
if (JSON.parse(localStorage.getItem(storageKey))) {
    document.firstElementChild.setAttribute("data-theme", "dark");
    localStorage.setItem(storageKey, JSON.stringify(true));
    themeCheckbox.checked = true;
} else {
    document.firstElementChild.setAttribute("data-theme", "light");
    localStorage.setItem(storageKey, JSON.stringify(false));
    themeCheckbox.checked = false;
}
themeCheckbox.onchange = () => {
    if (themeCheckbox.checked) {
        document.firstElementChild.setAttribute("data-theme", "dark");
        localStorage.setItem(storageKey, JSON.stringify(true));
        return;
    } else {
        document.firstElementChild.setAttribute("data-theme", "light");
        localStorage.setItem(storageKey, JSON.stringify(false));
    }
};




// SIDEBAR START
const menuBtn = document.getElementById('menu-btn'); // Fix: Changed 'menu-Btn' to 'menu-btn'
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.getElementById('close-sidebar-btn'); // Fix: Changed to getElementById
menuBtn.onclick = () => {
    sidebar.classList.toggle("visible");
};
closeBtn.onclick = () => {
    sidebar.classList.remove("visible");
};

/* HEADER START */
const odometer = document.querySelectorAll('.odometer');
setTimeout(() => {
    odometer.forEach(list => {
        let id = list.getAttribute('id');
        if (id === "experience") {
            list.innerHTML = 2;
        }
        if (id === "project") {
            list.innerHTML = 15;
        }
        if (id === "client") {
            list.innerHTML = 126;
        }
        if (id === "awards") {
            list.innerHTML = 12;
        }
    });
}, 6000); // Fix: Added a delay to allow the DOM to load before setting odometer values

// gsap code
gsap
    .timeline({ delay: 0.5 })
    .from("#header .points", { y: -30, opacity: 0 })
    .from("#header .me", { scale: 0.7, opacity: 0, })
    .from(["#header .user-info .sub-title", "#header .user-info .description"], { y: 20, opacity: 0 })
    .from("#header .user-info .title", { x: -30, opacity: 0 })
    .from("#header .user-info .buttons", { x: -30, opacity: 0 })
    .from("#header .point", { x: -30, opacity: 0, stagger: 0.5 })
// HEADER END

//ABOUT START
gsap.timeline({
    delay: 0.5,
    scrollTrigger: {
        trigger: "#about",
        start: "20% bottom",
        end: "bottom top",
    }
})
    .from("#about .box", { y: 30, opacity: 0, stagger: 0.5 })

//ABOUT END

//SERVICES START
gsap.timeline({
    delay: 0.5,
    scrollTrigger: {
        trigger: "#services",
        start: "20% bottom",
        end: "bottom top",
    }
})
    .from(["#services .section-header .sub-title", "#services .section-header .description"], { y: 30, opacity: 0, stagger: 0.5 })
    .from("#services .service", { y: 30, opacity: 0, stagger: 0.5 });


// SERVICES END

// PROJECT START
gsap.timeline({
    delay: 0.5,
    scrollTrigger: {
        trigger: "#projects",
        start: "20% bottom",
        end: "bottom top",
    }
})
    .from([
        "#projects .section-header .sub-title",
        "#services .section-header .description"
    ],
        { y: 30, opacity: 0, stagger: 0.5 })
    .from("#projects .project", { y: 30, opacity: 0, stagger: 0.5 });


//  PROJECT END



/* TESTIMONIALS STAR */
new Swiper(".testimonials", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centerSlides: true,
    speed: 5000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoint: {
        600: { slidesPerView: "auto" },
    },

});

gsap.timeline({
    delay: 0.5,
    scrollTrigger: {
        trigger: "#testimonials",
        start: "20% bottom",
        end: "bottom top",
    }
})
    .from([
        "#testimonials .section-header .sub-title",
        "#testimonials .section-header .description"
    ],
        { y: 30, opacity: 0, stagger: 0.5 })
    .from("#testimonials .testimonial", { y: 30, opacity: 0, stagger: 0.5 });
/* TESTIMONIALS END */

// contact START
gsap.timeline({
    delay: 0.5,
    scrollTrigger: {
        trigger: "#contact",
        start: "20% bottom",
        end: "bottom top",
    }
})

    .from("#contact .box", { y: 30, opacity: 0, stagger: 0.5 })
    .from("#contact .contact-info", { x: 30, opacity: 0 });


//  contact END