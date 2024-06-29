const toggleButton = document.querySelector('#toggleButton')
const body = document.querySelector('body');
toggleButton.addEventListener('click', ()=>{
    body.classList.toggle('dark-mode')
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Noturno';
    }

})