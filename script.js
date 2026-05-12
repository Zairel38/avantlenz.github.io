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


// Navigate to Products page
function goToProducts() {
    window.location.href = "products.html";
}


// Contact form message sender
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


// Pricing calculator
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


// EMAIL VALIDATION (UPDATED MESSAGE)
function validateEmail() {
    const emailInput = document.getElementById("email");
    const msg = document.getElementById("formMsg");

    if (!emailInput || !msg) return;

    const email = emailInput.value.trim();

    if (!email || !email.includes("@") || !email.includes(".")) {
        msg.innerText = "Enter a valid email.";
    } else {
        msg.innerText = "Thank you for Signing up with Avant-Lenz!";
        emailInput.value = "";
    }
}


// FADE-IN SCROLL ANIMATION
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

faders.forEach((fader) => {
    appearOnScroll.observe(fader);
});
// SIGN UP SYSTEM
function signup() {

    const username = document.getElementById("signupUsername").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const msg = document.getElementById("signupMsg");

    if (!username || !email || !password) {
        msg.innerText = "Please fill all fields.";
        return;
    }

    const user = {
        username,
        email,
        password
    };

    localStorage.setItem("avantUser", JSON.stringify(user));

    msg.innerText = "Account created successfully!";
}


// LOGIN SYSTEM
function login() {

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const msg = document.getElementById("loginMsg");

    const savedUser = JSON.parse(localStorage.getItem("avantUser"));

    if (!savedUser) {
        msg.innerText = "No account found.";
        return;
    }

    if (email === savedUser.email && password === savedUser.password) {

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("currentUser", savedUser.username);

        msg.innerText = "Login successful!";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);

    } else {
        msg.innerText = "Invalid login information.";
    }
}


// SHOW USERNAME
window.addEventListener("DOMContentLoaded", () => {

    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {

        const userDisplay = document.getElementById("userDisplay");

        if (userDisplay) {
            userDisplay.innerText = "Welcome, " + currentUser;
        }
    }
});


// LOGOUT
function logout() {

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");

    window.location.href = "login.html";
}
