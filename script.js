
/* ==========================================
   RUE ADDIS - FULL INTERACTIONS
==========================================*/

/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
    }, 1200);
});

/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

/* Hover effect */
document.querySelectorAll("a, button, .menu-item").forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
    });

    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
    });
});

/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* =========================
   MENU IMAGE SWITCHER
========================= */

const menuItems = document.querySelectorAll(".menu-item");
const menuPhoto = document.getElementById("menuPhoto");

menuItems.forEach(item => {
    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        const newImage = item.getAttribute("data-image");

        menuPhoto.style.opacity = "0";

        setTimeout(() => {
            menuPhoto.src = newImage;
            menuPhoto.style.opacity = "1";
        }, 250);
    });
});

/* =========================
   MOBILE MENU TOGGLE
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* =========================
   SMOOTH SCROLL FIX
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

/* =========================
   RESERVATION FORM
========================= */

const form = document.querySelector(".reservation-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Reservation request sent successfully! We will contact you soon.");

    form.reset();
});