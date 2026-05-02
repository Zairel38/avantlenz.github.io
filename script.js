function goToProducts() {
    window.location.href = "products.html";
}

function sendMessage() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const output = document.getElementById("contactMsg");

    if (!name || !message) {
        output.innerText = "Please fill all fields.";
    } else {
        output.innerText = "Message sent successfully!";
    }
}
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // Only apply to internal pages
        if (href && !href.startsWith("#")) {
            e.preventDefault();

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = href;
            }, 250);
        }
    });
});
