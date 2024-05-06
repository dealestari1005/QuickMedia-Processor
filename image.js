function resizeImage() {
    const input = document.getElementById('imageInput');
    const file = input.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        const img = new Image();
        img.src = reader.result;
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const maxWidth = 300;
            const maxHeight = 300;
            let width = img.width;
            let height = img.height;
            if (width > height) {
                if (width > maxWidth) {
                    height *= maxWidth / width;
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width *= maxHeight / height;
                    height = maxHeight;
                }
            }
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            document.getElementById('outputImage').src = canvas.toDataURL('image/jpeg');
            document.getElementById('downloadImage').href = canvas.toDataURL('image/jpeg');
        }
    }
}
