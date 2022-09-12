// navigation item
let scrollBtns = document.querySelectorAll(".header__item")


// set events for scroll
scrollBtns.forEach(element => {
    element.addEventListener("click", (e)=>{
        e.preventDefault()
        let scrollTo =  element.getAttribute('data-scroll')
        scrollItem = document.getElementById(`${scrollTo}`)
        scrollItem.scrollIntoView({behavior: "smooth", block: "center"})
    })
});