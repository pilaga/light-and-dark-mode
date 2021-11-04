const toggleSwitch = document.querySelector('input[type="checkbox"]');

//event listener
toggleSwitch.addEventListener('change', switchTheme);

//swich theme dynamically
function switchTheme(event) {
    if(event.target.checked) { //switch to dark monde
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}