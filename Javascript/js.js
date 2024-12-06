function heiNavn() {
  let navn = prompt("Hva heter du?");
  alert("Hei " + navn + " håper du liker nettsiden min!");
}


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
      dropdown.addEventListener('click', function () {
          const content = this.querySelector('.dropdown-content');
          content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
  });

  // Close dropdowns when clicking outside
  window.addEventListener('click', function (e) {
      if (!e.target.matches('.dropbtn')) {
          document.querySelectorAll('.dropdown-content').forEach(dropdown => {
              dropdown.style.display = 'none';
          });
      }
  });
});