// --------------------------------
// Typewriter Effect
// --------------------------------
const words = [
    "Web Developer",
    "Python Programmer",
    "Robotics Enthusiast",
    "CS50 Student",
    "Cybersecurity Learner"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
    let currentWord = words[wordIndex];

    if (!deleting) {
        typewriter.textContent = currentWord.slice(0, letterIndex++);
        if (letterIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typewriter.textContent = currentWord.slice(0, letterIndex--);
        if (letterIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


// --------------------------------
// Skills Animation
// --------------------------------
function animateSkills() {
    document.getElementById("htmlBar").style.width = "92%";
    document.getElementById("cssBar").style.width = "85%";
    document.getElementById("jsBar").style.width = "78%";
    document.getElementById("pyBar").style.width = "80%";
    document.getElementById("sqlBar").style.width = "70%";
    document.getElementById("bootBar").style.width = "88%";
}

window.addEventListener("scroll", () => {
    const skills = document.getElementById("skills");
    const pos = skills.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (pos < screen - 150) animateSkills();
});


// --------------------------------
// Floating Particle Background
// --------------------------------
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
