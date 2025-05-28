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
    .timeline({ delay: 0.3 })
    .set(["#header .points", "#header .me", "#header .user-info *", "#header .point"], {
        opacity: 0,
        y: 30
    })
    .to("#header .points", { y: 0, opacity: 1, duration: 0.5 })
    .to("#header .me", { scale: 1, opacity: 1, duration: 0.5 })
    .to("#header .user-info *", { y: 0, opacity: 1, stagger: 0.2 })
    .to("#header .point", { y: 0, opacity: 1, stagger: 0.2 });

// ABOUT SECTION
gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "center center",
        toggleActions: "play none none reverse",
        scrub: 1
    }
})
    .set("#about .box", { opacity: 0, y: 50 })
    .to("#about .box", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: { amount: 0.8 }
    });

// SERVICES SECTION
gsap.timeline({
    scrollTrigger: {
        trigger: "#services",
        start: "top center",
        end: "center center",
        toggleActions: "play none none reverse",
        scrub: 1
    }
})
    .set([".section-header *", "#services .service"], {
        opacity: 0,
        y: 50
    })
    .to("#services .section-header *", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2
    })
    .to("#services .service", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: { amount: 0.8 }
    });

// PROJECTS SECTION
gsap.timeline({
    scrollTrigger: {
        trigger: "#projects",
        start: "top center",
        end: "center center",
        toggleActions: "play none none reverse",
        scrub: 1
    }
})
    .set([".section-header *", "#projects .project"], {
        opacity: 0,
        y: 50
    })
    .to("#projects .section-header *", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2
    })
    .to("#projects .project", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: { amount: 0.8 }
    });

// TESTIMONIALS SECTION
gsap.timeline({
    scrollTrigger: {
        trigger: "#testimonials",
        start: "top center",
        end: "center center",
        toggleActions: "play none none reverse",
        scrub: 1
    }
})
    .set([".section-header *", "#testimonials .testimonial"], {
        opacity: 0,
        y: 50
    })
    .to("#testimonials .section-header *", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2
    })
    .to("#testimonials .testimonial", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: { amount: 0.8 }
    });

// Initialize Swiper for testimonials
const testimonialsSwiper = new Swiper('.testimonials', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// CONTACT SECTION
gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
        start: "top center",
        end: "center center",
        toggleActions: "play none none reverse",
        scrub: 1
    }
})
    .set(["#contact .box", "#contact .contact-info"], {
        opacity: 0,
        y: 50
    })
    .to("#contact .box", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: { amount: 0.5 }
    })
    .to("#contact .contact-info", {
        opacity: 1,
        y: 0,
        duration: 0.5
    });