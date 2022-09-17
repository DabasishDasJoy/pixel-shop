document.getElementById('toggle-theme').addEventListener('change', function(){
    if(this.checked){
        document.querySelector("html").setAttribute('data-theme', 'light');
    }
    else{
        document.querySelector("html").setAttribute('data-theme', 'dark');
    }
})