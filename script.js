function resizeImage() {
    const input = document.getElementById('imageInput');
    const output = document.getElementById('outputImage');
    const downloadButton = document.getElementById('downloadImage');

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;

        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 200; // Ubah sesuai kebutuhan ukuran yang diinginkan
            canvas.height = (canvas.width / img.width) * img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            output.src = canvas.toDataURL('image/jpeg');
            downloadButton.href = canvas.toDataURL('image/jpeg');
        }
    }

    reader.readAsDataURL(file);
}

function compressAudio() {
    const input = document.getElementById('audioInput');
    const output = document.getElementById('outputAudio');
    const downloadButton = document.getElementById('downloadAudio');

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const audio = new Audio();
        audio.src = e.target.result;
        audio.controls = true;
        output.src = audio.src;
        downloadButton.href = audio.src;
    }

    reader.readAsDataURL(file);
}
