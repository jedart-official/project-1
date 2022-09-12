// variables for burger menu
const burgerBtn = document.querySelector(".header__burger")
const headerMobile = document.querySelector(".header__mobile")
const bodyLock = document.getElementsByTagName("body")


// click on burger button
burgerBtn.addEventListener("click", ()=> {
    burgerBtn.classList.toggle('header_button_open')
    headerMobile.classList.toggle('header_open')
    bodyLock[0].classList.toggle("body-hide")
})

// click on header link
scrollBtns.forEach(element => {
    element.addEventListener("click", (e)=>{
        headerMobile.classList.remove("header_open")
        bodyLock[0].classList.remove("body-hide")
    })
});