const navs = document.querySelectorAll('.list')
const blurs = document.querySelectorAll('.blur')
const tops = document.querySelectorAll('.top')

navs.forEach((nav) => {
    nav.addEventListener('click', () => {
        removeActiveNav()
        nav.classList.toggle('active')
    })
})

function removeActiveNav() {
    navs.forEach((nav) => {
        nav.classList.remove('active')
    })
    console.log(21)
}

