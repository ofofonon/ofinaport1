const hoverButton = document.getElementById("but2");
const rollingDiv = document.getElementById("navnav1");

hoverButton.addEventListener("mouseenter", () => {
    rollingDiv.classList.remove("navnavli");
    rollingDiv.classList.add("visible");
});

hoverButton.addEventListener("mouseleave", () => {
    rollingDiv.classList.remove("visible");
    rollingDiv.classList.add("navnavli");
});