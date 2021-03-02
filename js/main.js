const desplazar = document.querySelector('.navbar')

window.onscroll= () => {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroll > 20 ){
        desplazar.classList.add('navbar-scroll')    
    }
    else{
        desplazar.classList.remove('navbar-scroll')
    }
}

/*SCRIPT MENU*/
const boton = document.querySelector('.menu-btn i')
const menu = document.querySelector('.menu')
//const cerrar = document.querySelector('')
boton.addEventListener('click', () => {
    menu.classList.toggle('active')
    boton.classList.toggle('active')
})


/*SCROLLREVEAL*/
ScrollReveal().reveal('.about',{delay: 500 });
ScrollReveal().reveal('.services',{delay: 500 });
ScrollReveal().reveal('.skills',{delay: 500 });
