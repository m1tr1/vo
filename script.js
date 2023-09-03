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

// blurs.forEach((blur) => {
//     blur.addEventListener('mouseover', () => {
//         tops.forEach((top) => {
//             top.classList.add('active')
//         })
//         console.log(2)
//     })
// })

// tops.forEach((top) => {
//     top.addEventListener('mouseover' , () => {
//         top.classList.add('active')
//     })
// })