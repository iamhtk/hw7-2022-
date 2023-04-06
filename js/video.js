var video = document.querySelector('video');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1');
	// Turns off the autoplay
	video.autoplay = false;
	console.log("Autoplay is set to " + video.autoplay);
	// Turns off the looping
	video.loop = false;
	console.log("Loop is set to " + video.loop);
});

// Plays the video playback
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Play Video");
});

// Pauses the video playback
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

// Makes the video playback slow
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.90;
	console.log("Speed is decreasing by " + video.playbackRate);
	// console.log("Slow Down Video");
	// video.playbackRate = 0.5;
});

// Makes the video playback fast
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.90;
	console.log("Speed is increasing by  " + video.playbackRate);
});

// Skips the video playback by 10 seconds on each click
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	console.log("Current time is " + video.currentTime);
	if (video.currentTime >= video.duration)
		video.currentTime = 0;
	console.log("Current time is " + video.currentTime);
	});

// Mutes the video playback volume
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		video.muted = false;
		console.log("Unmutes the video volume");
		// Change the text to Mute
		this.innerHTML = "Mute"
	}
	else {
		video.muted = true;
		console.log("Mutes the video volume");
		// Change the text to Unmute
		this.innerHTML = "Unmute"
	}
});

// Volume Slider
document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100;
	console.log("Changes the volume through the slider");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Vintage Look
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// Original Look
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});


