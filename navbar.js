document.addEventListener("DOMContentLoaded", () => {
    const Menu = document.getElementById("menu");
    const navLinks = document.getElementById("nav-links");

    const ROUTES = [
        { pageName: "Home", path: "index.html" },
        {pageName: "Register", path: "register.html"},
        { pageName: "Login", path: "login.html" },
        { pageName: "Dashboard", path: "dashboard.html" },
        { pageName: "Calendar", path: "calendar.html" },
        { pageName: "Profile", path: "profile.html" }
    ];

    let routesHTML = "";
    ROUTES.forEach(route => {
        routesHTML += `<li><a href="${route.path}">${route.pageName}</a></li>`;
    });
    routesHTML += `<li><button id="darkmode-toggle" class="darkmode">🌙</button></li>`;
    navLinks.innerHTML = routesHTML;

    Menu.addEventListener("click", (e) => {
        e.stopPropagation();
        navLinks.classList.toggle("active");
    });
    document.addEventListener("click", (e) => {
        if (!navLinks.contains(e.target) && !Menu.contains(e.target)) {
            navLinks.classList.remove("active");
        }
    });

    const darkBtn = document.getElementById("darkmode-toggle");
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    console.log("Navbar Loaded");
});
