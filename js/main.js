const desplazar = document.querySelector('.navbar')
const regresar = document.querySelector('.scroll-up')
window.onscroll= () => {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (scroll > 20 ){
        desplazar.classList.add('navbar-scroll')
    }
    else{
        desplazar.classList.remove('navbar-scroll')
    }
        if (scroll >500){
            regresar.classList.add('active')    
        }
        else{
            regresar.classList.remove('active')    
        }
}

/*SCRIPT REGRESAR*/

regresar.addEventListener('click', () =>{
    const htmlp = document.documentElement.scrollTop
    if(htmlp > 0){
        window.scrollTo(0, 0)
    }
    
})

/*SCRIPT MENU*/
const boton = document.querySelector('.menu-btn i')
const menu = document.querySelector('.menu')
//const cerrar = document.querySelector('')
boton.addEventListener('click', () => {
    menu.classList.toggle('active')
    boton.classList.toggle('active')
})

/*SCRIP BTN INICIO*/
/*SCROLLREVEAL*/
ScrollReveal().reveal('.about',{delay: 600 });
ScrollReveal().reveal('.services',{delay: 600 });
ScrollReveal().reveal('.skills',{delay: 600 });


/*ESCRITURA DEVELOPER JR*/
const typed = new Typed('.write', {
    strings: ['Developer Jr.'],
    typeSpeed:100,
    backSpeed:60,
    backDelay:1000,
    showCursor:false,
    loop: true
} );


const typed2 = new Typed('.write-2', {
    strings: ['Developer Jr.'],
    typeSpeed:100,
    backSpeed:60,
    backDelay:1000,
    showCursor:false,
    loop: true
} );