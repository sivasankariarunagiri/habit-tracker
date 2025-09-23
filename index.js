document.addEventListener("DOMContentLoaded", () =>{

const toggleBtn=document.getElementById("darkmode-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

const Menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");

Menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

ROUTES.forEach(route => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = route.path;
    a.textContent = route.pageName;
    li.appendChild(a);
    navLinks.appendChild(li);
});

const featureCards = document.getElementById("feature-cards");
HABIT_TRACKER_FEATURES.forEach(feature => {
    const div = document.createElement("div");
    div.classList.add("feature");
    div.innerHTML = `
    <span class="emoji">${feature.icon}</span>
    <h3>${feature.title}</h3>
    <p>${feature.description}</p>
    `;
    featureCards.appendChild(div);
});

console.log("Homepage Loaded: Navbar and Features Rendered Successfully");
});
