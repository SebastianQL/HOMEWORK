const logoPrincipal = document.getElementById('logoPrincipal');

logoPrincipal.addEventListener('click', () => {
    location.reload();
});


const button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
    location.reload();
});


const searchInput = document.getElementById('search');

searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchInput.value = '';
    }
});



const buscador = document.getElementById('buscador');

buscador.addEventListener('click', () => {
    location.reload();
});