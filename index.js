document.addEventListener('DOMContentLoaded', () => {
  // Particles.js
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: ['#10b981', '#cccccc'] },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: '#10b981', opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: 'none', random: true, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
      modes: { grab: { distance: 200, line_linked: { opacity: 0.7 } }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  });

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
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
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

  // Skills Data
  const skills = [
    { name: 'Java', category: 'Programming', description: 'OOP, Spring, GUI apps' },
    { name: 'Python', category: 'Programming', description: 'Scripting, cybersecurity tools, ML' },
    { name: 'C++', category: 'Programming', description: 'Systems programming, algorithms' },
    { name: 'C#', category: 'Programming', description: '.NET, desktop apps' },
    { name: 'HTML & CSS', category: 'Web Development', description: 'Responsive design' },
    { name: 'JavaScript', category: 'Web Development', description: 'Dynamic UIs' },
    { name: 'SQL', category: 'Databases', description: 'MySQL, PostgreSQL' },
    { name: 'Penetration Testing', category: 'Cybersecurity', description: 'Kali Linux, Metasploit' },
    { name: 'Secure Coding', category: 'Cybersecurity', description: 'Input validation, encryption' },
    { name: 'Data Structures', category: 'Algorithms', description: 'Trees, graphs, hash tables' },
    { name: 'Git & GitHub', category: 'Tools', description: 'Version control, CI/CD' }
  ];

  // Populate Skills
  const skillsGrid = document.getElementById('skills-grid');
  skills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3 class="card-title">${skill.name}</h3>
      <p class="card-subtitle">${skill.category}</p>
      <p class="card-text">${skill.description}</p>
    `;
    skillsGrid.appendChild(card);
  });

  // Projects Data
  const projects = [
    {
      title: 'Secure Chat Application',
      description: 'A real-time chat app built with Java and AES-256 encryption.',
      technologies: ['Java', 'Cryptography', 'Sockets'],
      github: 'https://github.com/P-iotic/secure-chat'
    },
    {
      title: 'Network Vulnerability Scanner',
      description: 'A Python script using Scapy and Nmap to identify network vulnerabilities.',
      technologies: ['Python', 'Scapy', 'Nmap'],
      github: 'https://github.com/P-iotic/pen-test-script'
    },
    {
      title: 'Algorithm Visualizer',
      description: 'A C++ app visualizing sorting algorithms with SFML.',
      technologies: ['C++', 'SFML', 'Data Structures'],
      github: 'https://github.com/P-iotic/algo-visualizer'
    },
    {
      title: 'Portfolio Website',
      description: 'This site, showcasing my IT skills and poetry hobby.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/P-iotic/portfolio'
    }
  ];

  // Populate Projects
  const projectsGrid = document.getElementById('projects-grid');
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3 class="card-title">${project.title}</h3>
      <p class="card-text">${project.description}</p>
      <p class="card-subtitle">Technologies: ${project.technologies.join(', ')}</p>
      <a href="${project.github}" target="_blank" class="card-link">View on GitHub</a>
    `;
    projectsGrid.appendChild(card);
  });
});