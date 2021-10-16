const title = document.querySelector('.title');
const array = ['Cargando taller...', 'Empezamos en...', '3', '2', '1']
let i = 0;

title.addEventListener('animationend', () => {
    title.classList.remove('loading');
    title.classList.remove('loading2');

    setTimeout(() => {
        title.textContent = array[i];
        title.setAttribute('data-title', array[i]);
        title.classList.add('loading');

        if(i === array.length)
            i = 0;
        else 
            i++;
    }, 1000);
});