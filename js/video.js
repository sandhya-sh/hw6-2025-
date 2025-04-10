var video;

window.addEventListener("load", function() {
console.log("Good job opening the window")

// Initialize the video element and turn off autoplay and turn off looping.

video = document.querySelector("video");
video.autoplay = false;
video.loop = false;
video.load();
});

// Play the video and update the volume information.

document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
video.play();
document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Pause the video.
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

//Slow speed by 10% each time the button is clicked and log the new speed to the console.
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9;
	console.log("New speed:", video.playbackRate);
});

//speed up 10% and log the speed to the console.

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate /= 0.9;
	console.log("New speed:", video.playbackRate);
});

//Skip ahead 10 seconds and log the new time to the console and  If the video length has been exceeded go back to the start of the video - no farther.
document.querySelector("#skip").addEventListener("click", function () {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current time:", video.currentTime);
});

//Mute the video and change the button text to "Unmute"
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		this.innerHTML = "Mute";
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});

//Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("input", function () {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
});

//Utilize the existing oldSchool class on the video element
//Remove the oldSchool class from the video.
document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
});


