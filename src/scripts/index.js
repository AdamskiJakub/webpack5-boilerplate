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
