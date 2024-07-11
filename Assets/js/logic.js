document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleMode');

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-Mode-Main');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});
