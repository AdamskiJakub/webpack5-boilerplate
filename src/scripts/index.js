import "../styles/main.scss";
import logoImg from "../assets/logo.png";
import mobileZoniferoLogo from "../assets/zonifero_logo.png";
import globe from "../assets/globe.png";
import hand from "../assets/hand.png";
import apple from "../assets/apple_store_badge.png";
import play from "../assets/google_store_badge.png";
import problemsolving from "../assets/mob_roblem_solving.png";

// Rozwijana lista do zmiany języka na ikonce Globe
const dropdownToggle = document.getElementById("dropdown-toggle");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownToggle.addEventListener("click", () => {
  console.log("clicked: ");

  const isDropdownVisible = dropdownContent.style.display === "block";

  if (isDropdownVisible) {
    dropdownContent.style.display = "none";
    document.querySelector(".arrow-down").style.display = "inline-block";
    document.querySelector(".arrow-up").style.display = "none";
  } else {
    dropdownContent.style.display = "block";
    document.querySelector(".arrow-down").style.display = "none";
    document.querySelector(".arrow-up").style.display = "inline-block";
  }
});

// Slider

const slider = document.querySelector(".slider");
const prevSlideButton = document.querySelector(".prev-slide");
const nextSlideButton = document.querySelector(".next-slide");

let currentSlide = 0;

prevSlideButton.addEventListener("click", () => {
  console.log("current cos tam:", currentSlide);
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = slider.children.length - 1;
  }
  updateSlider();
});

nextSlideButton.addEventListener("click", () => {
  console.log("currentSlide:", currentSlide);
  if (currentSlide < slider.children.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
