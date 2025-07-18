import "dotenv/config";

const modelUrl = "https://openrouter.ai/api/v1/chat/completions";
const modelKey = process.env.api_key;
const modelName = "deepseek/deepseek-r1-0528-qwen3-8b:free";

export async function enviarPrompt(prompt) {
  try {
    const respuesta = await fetch(modelUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${modelKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5500/",
        "X-Title": "OpsMind - AI",
      },
      body: JSON.stringify({
        model: modelName,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!respuesta.ok)
      throw new Error(`Error al consultar: ${respuesta.status}`);

    const respuestaModelo = await respuesta.json();
    return respuestaModelo.choices[0].message.content;
  } catch (error) {
    console.error("Algo ha ido mal", error);
  }
}
