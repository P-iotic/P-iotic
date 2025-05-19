document.addEventListener('DOMContentLoaded', () => {
  // Matrix Animation
  const canvas = document.getElementById('matrix');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const chars = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(18, 18, 18, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#10b981';
      ctx.font = `${fontSize}px Source Code Pro`;
      drops.forEach((y, i) => {
        const text = chars.charAt(Math.random() * chars.length);
        ctx.fillText(text, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    }
    setInterval(draw, 33);
  }

  // Scroll Bar
  window.onscroll = function () {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scrollBar').style.width = scrolled + '%';
  };

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