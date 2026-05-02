function learnMore() {
    document.querySelector("#about").scrollIntoView({
        behavior: "smooth"
    });
}

// Scroll animation using Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
});
