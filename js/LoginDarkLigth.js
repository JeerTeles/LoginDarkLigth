const mode = window.document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = window.document.getElementById('login_form');
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add("fa-sun");

        form.classList.add('dark')
        returm;
    }
    mode.classList.add('fa-moon');
    mode.classList.remove("fa-sun");
    form.classList.remove('dark')
    
});


