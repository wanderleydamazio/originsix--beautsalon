/* Abre e fecha o menu quando clicar no icone: hamburguer e X */
const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show")
  })
}

/* quando clicar em um item do menu, esconder o menu */

const links = document.querySelectorAll("nav ul li a")

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show")
  })
}

/* Adicionar sobra no header quando tiver scroll*/
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  const header = document.querySelector("#header")
  const navHeigth = header.offsetHeight

  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add("scroll")
    console.log
  } else {
    // scroll é menor que a altura do header
    header.classList.remove("scroll")
  }
}

/* Testimonials caroucel slider swiper */

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {

    
    slidesPerView: 2,
    seWrapperSize: true
  }
  }
})

/*ScrollReveal Mostar os elementos quando ouver scroll na pagina*/

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  { interval: 100 }
)

/*Back to back voltar para o topo*/

const backToTopButton = document.querySelector(".back-to-top")
function backToTop() {

  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show")
  } else {
    backToTopButton.classList.remove("show")
  }
}

/*MENU ATIVO*/
const section = document.querySelectorAll('section[id]')
function actvateMenuAtCurrentSection() {
  const checkpoint = (window.pageYOffset + innerHeight / 8) * 4

  for( const section of section ) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document.querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }
  }
}

/*When Scroll*/
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll()
  backToTop()
})
