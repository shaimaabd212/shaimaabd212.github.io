// ===== Dark mode button =====
// The page's <head> already picked a theme before loading,
// so here we only handle clicks on the moon/sun button.
const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");

function updateThemeButton() {
    const isDark = root.dataset.theme === "dark";
    themeButton.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

if (themeButton) {
    updateThemeButton();
    themeButton.addEventListener("click", () => {
        root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
        try {
            localStorage.setItem("theme", root.dataset.theme); // remember the choice
        } catch (error) {}
        updateThemeButton();
    });
}

// ===== Mobile menu button =====
const header = document.querySelector("body > header");
const navToggle = document.querySelector(".nav-toggle");

if (header && navToggle) {
    navToggle.addEventListener("click", () => {
        const isOpen = header.classList.toggle("nav-open");
        navToggle.setAttribute("aria-expanded", isOpen);
        navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
}

// ===== Project filters (Projects page) =====
const filterButtons = document.querySelectorAll(".filter-button");
const projects = document.querySelectorAll(".project");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        filterButtons.forEach((other) => other.setAttribute("aria-pressed", other === button));
        projects.forEach((project) => {
            project.hidden = filter !== "all" && project.dataset.category !== filter;
        });
    });
});

// ===== Lightbox: click an image to see it large =====
const lightbox = document.querySelector(".lightbox");

if (lightbox) {
    const bigImage = lightbox.querySelector("img");
    const caption = lightbox.querySelector("p");

    function openLightbox(image) {
        bigImage.src = image.currentSrc || image.src;
        bigImage.alt = image.alt;
        caption.textContent = image.alt;
        lightbox.showModal();
    }

    document.querySelectorAll("[data-lightbox] img").forEach((image) => {
        image.tabIndex = 0; // reachable with the Tab key
        image.setAttribute("role", "button");
        image.addEventListener("click", () => openLightbox(image));
        image.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLightbox(image);
            }
        });
    });

    // Clicking anywhere closes it; the Escape key also works automatically.
    lightbox.addEventListener("click", () => lightbox.close());
}