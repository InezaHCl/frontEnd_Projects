"scrict";

const sectionHeroEl = document.querySelector("#home");
const movToHomeBtn = document.querySelector(".btnUp-btn");

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
