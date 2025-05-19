const { useState, useEffect } = React;

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme === 'dark' ? 'bg-gray-900 text-gray-100 font-mono' : 'bg-gray-100 text-gray-900 font-mono';
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
            <nav className="bg-gray-800 p-4 sticky top-0 z-40 shadow-lg">
                <ul className="flex justify-center space-x-6">
                    <li><a href="#home" className="hover:text-green-500 transition-colors" aria-label="Go to Home">Home</a></li>
                    <li><a href="poetry.html" className="hover:text-green-500 transition-colors" aria-label="Go to Poetry">Poetry</a></li>
                    <li><a href="#projects" className="hover:text-green-500 transition-colors" aria-label="Go to Projects">Projects</a></li>
                    <li><a href="#about" className="hover:text-green-500 transition-colors" aria-label="Go to About">About</a></li>
                    <li><a href="#contact" className="hover:text-green-500 transition-colors" aria-label="Go to Contact">Contact</a></li>
                    <li><button onClick={toggleTheme} className="hover:text-green-500 transition-colors" aria-label="Toggle Theme">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button></li>
                </ul>
            </nav>
            <header id="home" className="text-center py-16 bg-gray-800/90 mx-4 my-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold text-green-500 animate-pulse">P-iotic</h1>
                <p className="text-xl mt-2">Final-Year BSc IT Student | Cybersecurity Enthusiast | Secure Software Developer</p>
            </header>
            <section id="about" className="max-w-4xl mx-auto my-8 p-6 bg-gray-800/90 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-green-500 mb-4 text-center">About Me</h2>
                <p className="text-lg">
                    I’m a final-year BSc IT student at North-West University, specializing in secure software development and cybersecurity. Proficient in <span className="text-green-500">Java, Python, C++, C#</span>, and <span className="text-green-500">data structures</span>, I build efficient, secure applications. My cybersecurity passion drives me to explore <span className="text-green-500">penetration testing</span> and <span className="text-green-500">cryptography</span>. Poetry is my creative outlet, reflecting my ability to blend technical precision with artistry. Check out my projects and <a href="poetry.html" className="text-green-500 hover:underline">poetry</a>!
                </p>
            </section>
            <section id="skills" className="max-w-4xl mx-auto my-8 p-6 bg-gray-800/90 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-green-500 mb-4 text-center">Skills & Expertise</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {skills.map(skill => (
                        <div key={skill.name} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors border-l-4 border-green-500">
                            <h3 className="text-lg font-medium">{skill.name}</h3>
                            <p className="text-sm text-gray-400">{skill.category}</p>
                            <p className="text-sm text-gray-300">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section id="projects" className="max-w-4xl mx-auto my-8 p-6 bg-gray-800/90 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-green-500 mb-4 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map(project => (
                        <div key={project.title} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors border-l-4 border-green-500">
                            <h3 className="text-xl font-medium">{project.title}</h3>
                            <p className="text-sm text-gray-400">{project.description}</p>
                            <p className="text-sm text-gray-300 mt-2">Technologies: {project.technologies.join(', ')}</p>
                            <a href={project.github} target="_blank" className="text-green-500 hover:underline mt-2 inline-block">View on GitHub</a>
                        </div>
                    ))}
                </div>
                <p className="text-center mt-6">More projects in progress! Follow my <a href="https://github.com/P-iotic" target="_blank" className="text-green-500 hover:underline">GitHub</a>.</p>
            </section>
            <section id="contact" className="max-w-4xl mx-auto my-8 p-6 bg-gray-800/90 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-green-500 mb-4 text-center">Get in Touch</h2>
                <form action="https://formspree.io/f/your-formspree-id" method="POST" className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">Name</label>
                        <input type="text" id="name" name="name" required className="w-full p-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input type="email" id="email" name="email" required className="w-full p-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium">Message</label>
                        <textarea id="message" name="message" rows="4" required className="w-full p-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
                    </div>
                    <button type="submit" className="w-full p-2 bg-green-500 text-gray-900 rounded-lg hover:bg-green-400 transition-colors">Send Message</button>
                </form>
            </section>
            <footer className="text-center py-6 bg-gray-800">
                <p>© 2025 P-iotic. All rights reserved.</p>
            </footer>
        </div>
    );
};

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

ReactDOM.render(<App />, document.getElementById('root'));

window.onscroll = function () {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scrollBar').style.width = scrolled + '%';
};