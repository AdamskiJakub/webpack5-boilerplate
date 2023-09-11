const navigationButtons = document.querySelectorAll(".navbar-menu a");

navigationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navigationButtons.forEach((navButton) => {
      navButton.classList.remove("active");
    });

    button.classList.add("active");
  });
});
