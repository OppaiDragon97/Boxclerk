document.getElementById("menu").addEventListener("click", mostrarOcultarMenu);

function mostrarOcultarMenu() {
    let nav = document.getElementById("links");
  if (nav.style.display === "none") {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
}