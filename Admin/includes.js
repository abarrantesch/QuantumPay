document.addEventListener("DOMContentLoaded", function() {
  fetch("../header-footer/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
    })
    .catch(error => console.error("Error cargando header:", error));

  fetch("../header-footer/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch(error => console.error("Error cargando footer:", error));
});