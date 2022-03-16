/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

/*click em item do menu = fechar*/

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/*muda p header quando der o scroll*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

/*swiper*/
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
});

/* scrollreveal> mostra elementos com scroll na pagina*/

const scrollReveal = ScrollReveal({
    origin: 'pulse',
    distance: '30px',
    duration: 700,
    reset: true,

})

scrollReveal.reveal('#home .image, #home .text',  { interval: 300 })
scrollReveal.reveal('#about .image, #about .text',  { interval: 300 })
scrollReveal.reveal('#services .card, #services .title',  { interval: 300 })
scrollReveal.reveal('#testimonials, #testimonials ',  { interval: 300 })
scrollReveal.reveal('#contact .text, #contact .links ',  { interval: 300 })
scrollReveal.reveal('.brand .logo-alt, .parg ,  .social',  { interval: 300 })