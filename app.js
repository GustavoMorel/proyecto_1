/*4. SLIDER SECCION LO QUE HAGO - "What I Do"*/
// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {
  
  // Selecciona el elemento del slider
  const slider = document.querySelector('.slider');
  
  // Inicializa el índice actual en 0
  let currentIndex = 0;

  // Función para actualizar la posición del slider
  function showSlides() {
    // Aplica una transformación al slider para cambiar su posición
    slider.style.transform = `translateX(${-currentIndex * 33.33}%)`;
    // Oculta el botón "Siguiente" cuando se llega al final del slider
    document.querySelector('.next').style.display = currentIndex < 3 ? 'block' : 'none';

    // Oculta el botón "Anterior" cuando se está en la primera posición del slider
    document.querySelector('.prev').style.display = currentIndex > 0 ? 'block' : 'none'
  }

  // Añade un evento de clic al botón "Siguiente"
  document.querySelector('.next').addEventListener('click', function () {
    // Verifica si el índice actual es menor que 3 (último conjunto de 3 elementos)
    if (currentIndex < 3) {
      // Incrementa el índice actual
      currentIndex++;
    }
    // Actualiza la posición del slider
    showSlides();
  });

  // Añade un evento de clic al botón "Anterior"
  document.querySelector('.prev').addEventListener('click', function () {
    // Verifica si el índice actual es mayor que 0 (no está en el primer conjunto)
    if (currentIndex > 0) {
      // Decrementa el índice actual
      currentIndex--;
    }
    // Actualiza la posición del slider
    showSlides();
  });
});