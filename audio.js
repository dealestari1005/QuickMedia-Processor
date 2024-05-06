function compressAudio() {
    const input = document.getElementById('audioInput');
    const file = input.files[0];
    const audio = document.getElementById('outputAudio');
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        audio.src = reader.result;
        audio.controls = true;
        const downloadLink = document.getElementById('downloadAudio');
        downloadLink.href = reader.result;
        downloadLink.style.display = 'inline-block';
    }
}
