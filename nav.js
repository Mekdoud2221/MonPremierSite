// récupéré le menu
let menu = document.getElementById('menu')

// ajouter un événement au clic
menu.addEventListener('click', () => {
    menu.classList.toggle('open')
})