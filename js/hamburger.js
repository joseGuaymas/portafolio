const hamburguer = document.querySelector("#hamburguer");
const close = document.querySelector("#close");
const nav = document.querySelector("nav");
const navlist = document.querySelector('#navlist')

hamburguer.addEventListener('click', () => {
    nav.classList.toggle("mostrar-menu")
    hamburguer.classList.toggle('hidden')
});

close.addEventListener('click', () => {
    nav.classList.toggle("mostrar-menu")
    hamburguer.classList.toggle('hidden')
});

window.addEventListener('click', (e)=> {
    if(nav.classList.contains('mostrar-menu') && e.target != nav && e.target != hamburguer) {
        nav.classList.toggle("mostrar-menu")
        hamburguer.classList.toggle('hidden')
    }
});

function fullMenu() {  
    close.classList.add('hidden')
    hamburguer.classList.add('hidden')
    nav.classList.add('hidden')
    navlist.classList.remove('hidden')
    navlist.classList.add('navlist-fullscreen')
}

function hideMenu() {  
    close.classList.remove('hidden')
    hamburguer.classList.remove('hidden')
    nav.classList.remove('hidden')
    navlist.classList.remove('navlist-fullscreen')
    navlist.classList.add('hidden')
}

console.log(window.innerWidth)

if (window.innerWidth < 1024) {
    hideMenu()
    console.log('ok')
} else {
    fullMenu()
}
    
    
window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) {
        hideMenu()
    } else {
        fullMenu()
    }
})

