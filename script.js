
document.addEventListener("DOMContentLoaded", function () {
    const errorScreen = document.getElementById("error-screen");

    
    errorScreen.style.display = "flex";

   
    errorScreen.addEventListener("click", function () {
        errorScreen.style.display = "none";
    });
});


let input = "";
const secretCode = "renacer";

document.addEventListener("keydown", function (e) {
    input += e.key;

    if (input.includes(secretCode)) {
        alert("¡Has descubierto el secreto! 🎉 Bienvenido a la nueva era de nuestra empresa.");
        input = ""; 
    }
});


const chatbot = document.getElementById("chatbot");
const openChatbot = document.getElementById("open-chatbot");
const closeChatbot = document.getElementById("close-chatbot");
const chatbotMessages = document.querySelector(".chatbot-messages");
const chatbotInput = document.getElementById("chatbot-input");

openChatbot.addEventListener("click", function () {
    chatbot.style.display = "flex";
});

closeChatbot.addEventListener("click", function () {
    chatbot.style.display = "none";
});

chatbotInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && chatbotInput.value.trim() !== "") {
        const userMessage = chatbotInput.value;
        chatbotMessages.innerHTML += `<div class="message user">${userMessage}</div>`;
        chatbotInput.value = "";

        
        setTimeout(function () {
            chatbotMessages.innerHTML += `<div class="message bot">Gracias por tu mensaje. ¿En qué más puedo ayudarte?</div>`;
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 500);
    }
});


const toggleDarkMode = document.getElementById("toggle-dark-mode");


if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleDarkMode.textContent = "☀️";
} else {
    document.body.classList.remove("dark-mode");
    toggleDarkMode.textContent = "🌙";
}


toggleDarkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        toggleDarkMode.textContent = "☀️";
    } else {
        localStorage.setItem("dark-mode", "disabled");
        toggleDarkMode.textContent = "🌙";
    }
});

