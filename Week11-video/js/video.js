let video = document.querySelector(".video");

function play(){
	console.log("In play");
	video.play();
}

function pause(){
	console.log("In pause");
	video.pause();
}

function faster(){
	console.log("Speeding up");
	console.log("Old rate: " + video.playbackRate);
	video.playbackRate += .1;
	console.log("New rate: " + video.playbackRate);
}

function slower(){
	console.log("Slowing down");
	console.log("Old rate: " + video.playbackRate);
	video.playbackRate -= .1;
	console.log("New rate: " + video.playbackRate);
}

function skip(){
	console.log("Skipping ahead");
	console.log("Duration: " + video.duration);
	console.log("Current location: " + video.currentTime);
	if(video.currentTime + 10 >= video.duration){
		video.currentTime = (video.currentTime + 10) - video.duration;
	}
	else{
		video.currentTime += 10;
	}
	console.log("New location: " + video.currentTime);

}