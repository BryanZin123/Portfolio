// Optimized JavaScript File

// Mobile Hamburger Menu Toggle
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const navLink = document.querySelectorAll(".nav-link");
const nav = document.querySelector("nav");
const scrollUp = document.querySelector("#scroll-up");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const darkModeIcon = document.querySelector("#dark-mode-icon");

if (burger && ul) {
    burger.addEventListener("click", () => {
        ul.classList.toggle("show");
    });
}

// Close menu when a link is clicked
if (navLink.length) {
    navLink.forEach((link) =>
        link.addEventListener("click", () => {
            ul.classList.remove("show");
        })
    );
}

// Scroll to Top Functionality
if (scrollUp) {
    scrollUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}

// Hide navbar on scroll down, show on scroll up
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
    let currentScrollPos = window.scrollY;
    if (currentScrollPos > lastScrollTop) {
        nav.classList.add("hidden-nav");
    } else {
        nav.classList.remove("hidden-nav");
    }
    lastScrollTop = currentScrollPos;
});

// Dark Mode Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.querySelector("#dark-mode-toggle");
  const darkModeIcon = document.querySelector("#dark-mode-icon");

  // Set dark mode as default unless stored preference exists
  let isDarkMode = localStorage.getItem("dark-mode");
  if (isDarkMode === null || isDarkMode === "true") {
    document.body.classList.remove("light-mode");
    darkModeIcon.textContent = "🌞";
    localStorage.setItem("dark-mode", "true");
  } else {
    document.body.classList.add("light-mode");
    darkModeIcon.textContent = "🌙";
  }

  // Toggle dark mode
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isNowLightMode = document.body.classList.contains("light-mode");
    localStorage.setItem("dark-mode", isNowLightMode ? "false" : "true");
    darkModeIcon.textContent = isNowLightMode ? "🌙" : "🌞";
  });
});

// Contact Form Submission (Clears Fields After Sending)
function clearForm(event) {
    event.preventDefault();
    fetch(event.target.action, {
        method: event.target.method,
        body: new FormData(event.target),
        headers: { Accept: "application/json" },
    })
        .then((response) => {
            if (response.ok) {
                alert("Message sent successfully!");
                event.target.reset(); // Clears form
            } else {
                alert("Oops! Something went wrong.");
            }
        })
        .catch((error) => {
            alert("Error: " + error);
        });
}
