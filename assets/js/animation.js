const sectionMedia = document.querySelector(".album")
const transformItem = document.querySelector(".image__transform")

function elementInViewport(el){
    var bounds = el.getBoundingClientRect();
    return (
        (bounds.top + bounds.height > 0) && // Елемент ниже верхней границы
        (window.innerHeight - bounds.top > 0) && // Выше нижней
        (bounds.left + bounds.width > 0) && // Правее левой
        (window.innerWidth - bounds.left > 0)// Левее правой
    );
}

document.addEventListener("scroll", (e)=> {
    let viewMedia = elementInViewport(sectionMedia)
    let points = document.querySelectorAll(".album__point")
    let albumTitle = document.querySelector(".album__title")
    let albumText = document.querySelector(".album__text")
    if (viewMedia == true){
        transformItem.classList.add("album__left")
        albumTitle.style.animation = "typewriter steps(20) 1s 1 normal both"
        albumText.style.opacity = "0.7"
        points.forEach(point => {
            point.style.opacity = "1"
        });
    }
    else {
        transformItem.classList.remove("album__left")
        points.forEach(point => {
            point.style.opacity = "0"
        });
        albumText.style.opacity = "0"
        albumTitle.style.animation = "none"
    }
})