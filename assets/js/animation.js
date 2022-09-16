const sectionAlbum = document.querySelector(".album")
const sectionMusic = document.querySelector(".nextmedia")
const sectionMedia = document.querySelector(".media")
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


function checkAlbum(){
    let viewMedia = elementInViewport(sectionAlbum)
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
}

function checkMedia(){
    let viewMedia = elementInViewport(sectionMedia)
    let leftBlock = document.querySelector(".media__content")
    let rightBlock = document.querySelector(".media__image")
    console.log(window);
    if (window.innerWidth > 1200){
        if (viewMedia == true){
        
            leftBlock.style.transform = "translateX(0)"
            leftBlock.style.opacity = "1"
            rightBlock.style.transform = "translate(0, -50%)"
            rightBlock.style.opacity = "1"
        }
        else {
            leftBlock.style.transform = "translateX(-800px)"
            leftBlock.style.opacity = "0"
            rightBlock.style.transform = "translate(1000px, -50%)"
            rightBlock.style.opacity = "0"
        }
    }
    
}

function checkMusic(){
    let viewMedia = elementInViewport(sectionMusic)
    let leftBlock = document.querySelector(".nextmedia__left")
    let rightBlock = document.querySelector(".nextmedia__right")
    if (viewMedia == true){
        leftBlock.style.transform = "translateX(0)"
        leftBlock.style.opacity = "1"
        rightBlock.style.transform = "translateX(0)"
        rightBlock.style.opacity = "1"
    }
    else {
        leftBlock.style.transform = "translateX(-800px)"
        leftBlock.style.opacity = "0"
        rightBlock.style.transform = "translateX(800px)"
        rightBlock.style.opacity = "0"
    }
}



document.addEventListener("scroll", (e)=> {
    checkAlbum()
    checkMedia()
    checkMusic()
})