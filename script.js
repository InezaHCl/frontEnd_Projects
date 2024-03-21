"scrict";

const sideBarContainer = document.querySelector("#side-bar");
const menuBtn = document.querySelector(".bars-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();

  sideBarContainer.classList.remove("d-none");
  menuBtn.classList.add("d-none");

  closeBtn.classList.remove("d-none");
  closeBtn.classList.add("d-lx-none");
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closeBtn.classList.remove("d-lx-none");
  closeBtn.classList.add("d-none");

  menuBtn.classList.remove("d-none");
  sideBarContainer.classList.add("d-none");
});
