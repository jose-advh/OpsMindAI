// const contenedorMsj = document.getElementById("modelAnswer");
// const enviarPrompt = document.getElementById("enviarPrompt");
// const mensajeUsuario = document.getElementById("promptUsuario");

// enviarPrompt.addEventListener("click", () => {
//   let prompt = mensajeUsuario.value;
//   enviarMensaje(prompt);
// });

async function enviarMensaje(prompt) {
  try {
    const respuesta = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await respuesta.json();
    contenedorMsj.innerText = data.respuesta;
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
    contenedorMsj.innerText = "Ocurrió un error al conectar con la API.";
  }
}
