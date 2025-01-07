document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();

    let greetingMessage = "WELCOME TO MY PORTOFOLIO";
    if (currentHour < 12) {
        greetingMessage = "GOOD MORNING";
    } else if (currentHour < 18) {
        greetingMessage = "GOOD AFTERNOON";
    } else {
        greetingMessage = "GOOD NIGHT";
    }

    greetingElement.textContent = greetingMessage;
});