const toggleButton = document.getElementById('toggle-theme');
const body = document.body;
const icon = document.getElementById('icon');
const container = document.querySelector('.container-button-toggle-theme');

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    container.classList.add('clicked');  
    icon.src = './images/moon-icon.png'; 
    toggleButton.classList.add('move-right');
    toggleButton.classList.add('clicked');
} else {
    body.classList.remove('dark-mode');
    container.classList.remove('clicked');  
    icon.src = './images/sum.png';  
    toggleButton.classList.remove('move-right');
    toggleButton.classList.remove('clicked');
}

toggleButton.addEventListener('click', () => {
    
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        icon.src = './images/moon-icon.png';  
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.src = './images/sum.png';  
        localStorage.setItem('darkMode', 'disabled');
    }

    toggleButton.classList.toggle('move-right');
    toggleButton.classList.toggle('clicked');

    container.classList.toggle('clicked');
});
