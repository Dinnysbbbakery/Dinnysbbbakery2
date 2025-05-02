const myVideo=document.querySelector("#my-video");
console.log(myVideo);

const play=document.querySelector("#play");
console.log(play);

// This button helps the user to play and pause the video, the button img will change depends on the statue of the video
play.addEventListener("click", toggleVideo);

const playImg=document.querySelector("#play-img");
console.log(playImg);

function toggleVideo(){
    if(myVideo.paused || myVideo.ended){
        playImg.src="https://img.icons8.com/ios-glyphs/30/play--v2.png";
        myVideo.play();
    }else{
        playImg.src="https://img.icons8.com/ios-glyphs/30/play--v2.png";
        myVideo.pause();
    }
}

// The mute button helps the user to mute or unmute the video, the two staues varies from the colour
const mute=document.querySelector("#mute");

mute.addEventListener("click", toggleSound);

function toggleSound(){
    if(myVideo.muted){
        myVideo.muted=false;
        mute.style.backgroundColor="EFEFEF";
    }else{
        myVideo.muted=true;
        mute.style.backgroundColor="#730217";
    }
}

// The progress bar helps the user to see where they are at in the video, with the choice of blue colour
myVideo.addEventListener("timeupdate", undateProgressBar);

const progressBarFill=document.querySelector("#progress-bar-fill");
console.log(progressBarFill);

function undateProgressBar()
{
    const progress=(myVideo.currentTime / myVideo.duration) *100;
    console.log(progress);
    progressBarFill.style.width=progress+"%";
}

// The volume down button is used for decrease the volume of the video
const volumeDown=document.querySelector("#volumedown");
console.log(volumeDown);

volumeDown.addEventListener("click", decreaseVolume);

function decreaseVolume()
{
    if(myVideo.volume >0.11){
        myVideo.volume -=0.1;
    }
}

// The volume up button is used for increase the volume of the video
const volumeUp=document.querySelector("#volumeup");
console.log(volumeUp);

volumeUp.addEventListener("click", increaseVolume);

function increaseVolume()
{
    if(myVideo.volume <0.9){
        myVideo.volume +=0.1;
    }
}

// Ths button is for full-screen, incase the user didn't know double click to full screen
myVideo.addEventListener("doubleclick", goFullscreen);

const fullscreen=document.querySelector("#fullscreen");
console.log(fullscreen);

fullscreen.addEventListener("click", goFullscreen);

function goFullscreen(){
    if(!document.fullscreenElement){
        myVideo.requestFullscreen();
    }else{
        document.exitFullscreen();
    }
}

// The steps buttons are for users to quickly jump to the step they are currently at or want to rewatch, 
// so they don't have to spend time to find it
const step1=document.querySelector("#step1");
console.log(step1);
step1.addEventListener("click", gotoStep1);

function gotoStep1(){
    myVideo.currentTime=31.0;
}

const step2=document.querySelector("#step2");
console.log(step2);
step2.addEventListener("click", gotoStep2);

function gotoStep2(){
    myVideo.currentTime=62.0;
}

const step3=document.querySelector("#step3");
console.log(step3);
step3.addEventListener("click", gotoStep3);

function gotoStep3(){
    myVideo.currentTime=128.0;
}

const step4=document.querySelector("#step4");
console.log(step4);
step4.addEventListener("click", gotoStep4);

function gotoStep4(){
    myVideo.currentTime=157.0;
}