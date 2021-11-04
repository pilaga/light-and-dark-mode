//switch object & event listener
const toggleSwitch = document.querySelector('input[type="checkbox"]');
toggleSwitch.addEventListener('change', switchTheme);

//html objects
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//swich theme dynamically
function switchTheme(event) {
    if(event.target.checked) { //switch to dark monde
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        switchToDarkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        switchToLightMode();
    } 
}

//dark mode styles
function switchToDarkMode() {
    //text box
    nav.style.backgroundColor = 'rgb(0 0 0 / 80%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    //toggle switch
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    updateImageMode('dark');
}

//light mode styles
function switchToLightMode() {
    //text box
    nav.style.backgroundColor = 'rgb(255 255 255 / 80%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    //toggle switch
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    updateImageMode('light');
}

//dark or light images
function updateImageMode(color) {
    image1.src = `img/undraw_designer_${color}.svg`;
    image2.src = `img/undraw_location_${color}.svg`;
    image3.src = `img/undraw_controlpanel_${color}.svg`;
}

//on load check local storage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;  
        switchToDarkMode();      
    }
}