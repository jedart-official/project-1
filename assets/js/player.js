// variables
const MainPlayer = document.querySelector(".preview__player")
const MainPlayerBtn = document.querySelector(".tracks__play")
const MainPlayerAudio = document.querySelector(".main__audio")
const MainPlayerContainer = document.querySelector(".main__container")
const MainPlayerBar = document.querySelector(".main__fully__line")
const MainPlayerTime = document.querySelector(".preview__time")
const MainPlayerCurrentTime = document.querySelector(".main__current__time")
const MainPlayerDurationTime = document.querySelector("main__duration")
const MainPlayerWrapper = document.querySelector(".main__wrapper")
const MainPlayerTrack = document.querySelectorAll(".tracks__item")
const MainPlayerImage = document.querySelector(".player__image")
const mainSounds = ["3LAU, Bright Lights — How You Love Me", "Bright Lights, Kaleena Zanders, Kandy — War For Love", "Pink Is Punk, Benny Benassi, Bright Lights — Ghost", "Hardwell, Dyro, Bright Lights — Never Say Goodbye", "Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now", "Zedd, Bright Lights — Follow You Down"]

playerProcess()



function playerProcess(){
    MainPlayerTrack.forEach(element=> {
        element.addEventListener("click", ()=>{
            MainPlayerAudio.currentTime = 0;
            mainPause()
            clear(element)
            let text = element.children[1]
            let soundIndex = element.getAttribute("id")
            let soundName = mainSounds[soundIndex]
            text.classList.add("text_purple")
            MainPlayerAudio.src = `assets/sound/${soundName}.mp3`
            MainPlayerImage.src = `assets/img/${text.innerHTML}.webp`
            MainPlayerBtn.classList.add("preview__pause")
            // s
            mainPlay()
            // pausePlay()
        })
    });
}

MainPlayerBtn.addEventListener("click", ()=> {
    if (MainPlayerBtn.classList.contains("preview__pause")){
        mainPause()
    }
    else {
        mainPlay()
    }
})
    

//clear player
function clear(){
    MainPlayerTrack.forEach(text_key =>{
        text_key.children[1].classList.remove("text_purple")
    })
}
// pause / play



// play
function mainPlay(){
    // MainPlayerImage.classList.add("image__rotate")
    MainPlayerBtn.classList.add("preview__pause")
    MainPlayerAudio.play()
}

// pause 
function mainPause(){
    // MainPlayerImage.classList.remove("image__rotate")
    MainPlayerBtn.classList.remove("preview__pause")
    imageRotate = -3
    MainPlayerAudio.pause()
    
}


let imageRotate = 0

// update progressBar
function mainProgressBarUpdate(e){
    const {duration, currentTime} = e.srcElement
    const playerDuration = (currentTime  /  duration) * 100
    MainPlayerBar.style.width = `${playerDuration}%`
    MainNewcurrentTime = Math.round(currentTime, 1)
    MainCurrentMin = Math.floor(MainNewcurrentTime / 60)
    MainCurrentSec = Math.floor(MainNewcurrentTime % 60)
    MainNewCurrentTimeFormat = [
        MainCurrentMin.toString().padStart(2, '0'),
        MainCurrentSec.toString().padStart(2, '0')
    ].join(":")
    MainPlayerCurrentTime.innerHTML = `${MainNewCurrentTimeFormat} -`
    imageRotate +=3
    MainPlayerImage.style.transform = `rotate(${imageRotate}deg)`
    
}
MainPlayerAudio.addEventListener("timeupdate", mainProgressBarUpdate)


// set progress
function mainProgressSet(e){
    const mainAllWidth = this.clientWidth
    const mainSetWidth = e.offsetX
    const mainAudioDuration = MainPlayerAudio.duration
    MainPlayerAudio.currentTime = (mainSetWidth / mainAllWidth) * mainAudioDuration 
}
MainPlayerWrapper.addEventListener("click", mainProgressSet)


// Autoplay 
function autoplay(){
    play()
}
MainPlayerAudio.addEventListener("ended", autoplay)


// update progress bar with move
function mainMoveSetUpdate(e){
    const mainMoveAllWidth = MainPlayerContainer.clientWidth
    const mainMoveSetWidth = e.offsetX
    const mainAudioDuration = MainPlayerAudio.duration
    MainPlayerAudio.currentTime = (mainMoveSetWidth / mainMoveAllWidth) * mainAudioDuration
    MainPlayerBar.style.width = `${mainMoveSetWidth}px`
    mainPause()
}
function mainMoveSet(){
    MainPlayerWrapper.addEventListener('mousemove', mainMoveSetUpdate);
}
function mainMoveRemove(){
    MainPlayerWrapper.removeEventListener("mousemove", mainMoveSetUpdate)
    mainPlay()
}
MainPlayerBar.addEventListener("mousedown", mainMoveSet)
MainPlayerWrapper.addEventListener("mouseup", mainMoveRemove)


// update progress bar with move in Mobile
function mainMoveSetUpdateMobile(e){
    const mainMoveAllWidthMobile = MainPlayerWrapper.clientWidth
    const mainMoveSetWidthMobile = e.touches[0].clientX - 80
    const mainAudioDuration = MainPlayerAudio.duration
    MainPlayerAudio.currentTime = (mainMoveSetWidthMobile / mainMoveAllWidthMobile) * mainAudioDuration
    MainPlayerBar.style.width = `${mainMoveSetWidthMobile}px`
}
function mainMoveSetMobile(e){
    MainPlayerWrapper.addEventListener('touchmove', mainMoveSetUpdateMobile);
}
function mainMoveRemoveMobile(){
    MainPlayerWrapper.removeEventListener("touchmove", mainMoveSetUpdateMobile)
}
MainPlayerBar.addEventListener("touchstart", mainMoveSetMobile)
MainPlayerWrapper.addEventListener("touchend", mainMoveRemoveMobile)