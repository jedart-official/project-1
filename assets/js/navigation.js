let scrollBtns = document.querySelectorAll(".header__item")

scrollBtns.forEach(element => {
    element.addEventListener("click", (e)=>{
        e.preventDefault()
        let scrollTo =  element.getAttribute('data-scroll')
        scrollItem = document.getElementById(`${scrollTo}`)
        scrollItem.scrollIntoView({behavior: "smooth", block: "center"})
    })
});