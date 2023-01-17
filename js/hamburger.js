const hamburguer = document.querySelector("#hamburguer");
const close = document.querySelector("#close");
const nav = document.querySelector("nav");

hamburguer.addEventListener('click', () => {
    nav.classList.toggle("mostrar-menu")
});

close.addEventListener('click', () => {
    nav.classList.toggle("mostrar-menu")
});

window.addEventListener('click', (e)=> {
    if(nav.classList.contains('mostrar-menu') && e.target != nav && e.target != hamburguer) {
        nav.classList.toggle("mostrar-menu")
    }
});
