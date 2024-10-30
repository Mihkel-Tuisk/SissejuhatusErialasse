let count = 0;

const button = document.getElementById('cookieButton');
const clickCountDisplay = document.getElementById('clickCount');

button.addEventListener('click', () => {
    count++;
    clickCountDisplay.textContent = count;

    button.classList.add('clicked');

    setTimeout(() => {
        button.classList.remove('clicked');
    }, 100);
});