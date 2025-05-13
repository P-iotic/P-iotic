document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 65 },
        { name: "Python", level: 70 },
        { name: "Git & GitHub", level: 80 },
    ];

    const section = document.getElementById('skills');

    skills.forEach(skill => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${skill.name}</p>
            <div class="progress-container">
                <div class="progress-bar" style="width: ${skill.level}%">${skill.level}%</div>
            </div>
        `;
        section.appendChild(div);
    });
});
