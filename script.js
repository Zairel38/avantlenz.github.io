function goToProducts() {
    window.location.href = "products.html";
}

// Pricing calculator
function calculatePrice() {
    let qty = document.getElementById("qty").value;
    let price = qty * 799;

    document.getElementById("priceResult").innerText =
        "Total: $" + price;
}

// Email validation
function validateEmail() {
    let email = document.getElementById("email").value;

    if (email.includes("@")) {
        document.getElementById("formMsg").innerText = "Valid email!";
    } else {
        document.getElementById("formMsg").innerText = "Invalid email!";
    }
}

// Contact form
function sendMessage() {
    let name = document.getElementById("name").value;
    let msg = document.getElementById("message").value;

    if (name === "" || msg === "") {
        document.getElementById("contactMsg").innerText =
            "Please fill all fields.";
    } else {
        document.getElementById("contactMsg").innerText =
            "Message sent!";
    }
}
