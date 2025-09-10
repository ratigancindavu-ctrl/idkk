// Smooth scroll to sections with navbar offset
function scrollToSection(id) {
  const element = document.getElementById(id);
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - navbarHeight - 10;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });

  // Update active filter button if inside models
  const buttons = document.querySelectorAll(".filter-buttons button");
  buttons.forEach(btn => btn.classList.remove("active"));
  const clickedButton = Array.from(buttons).find(btn => btn.getAttribute("onclick").includes(id));
  if (clickedButton) clickedButton.classList.add("active");
}
