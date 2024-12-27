const menuDvi = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu')

menuDvi.addEventListener('click', animarMenu)

function animarMenu(){
    menuDvi.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
}
