const toggleBtn=document.getElementById("darkmode-toggle");
toggleBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode"))
    {
        toggleBtn.textContent="☀️";
    }
    else{
        toggleBtn.textContent="🌙";
    }
});

console.log("Modern Habit Tracker Homepage Loaded with Dark Mode")
