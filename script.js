const toggleNavbar = () => {
  let navBar = document.getElementById("nav-links");
  navBar.classList.toggle("hideNavbar");
};

const handleGoToBottom = () => {
  window.location.href = "/#copyright";
};

const handleGoToTop = () => {
  window.location.href = "/#nav-links";
};
