const menuIcon = document.getElementById("menu-icon");
const navigation = document.querySelector(".navigation");

menuIcon.addEventListener("click", () => {
  navigation.classList.toggle("active");
  menuIcon.style.zIndex = 100;
});
