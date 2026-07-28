const shootBtn = document.getElementById("shootBtn");
const heart = document.getElementById("heart");
const message = document.getElementById("message");
const userName = document.getElementById("userName");
const nameInput = document.getElementById("name");

shootBtn.addEventListener("click", () => {

    let name = nameInput.value.trim();

    if (name === "") {
        alert("Please enter a birthday name!");
        return;
    }

    // Heart Hit Animation
    heart.classList.add("hit");
    heart.innerHTML = "💘";

    shootBtn.disabled = true;
    shootBtn.innerHTML = "🏹 Arrow Shot!";

    // Show Birthday Message
    setTimeout(() => {
        userName.innerText = name;
        message.classList.remove("hidden");
    }, 800);

    // Heart Beat Effect
    setInterval(() => {
        heart.style.transform = "scale(1.3)";
        setTimeout(() => {
            heart.style.transform = "scale(1)";
        }, 250);
    }, 800);

});
