document.addEventListener("DOMContentLoaded", () => {
    const HABIT_TRACKER_FEATURES = [
        { title: "Streaks", description: "Maintain streaks and stay motivated every day.", icon: "🔥" },
        { title: "Calendar", description: "Track your habit completion visually using our calendar.", icon: "✅" }
    ];

    let featuresHTML = "";
    HABIT_TRACKER_FEATURES.forEach(feature => {
        featuresHTML += `
            <div class="feature">
                <span class="emoji">${feature.icon}</span>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `;
    });

    document.getElementById("feature-cards").innerHTML = featuresHTML;
    console.log("Features Loaded");
});
