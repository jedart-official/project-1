// variables
const player = document.querySelector(".preview__player")
const playerBtn = document.querySelector(".preview__play")
const playerAudio = document.querySelector(".preview__audio")
const playerContainer = document.querySelector(".preview__line")
const playerBar = document.querySelector(".fully__line")
const playerTime = document.querySelector(".preview__time")
const playerCurrentTime = document.querySelector(".preview__current")
const playerDurationTime = document.querySelector(".preview__duration")
const playerWrapper = document.querySelector(".preview__wrapper")


// play
function play(){
    playerAudio.play()
}

// pause 
function pause(){
    playerAudio.pause()
}


// pause / play
playerBtn.addEventListener("click", () =>{
    if (playerBtn.classList.contains("preview__pause")){
        playerAudio.pause()
        playerBtn.classList.remove("preview__pause")
    }
    else {
        play()
        playerBtn.classList.add("preview__pause")
    }
})


// update progressBar
function progressBarUpdate(e){
    const {duration, currentTime} = e.srcElement
    const playerDuration = (currentTime  /  duration) * 100
    playerBar.style.width = `${playerDuration}%`
    newcurrentTime = Math.round(currentTime, 1)
    currentMin = Math.floor(newcurrentTime / 60)
    currentSec = Math.floor(newcurrentTime % 60)
    newcurrentTimeFormat = [
        currentMin.toString().padStart(2, '0'),
        currentSec.toString().padStart(2, '0')
    ].join(":")
    playerCurrentTime.innerHTML = `${newcurrentTimeFormat} -`
}
playerAudio.addEventListener("timeupdate", progressBarUpdate)


// set progress
function progressSet(e){
    const allWidth = this.clientWidth
    const setWidth = e.offsetX
    const audioDuration = playerAudio.duration
    playerAudio.currentTime = (setWidth / allWidth) * audioDuration 
}
playerWrapper.addEventListener("click", progressSet)


// Autoplay 
function autoplay(){
    play()
}
playerAudio.addEventListener("ended", autoplay)


// update progress bar with move
function moveSetUpdate(e){
    const moveAllWidth = playerContainer.clientWidth
    const moveSetWidth = e.offsetX
    const audioDuration = playerAudio.duration
    playerAudio.currentTime = (moveSetWidth / moveAllWidth) * audioDuration
    if (playerBar.style.width < playerContainer.style.width){
        playerBar.style.width = `${moveSetWidth}px`
    }
    
    
}
function moveSet(){
    document.addEventListener('mousemove', moveSetUpdate);
    document.addEventListener("mouseup", moveRemove)
}
function moveRemove(){
    document.removeEventListener("mousemove", moveSetUpdate)
}
playerBar.addEventListener("mousedown", moveSet)



// update progress bar with move in Mobile
function moveSetUpdateMobile(e){
    const moveAllWidthMobile = playerWrapper.clientWidth
    const moveSetWidthMobile = e.touches[0].clientX - 120
    const audioDuration = playerAudio.duration
    playerAudio.currentTime = (moveSetWidthMobile / moveAllWidthMobile) * audioDuration
    playerBar.style.width = `${moveSetWidthMobile}px`
}
function moveSetMobile(e){
    playerWrapper.addEventListener('touchmove', moveSetUpdateMobile);
}
function moveRemoveMobile(){
    playerWrapper.removeEventListener("touchmove", moveSetUpdateMobile)
}
playerBar.addEventListener("touchstart", moveSetMobile)
playerWrapper.addEventListener("touchend", moveRemoveMobile)