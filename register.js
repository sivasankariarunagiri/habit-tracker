document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!name) {
      alert("Name cannot be empty.");
      return;
    } else if (!/^[A-Za-z ]{2,}$/.test(name)) {
      alert("Name must be at least 2 letters and contain only letters/spaces.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email.");
      return;
    } else if (users.some(u => u.email === email)) {
      alert("Email already exists.");
      return;
    }

    if (!password || !/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password)) {
      alert("Password must be at least 6 characters with at least 1 number.");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify({ name, email }));

    alert("Registration successful! Redirecting to login...");
    window.location.href = "login.html";
  });
});
