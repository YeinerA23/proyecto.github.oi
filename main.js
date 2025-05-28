// PRIMERA PARTE


document.addEventListener("DOMContentLoaded", function () {
  const frases = [
      "EQUILIBRIO ",
      "CUIDADO ",
      "BIENESTAR ",
      "EVOLUCIÓN ",
  ];

  const fraseElemento = document.getElementById("fr");
  let indiceActual = 0;

  function cambiarFrase() {
      fraseElemento.style.opacity = 0;

      setTimeout(() => {
          fraseElemento.innerText = frases[indiceActual];
          fraseElemento.style.opacity = 1;

          indiceActual = (indiceActual + 1) % frases.length;
      }, 1000);
  }

  setInterval(cambiarFrase, 3000); // ✅ dentro del bloque
});

// CUARTA PARTE


document.addEventListener("DOMContentLoaded", function () {
  const frases = [
      "La paz comienza con una sonrisa.",
      "Hoy es un buen día para empezar de nuevo.",
      "Cada día es una nueva oportunidad.",
      "Confía en ti mismo y todo será posible.",
      "No puedes detener las olas, pero puedes aprender a surfear.",
      "Respira, todo estará bien.",
      "Eres más fuerte de lo que crees.",
      "Nunca es tarde para ser quien quieres ser.",
      "Haz lo que puedas, con lo que tengas, donde estés.",
      "Sonríe, porque la vida es bella."
  ];

  const fraseElemento = document.getElementById("frase");

  function cambiarFrase() {
      let indiceAleatorio = Math.floor(Math.random() * frases.length);
      fraseElemento.style.opacity = 0; // Efecto de desvanecimiento
      setTimeout(() => {
          fraseElemento.innerText = frases[indiceAleatorio];
          fraseElemento.style.opacity = 1; // Vuelve a aparecer
      }, 1000);
  }

  // Cambia la frase cada 5 segundos
  setInterval(cambiarFrase, 5000);
});

// QUINTA PARTE

const frases = document.getElementById('frases-motivacionales');
const audio = document.getElementById('audio-relajante');

frases.addEventListener('mouseenter', () => {
  audio.currentTime = 0; // Reinicia desde el principio
  audio.play();
});

frases.addEventListener('mouseleave', () => {
  audio.pause();         // Pausa el sonido cuando el mouse sale
  audio.currentTime = 0;  // Reinicia para la próxima vez
});



// text PARTE


  function calcularResultado() {
  let total = 0;

  for (let i = 1; i <= 10; i++) {
    const radios = document.getElementsByName("p" + i);
    let valorSeleccionado = false;

    for (let radio of radios) {
      if (radio.checked) {
        total += parseInt(radio.value);
        valorSeleccionado = true;
        break;
      }
    }

    if (!valorSeleccionado) {
      document.getElementById("resultado").innerHTML = "<p style='color: yellow;'>⚠️ Por favor responde todas las preguntas.</p>";
      return;
    }
  }

  let mensaje = "";
  let chatbotLink = `<br><br><a href='https://tuchatbot.com' target='_blank' class='chatbot-link'>Habla con nuestro chatbot de apoyo emocional 💬</a>`;

  if (total <= 15) {
    mensaje = "✅ Excelente manejo del estrés. Continúa así con tus hábitos saludables.";
  } else if (total <= 22) {
    mensaje = "⚠️ Tu manejo del estrés es moderado. Sería útil incorporar actividades como meditación, ejercicio regular o escribir un diario emocional.";
  } else {
    mensaje = `
      ❌ Alto nivel de estrés detectado.<br>
      👉 Te recomendamos tomar pausas activas, hablar con alguien de confianza, y si es posible, consultar con un profesional de salud mental.
      ${chatbotLink}
    `;
  }

  document.getElementById("resultado").innerHTML = mensaje;
}






  //sectima parte

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir envío tradicional
  
    // Obtener los valores
    const nombre = document.querySelector('input[placeholder="Nombre (*)"]').value;
    const telefono = document.querySelector('input[placeholder="Teléfono (*)"]').value;
    const email = document.querySelector('input[placeholder="Email (*)"]').value;
    const mensaje = document.querySelector("textarea").value;
  
    // Armar el texto para enviar por WhatsApp
    const texto = `Hola, me gustaría consultar:\n\n*Nombre:* ${nombre}\n*Teléfono:* ${telefono}\n*Email:* ${email}\n*Mensaje:* ${mensaje}`;
  
    // Número de WhatsApp (sin + ni guiones)
    const numero = "573122442181";
  
    // Armar la URL
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  
    // Redirigir
    window.open(url, "_blank");
  });
  