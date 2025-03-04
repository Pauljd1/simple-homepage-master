let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");
const logo = document.getElementById("logo");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
  logo.src = "resources/logo-dark.svg";

  moonIcon.style.display = "none";
  sunIcon.style.display = "block";
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", "inactive");
  logo.src = "resources/logo-light.svg";

  moonIcon.style.display = "block";
  sunIcon.style.display = "none";
};

// Apply saved mode on page load
if (darkmode === "active") {
  enableDarkmode();
} else {
  disableDarkmode();
}

// Toggle dark mode on button click
themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

//Hamburger menu

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
