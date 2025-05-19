document.addEventListener('DOMContentLoaded', () => {
    // Lightbox Setup
    const images = document.querySelectorAll('.poem-image');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.dataset.index = index;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });

        image.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                image.click();
            }
        });
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightbox.querySelector('img')) {
            lightbox.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            const currentImg = lightbox.querySelector('img');
            let currentIndex = parseInt(currentImg.dataset.index);

            if (e.key === 'Escape') {
                lightbox.classList.remove('active');
            } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
                currentIndex++;
                currentImg.src = images[currentIndex].src;
                currentImg.alt = images[currentIndex].alt;
                currentImg.dataset.index = currentIndex;
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                currentIndex--;
                currentImg.src = images[currentIndex].src;
                currentImg.alt = images[currentIndex].alt;
                currentImg.dataset.index = currentIndex;
            }
        }
    });

    // Error handling for missing images
    images.forEach(image => {
        image.addEventListener('error', () => {
            image.src = '/poetry/fallback.png';
            image.alt = 'Failed to load poem image';
        });
    });
});