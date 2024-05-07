function compressAudio() {
    console.log("Compressing audio...");
    var audioInput = document.getElementById("audioInput");
    var audioFile = audioInput.files[0];
    var audioURL = URL.createObjectURL(audioFile);
    var outputAudio = document.getElementById("outputAudio");
    outputAudio.src = audioURL;
}

function speedUpAudio() {
    console.log("Speeding up audio...");
    var outputAudio = document.getElementById("outputAudio");
    outputAudio.playbackRate += 0.25;
}

function slowDownAudio() {
    console.log("Slowing down audio...");
    var outputAudio = document.getElementById("outputAudio");
    if (outputAudio.playbackRate >= 0.5) {
        outputAudio.playbackRate -= 0.25;
    }
}

function downloadAudio() {
    console.log("Downloading audio...");
    var outputAudio = document.getElementById("outputAudio");
    var downloadLink = document.getElementById("downloadAudio");
    var audioSource = outputAudio.src;
    downloadLink.href = audioSource;
}

document.getElementById("audioInput").addEventListener("change", compressAudio);

document.getElementById("downloadAudio").addEventListener("click", downloadAudio);
