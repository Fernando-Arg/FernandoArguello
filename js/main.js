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
console.log(boton)
const menu = document.querySelector('.menu')
//const cerrar = document.querySelector('')
console.log(menu)
boton.addEventListener('click', () => {
    console.log('auch')
    menu.classList.toggle('active')
    boton.classList.toggle('active')
})