"scrict";

const sectionHeroEl = document.querySelector("#home");
const movToHomeBtn = document.querySelector(".btnUp-btn");
const bsOffcanvas = new bootstrap.Offcanvas("#offcanvasResponsive");

// MoveTo Home-Section Button
const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    // console.log(entry);

    if (entry.isIntersecting === true) {
      movToHomeBtn.classList.add("d-none");
    }
    if (entry.isIntersecting === false) {
      movToHomeBtn.classList.remove("d-none");
    }
  },
  {
    root: null,
    threshold: 0.8,
  }
);

obs.observe(sectionHeroEl);

// Smooth scrolling for nav links
document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });

    // Close offcanvas when link is clicked
    bsOffcanvas.hide();
  }
});
