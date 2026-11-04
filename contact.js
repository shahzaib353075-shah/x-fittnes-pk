
function toggleAbout() {
    let info = document.getElementById("moreInfo");

    info.hidden = !info.hidden;
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let result = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        result.innerText = "Please fill all fields!";
        result.style.color = "red";
    }
    else if (!document.getElementById("email").validity.valid) {
        result.innerText = "Please enter a valid email!";
        result.style.color = "red";
    }
    else {
        result.innerText = "Form checked successfully! This is a demo.";
        result.style.color = "lightgreen";
    }
});
