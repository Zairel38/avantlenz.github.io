// Run everything after the page fully loads
document.addEventListener("DOMContentLoaded", () => {

    // Page transition effect (your original, just wrapped safely)
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");

            if (href && !href.startsWith("#")) {
                e.preventDefault();

                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = href;
                }, 250);
            }
        });
    });

});


// 🔹 Navigate to Products page
function goToProducts() {
    window.location.href = "products.html";
}


// 🔹 Contact form message sender (your original improved slightly)
function sendMessage() {
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");
    const output = document.getElementById("contactMsg");

    if (!nameInput || !messageInput || !output) return;

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) {
        output.innerText = "Please fill all fields.";
    } else {
        output.innerText = "Message sent successfully!";
    }
}


// 🔹 Pricing calculator (ADDED)
function calculatePrice() {
    const qtyInput = document.getElementById("qty");
    const result = document.getElementById("priceResult");

    if (!qtyInput || !result) return;

    const qty = parseInt(qtyInput.value);

    if (isNaN(qty) || qty <= 0) {
        result.innerText = "Enter a valid quantity.";
    } else {
        const total = qty * 799;
        result.innerText = "Total: $" + total;
    }
}


// 🔹 Email validation (ADDED)
function validateEmail() {
    const emailInput = document.getElementById("email");
    const msg = document.getElementById("formMsg");

    if (!emailInput || !msg) return;

    const email = emailInput.value.trim();

    if (!email || !email.includes("@") || !email.includes(".")) {
        msg.innerText = "Enter a valid email.";
    } else {
        msg.innerText = "Email submitted!";
    }
}
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        if (this.getAttribute("href").includes(".html")) {
            e.preventDefault();

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location = this.href;
            }, 250);
        }
    });
});
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
