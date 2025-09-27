document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email);

    if (!email) {
      alert("Email cannot be empty.");
      return;
    }
    if (!user) {
      alert("User not found.");
      return;
    }
    if (!password || user.password !== password) {
      alert("Password incorrect.");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify({ name: user.name, email: user.email }));
    alert("Login successful! Redirecting to dashboard...");
    window.location.href = "dashboard.html";
  });
});
