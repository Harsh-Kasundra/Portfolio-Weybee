const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (pageYOffset >= top) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

links.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('show');
    }
  });
});



  document.querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  });