document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('form');
    formulario.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = 'index.html'; 
    });
  });