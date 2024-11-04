// Get the button
const scrollUpBtn = document.getElementById("scrollup")

const DISTANCE = 350

// Show the button when scrolling down
window.onscroll = function () {
  if (
    document.body.scrollTop > DISTANCE ||
    document.documentElement.scrollTop > DISTANCE
  ) {
    scrollUpBtn.style.display = "block"
  } else {
    scrollUpBtn.style.display = "none"
  }
}

// Scroll to the top when the button is clicked
scrollUpBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" })
})

// Menu functions
document.getElementById("menu-on").addEventListener("click", () => {
  const mobileMenu = document.getElementsByClassName("mobile-menu")[0]
  mobileMenu.classList.add("m-on")
  mobileMenu.classList.remove("m-off")
})
document.getElementById("menu-off").addEventListener("click", () => {
  const mobileMenu = document.getElementsByClassName("mobile-menu")[0]
  mobileMenu.classList.add("m-off")
  mobileMenu.classList.remove("m-on")
})
