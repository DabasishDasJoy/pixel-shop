const toggleButton = document.getElementById('toggle-theme');
const html = document.querySelector('html');

//get the default operating system set theme and then set the toggle switch on/off
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    console.log(toggleButton.checked);
    toggleButton.checked = true;
} else {
    console.log(toggleButton.checked);
    toggleButton.checked = false;
}

toggleButton.addEventListener('change', function(){
   
    if(this.checked){
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('color-theme', 'dark');
    }
    else{
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('color-theme', 'dark');
    }

});