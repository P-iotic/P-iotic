document.addEventListener('DOMContentLoaded', () => {
    // Scroll Bar Functionality
    window.onscroll = function () {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('scrollBar').style.width = scrolled + '%';
    };

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
});