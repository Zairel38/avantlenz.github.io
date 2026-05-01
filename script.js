function learnMore() {
    alert("Welcome to Avant-Lenz!");
}

/* Animate elements on load */
window.onload = () => {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 200);
    });
};
