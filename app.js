const { useState, useEffect } = React;

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme === 'dark' ? 'bg-gray-900 text-gray-100 font-mono' : 'bg-gray-100 text-gray-900 font-mono';
        if (theme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const skills = [
        { name: 'Java', category: 'Programming', description: 'OOP, Spring, GUI apps' },
        { name: 'Python', category: 'Programming', description: 'Scripting, cybersecurity tools, ML' },
        { name: 'C++', category: 'Programming', description: 'Systems programming, algorithms' },
        { name: 'C#', category: 'Programming', description: '.NET, desktop apps' },
        { name: 'HTML & CSS', category: 'Web Development', description: 'Responsive design, Tailwind' },
        { name: 'JavaScript', category: 'Web Development', description: 'React, dynamic UIs' },
        { name: 'React', category: 'Web Development', description: 'Single-page applications' },
        { name: 'SQL', category: 'Databases', description: 'MySQL, PostgreSQL' },
        { name: 'Penetration Testing', category: 'Cybersecurity', description: 'Kali Linux, Metasploit' },
        { name: 'Secure Coding', category: 'Cybersecurity', description: 'Input validation, encryption' },
        { name: 'Data Structures', category: 'Algorithms', description: 'Trees, graphs, hash tables' },
        { name: 'Git & GitHub', category: 'Tools', description: 'Version control, CI/CD' }
    ];

    const projects = [
        {
            title: 'Secure Chat Application',
            description: 'A real-time chat app built with Java and AES-256 encryption to ensure secure communication over networks.',
            technologies: ['Java', 'Cryptography', 'Sockets'],
            github: 'https://github.com/P-iotic/secure-chat'
        },
        {
            title: 'Network Vulnerability Scanner',
            description: 'A Python script using Scapy and Nmap to identify network vulnerabilities and generate reports.',
            technologies: ['Python', 'Scapy', 'Nmap'],
            github: 'https://github.com/P-iotic/pen-test-script'
        },
        {
            title: 'Algorithm Visualizer',
            description: 'A C++ application visualizing sorting algorithms (e.g., quicksort, mergesort) with SFML for graphics.',
            technologies: ['C++', 'SFML', 'Data Structures'],
            github: 'https://github.com/P-iotic/algo-visualizer'
        },
        {
            title: 'Portfolio Website',
            description: 'This site, showcasing my IT skills and poetry hobby, built with React and Tailwind CSS.',
            technologies: ['React', 'Tailwind CSS', 'HTML'],
            github: 'https://github.com/P-iotic/portfolio'
        }
    ];

    return (
        <div className="min-h-screen">
            <div id="scrollBar" className="fixed top-0 left-0 h-1 bg-green-500 transition-all duration-300 z-50"></div>
            <nav className="navbar">
                <ul>
                    <li><a href="/" className="nav-link">Home</a></li>
                    <li><a href="/poetry.html" className="nav-link">Poetry</a></li>
                    <li><a href="/velaphi.html" className="nav-link">Velaphi</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                    <li><button onClick={toggleTheme} className="nav-button">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button></li>
                </ul>
            </nav>
            <header id="home" className="section">
                <h1 className="section-title animate-pulse">P-iotic</h1>
                <p className="section-subtitle">Final-Year BSc IT Student | Cybersecurity Enthusiast | Secure Software Developer</p>
            </header>
            <section id="about" className="section">
                <h2 className="section-title">About Me</h2>
                <p className="section-text">
                    I’m a final-year BSc IT student at North-West University, specializing in secure software development and cybersecurity. Proficient in <span className="text-green-500">Java, Python, C++, C#</span>, and <span className="text-green-500">data structures</span>, I build efficient, secure applications. My cybersecurity passion drives me to explore <span className="text-green-500">penetration testing</span> and <span className="text-green-500">cryptography</span>. Poetry is my creative outlet, reflecting my ability to blend technical precision with artistry. Check out my projects and <a href="/poetry.html" className="text-green-500 hover:underline">poetry</a>!
                </p>
            </section>
            <section id="skills" className="section">
                <h2 className="section-title">Skills & Expertise</h2>
                <div className="grid">
                    {skills.map(skill => (
                        <div key={skill.name} className="card">
                            <h3 className="card-title">{skill.name}</h3>
                            <p className="card-subtitle">{skill.category}</p>
                            <p className="card-text">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section id="projects" className="section">
                <h2 className="section-title">Projects</h2>
                <div className="grid">
                    {projects.map(project => (
                        <div key={project.title} className="card">
                            <h3 className="card-title">{project.title}</h3>
                            <p className="card-text">{project.description}</p>
                            <p className="card-subtitle">Technologies: {project.technologies.join(', ')}</p>
                            <a href={project.github} target="_blank" className="card-link">View on GitHub</a>
                        </div>
                    ))}
                </div>
                <p className="section-text text-center">More projects in progress! Follow my <a href="https://github.com/P-iotic" target="_blank" className="text-green-500 hover:underline">GitHub</a>.</p>
            </section>
            <section id="contact" className="section">
                <h2 className="section-title">Get in Touch</h2>
                <form action="https://formspree.io/f/your-formspree-id" method="POST" className="form">
                    <div>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name" name="name" required className="form-input" />
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" name="email" required className="form-input" />
                    </div>
                    <div>
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea id="message" name="message" rows="4" required className="form-input"></textarea>
                    </div>
                    <button type="submit" className="form-button">Send Message</button>
                </form>
            </section>
            <footer className="footer">
                <p>© 2025 P-iotic. All rights reserved.</p>
            </footer>
        </div>
    );
};

try {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
} catch (error) {
    console.error('Error rendering React app:', error);
    document.getElementById('root').innerHTML = '<p class="text-gray-100 text-center">Failed to load portfolio. Please try refreshing the page.</p>';
}

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

window.onscroll = function () {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scrollBar').style.width = scrolled + '%';
};