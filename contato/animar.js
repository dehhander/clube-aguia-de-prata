document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Formulário enviado com sucesso!');
        alert('Sua mensagem foi enviada. Entraremos em contato em breve.');
        form.reset();
    });
});

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
