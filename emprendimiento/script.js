// script.js
// Muestra resultado inmediato y motivacional en test_emprendimiento.html

document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('btn-submit');
  if (!submitBtn) return;

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Evita envío del formulario

    const form = document.getElementById('form-test');
    const formData = new FormData(form);
    let total = 0;
    let count = 0;

    for (const [key, value] of formData.entries()) {
      const score = parseInt(value, 10);
      if (!isNaN(score)) {
        total += score;
        count++;
      }
    }

    let message = '';
    if (count < 4) {
      message = 'Seleccione todas las casillas';
    } else {
      const avg = total / count;

      if (avg >= 4.5) {
        message = '¡Impresionante! Tienes un espíritu emprendedor fuerte y decidido. Estás listo para avanzar con confianza.';
      } else if (avg >= 3.5) {
        message = '¡Muy bien! Tienes una base sólida. Con enfoque y acción puedes lograr grandes cosas.';
      } else if (avg >= 2.5) {
        message = 'Tu motivación es importante. Sigue aprendiendo y rodeándote de inspiración para fortalecer tu camino emprendedor.';
      } else {
        message = 'Sigue explorando tus intereses. Cada paso cuenta hacia una mentalidad emprendedora.';
      }
    }

    let resultDiv = document.getElementById('resultado');
    if (!resultDiv) {
      resultDiv = document.createElement('div');
      resultDiv.id = 'resultado';
      resultDiv.style.marginTop = '1.5rem';
      resultDiv.style.padding = '1rem';
      resultDiv.style.border = '1px solid #ccc';
      resultDiv.style.borderRadius = '0.5rem';
      resultDiv.style.backgroundColor = '#f9f9f9';
      form.appendChild(resultDiv);
    }

    resultDiv.textContent = message;
  });
});
