let video = document.querySelector(".video");
let slider = document.querySelector("#slider");

document.querySelector("#play").addEventListener("click", function(){
    console.log("Play Video");
    video.play();
});

document.querySelector("#pause").addEventListener("click", function(){
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
    console.log("Slowing Down");
    console.log("Old rate: " + video.playbackRate);
	video.playbackRate -= .1;
	console.log("New rate: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
    console.log("Speeding Up");
    console.log("Old rate: " + video.playbackRate);
	video.playbackRate += .1;
	console.log("New rate: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
    console.log("Skipping 10s");
    console.log("Duration: " + video.duration);
	console.log("Current location: " + video.currentTime);
	if(video.currentTime + 10 >= video.duration){
		video.currentTime = (video.currentTime + 10) - video.duration;
	}
	else{
		video.currentTime += 10;
	}
	console.log("New location: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
    console.log("Toggling Mute");
    video.muted = !video.muted;
    if (video.muted){this.innerHTML = "Unmute";}
    else {
        this.innerHTML = "Mute";
    }
});

slider.addEventListener("change", function(){
    vol = slider.value;
    console.log("Volume changed to " + vol + "%");
    video.volume = vol/100;
    document.querySelector("#volume").innerHTML = slider.value + "%";
});

window.addEventListener("load", function(){
    document.querySelector("#volume").innerHTML = slider.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
    video.classList.toggle("oldSchool");
});