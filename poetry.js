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
            img.dataset.index = index; // Store index for navigation
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });

        // Accessibility: Allow keyboard activation
        image.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                image.click();
            }
        });
    });

    // Close lightbox on click
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightbox.querySelector('img')) {
            lightbox.classList.remove('active');
        }
    });

    // Keyboard navigation
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

    // Theme Toggle with Local Storage
    const toggleTheme = () => {
        document.body.classList.toggle('light-mode');
        const isLightMode = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    };

    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }

    // Expose toggleTheme to global scope for button
    window.toggleTheme = toggleTheme;

    // Error handling for missing images
    images.forEach(image => {
        image.addEventListener('error', () => {
            image.src = 'poetry/fallback.png'; // Fallback image
            image.alt = 'Failed to load poem image';
        });
    });
});