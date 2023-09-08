import "../styles/main.scss";
import logoImg from "../assets/logo.png";
import mobileZoniferoLogo from "../assets/zonifero_logo.png";
import globe from "../assets/globe.png";
import hand from "../assets/hand.png";
import apple from "../assets/apple_store_badge.png";
import play from "../assets/google_store_badge.png";
import problemsolving from "../assets/mob_roblem_solving.png";
import layer from "../assets/Layer_78.png";
import silver from "../assets/silver.png";
import mob from "../assets/mob_mobile.png";
import space from "../assets/Space_gray.png";
import Big from "../assets/Layer_59.png";
import partner1 from "../assets/logo_nsg.png";
import microsoft from "../assets/Layer_504.png";
import devices from "../assets/mob_devices_copy.png";
import printer from "../assets/printer.png";
import uchwyt from "../assets/uchwyt.png";
import starter from "../assets/Lobby_Starter_Kit.png";

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
let canClickNext = true;

prevSlideButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
    canClickNext = true;
    updateButtons();
  }
});

nextSlideButton.addEventListener("click", () => {
  if (canClickNext && currentSlide < slider.children.length - 1) {
    currentSlide++;
    updateSlider();
    canClickNext = false;
    updateButtons();
  }
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function updateButtons() {
  if (currentSlide === 0) {
    prevSlideButton.disabled = true;
  } else {
    prevSlideButton.disabled = false;
  }

  if (currentSlide === slider.children.length - 1 || !canClickNext) {
    nextSlideButton.disabled = true;
  } else {
    nextSlideButton.disabled = false;
  }
}

updateButtons();
