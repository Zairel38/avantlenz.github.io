
// ===============================
// PAGE LOAD + GLOBAL INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    // Smooth page transitions
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

    // Fade-in scroll animation
    const faders = document.querySelectorAll(".fade-in");

    const appearOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    faders.forEach(el => appearOnScroll.observe(el));

    // Show logged-in user
    const currentUser = localStorage.getItem("currentUser");
    const userDisplay = document.getElementById("userDisplay");

    if (userDisplay) {
        userDisplay.innerText = currentUser
            ? "Welcome, " + currentUser
            : "Guest User";
    }
});


// ===============================
// NAVIGATION
// ===============================
function goToProducts() {
    window.location.href = "products.html";
}


// ===============================
// CONTACT FORM
// ===============================
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


// ===============================
// PRICE CALCULATOR
// ===============================
function calculatePrice() {

    const qtyInput = document.getElementById("qty");
    const result = document.getElementById("priceResult");

    if (!qtyInput || !result) return;

    const qty = parseInt(qtyInput.value);

    if (isNaN(qty) || qty <= 0) {
        result.innerText = "Enter a valid quantity.";
    } else {
        result.innerText = "Total: $" + (qty * 799);
    }
}


// ===============================
// EMAIL VALIDATION
// ===============================
function validateEmail() {

    const emailInput = document.getElementById("email");
    const msg = document.getElementById("formMsg");

    if (!emailInput || !msg) return;

    const email = emailInput.value.trim();

    if (!email.includes("@") || !email.includes(".")) {
        msg.innerText = "Enter a valid email.";
    } else {
        msg.innerText = "Thank you for Signing up with Avant-Lenz!";
        emailInput.value = "";
    }
}


// ===============================
// SIGN UP SYSTEM
// ===============================
function signup() {

    const username = document.getElementById("signupUsername");
    const email = document.getElementById("signupEmail");
    const password = document.getElementById("signupPassword");
    const msg = document.getElementById("signupMsg");

    if (!username || !email || !password || !msg) return;

    if (!username.value || !email.value || !password.value) {
        msg.innerText = "Please fill all fields.";
        return;
    }

    const user = {
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value.trim()
    };

    localStorage.setItem("avantUser", JSON.stringify(user));

    msg.innerText = "Account created successfully!";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
}


// ===============================
// LOGIN SYSTEM
// ===============================
function login() {

    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    const msg = document.getElementById("loginMsg");

    if (!email || !password || !msg) return;

    const savedUser = JSON.parse(localStorage.getItem("avantUser"));

    if (!savedUser) {
        msg.innerText = "No account found.";
        return;
    }

    if (
        email.value.trim() === savedUser.email &&
        password.value.trim() === savedUser.password
    ) {
        localStorage.setItem("currentUser", savedUser.username);

        msg.innerText = "Login successful!";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);

    } else {
        msg.innerText = "Invalid login information.";
    }
}


// ===============================
// LOGOUT
// ===============================
function logout() {

    localStorage.removeItem("currentUser");

    window.location.href = "login.html";
}
// ===============================
// CHECKOUT SYSTEM
// ===============================

let quantity = 1;
const pricePerItem = 1079;

function updateCheckout() {
    const qtyDisplay = document.getElementById("qtyDisplay");
    const total = document.getElementById("totalPrice");

    if (!qtyDisplay || !total) return;

    qtyDisplay.innerText = quantity;

    const totalPrice = quantity * pricePerItem;
    total.innerText = "Total: $" + totalPrice;
}

function changeQty(amount) {
    quantity += amount;

    if (quantity < 1) quantity = 1;

    updateCheckout();
}

function checkout() {
    alert("Checkout complete! Total: $" + (quantity * pricePerItem));
}
