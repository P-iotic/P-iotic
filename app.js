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
        { name: 'Java', category: 'Programming' },
        { name: 'Python', category: 'Programming' },
        { name: 'C++', category: 'Programming' },
        { name: 'C#', category: 'Programming' },
        { name: 'HTML & CSS', category: 'Web Development' },
        { name: 'JavaScript', category: 'Web Development' },
        { name: 'React', category: 'Web Development' },
        { name: 'SQL', category: 'Databases' },
        { name: 'Penetration Testing', category: 'Cybersecurity' },
        { name: 'Secure Coding', category: 'Cybersecurity' },
        { name: 'Data Structures', category: 'Algorithms' },
        { name: 'Git & GitHub', category: 'Tools' }
    ];

    return (
        <div className="min-h-screen">
            {/* Scroll Bar */}
            <div id="scrollBar" className="fixed top-0 left-0 h-1 bg-green-400 transition-all duration-300 z-50"></div>

            {/* Navbar */}
            <nav className="bg-gray-800 p-4 sticky top-0 z-40 shadow-lg">
                <ul className="flex justify-center space-x-6">
                    <li><a href="#home" className="hover:text-green-400 transition-colors" aria-label="Go to Home">Home</a></li>
                    <li><a href="poetry.html" className="hover:text-green-400 transition-colors" aria-label="Go to Poetry">Poetry</a></li>
                    <li><a href="#projects" className="hover:text-green-400 transition-colors" aria-label="Go to Projects">Projects</a></li>
                    <li><a href="#about" className="hover:text-green-400 transition-colors" aria-label="Go to About">About</a></li>
                    <li><a href="mailto:youractualemail@example.com" className="hover:text-green-400 transition-colors" aria-label="Contact via Email">Contact</a></li>
                    <li><button onClick={toggleTheme} className="hover:text-green-400 transition-colors" aria-label="Toggle Theme">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button></li>
                </ul>
            </nav>

            {/* Header */}
            <header id="home" className="text-center py-16 bg-gray-800/80 mx-4 my-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold text-green-400">P-iotic</h1>
                <p className="text-xl mt-2">Final-Year BSc IT Student | Cybersecurity Enthusiast | Aspiring Developer</p>
            </header>

            {/* About */}
            <section id="about" className="max-w-4xl mx-auto my-8 p-6 bg-gray-800/80 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-green-400 mb-4 text-center">About Me</h2>
                <p className="text-lg">
                    I’m a final-year BSc IT student at North-West University, passionate about building secure, efficient software solutions. My expertise spans <span className="text-green-400">Java, Python, C++, C#</span>, and <span className="text-green-400">data structures</span>, with a keen interest in <span className="text-green-400">cybersecurity</span>—from penetration testing to secure coding. I also enjoy poetry as a creative outlet, blending technical precision with artistic expression. Explore my projects and skills below!
                </p>
            </section>

            {/* Skills */}
            <section id="skills" className="max-w-4xl mx-auto my-8 p-6 bg-gray-800/80 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-green-400 mb-4 text-center">Skills & Expertise</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {skills.map(skill => (
                        <div key={skill.name} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                            <h3 className="text-lg font-medium">{skill.name}</h3>
                            <p className="text-sm text-gray-400">{skill.category}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="max-w-4xl mx-auto my-8 p-6 bg-gray-800/80 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-green-400 mb-4 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        <h3 className="text-xl font-medium">Secure Chat Application</h3>
                        <p className="text-sm text-gray-400">Built a real-time chat app using Java and AES encryption to ensure secure communication.</p>
                        <a href="https://github.com/P-iotic/secure-chat" target="_blank" className="text-green-400 hover:underline">View on GitHub</a>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        <h3 className="text-xl font-medium">Penetration Testing Script</h3>
                        <p className="text-sm text-gray-400">Developed a Python script using Scapy to analyze network vulnerabilities.</p>
                        <a href="https://github.com/P-iotic/pen-test-script" target="_blank" className="text-green-400 hover:underline">View on GitHub</a>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        <h3 className="text-xl font-medium">Portfolio Website</h3>
                        <p className="text-sm text-gray-400">This site! Built with React, Tailwind CSS, and HTML, showcasing IT skills and poetry.</p>
                        <a href="https://github.com/P-iotic/portfolio" target="_blank" className="text-green-400 hover:underline">View on GitHub</a>
                    </div>
                </div>
                <p className="text-center mt-6">More projects coming soon! Follow my <a href="https://github.com/P-iotic" target="_blank" className="text-green-400 hover:underline">GitHub</a>.</p>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 bg-gray-800">
                <p>© 2025 P-iotic. All rights reserved.</p>
            </footer>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

// Scroll Bar Logic
window.onscroll = function () {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scrollBar').style.width = scrolled + '%';
};