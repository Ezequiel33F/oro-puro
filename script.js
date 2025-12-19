// ==== CONSTANTES ====
const btn = document.getElementById("btnVideo");
const video = document.getElementById("videoContainer");
const form = document.getElementById("contact-form");
const resultado = document.getElementById("resultado");

// ==== EVENTOS ====
btn.addEventListener("click", () => {
  video.classList.toggle("oculto");

  if (video.classList.contains("oculto")) {
    btn.textContent = "Ver video nivel D10S";
  } else {
    btn.textContent = "Ocultar video";
  }
});

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  resultado.innerText = "Enviando...";

  const formData = {
    nombre: form.nombre.value,
    email: form.email.value,
    mensaje: form.mensaje.value
  };

  try {
    const response = await fetch("/.netlify/functions/sendMail", {
      method: "POST",
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      resultado.innerText = "Mensaje enviado correctamente ✅";
      form.reset();
    } else {
      resultado.innerText = "Error al enviar 😢";
    }
  } catch (error) {
    resultado.innerText = "Error de conexión";
  }
});
