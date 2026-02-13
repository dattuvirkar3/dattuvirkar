// Scroll Reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Animate Skill Bars
window.addEventListener("scroll", function () {
  const skills = document.querySelectorAll(".progress span");
  skills.forEach(skill => {
    const position = skill.getBoundingClientRect().top;
    if (position < window.innerHeight - 50) {
      skill.style.width = skill.style.width;
    }
  });
});
