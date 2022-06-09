const pizarra = document.querySelector('#pizarra');
const body = document.querySelector('body');



pizarra.addEventListener('click', function(){
    body.classList.toggle('darkMode');
    pizarra.classList.toggle('active');

    if(body.classList.contains('darkMode')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

if(localStorage.getItem('dark-mode') === 'true'){
    body.classList.add('darkMode');
    pizarra.classList.add('active');
} else {
    body.classList.remove('darkMode');
    pizarra.classList.remove('active');
}

