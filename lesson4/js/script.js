function toggleMenu() {
    document.getElementsByClassName("nav_bar")[0].classList.toggle("responsive");
  }

document.getElementById("updated").innerHTML = document.lastModified
document.getElementById("currentYear").textContent = new Date().getFullYear();