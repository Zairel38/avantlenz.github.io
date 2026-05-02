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
