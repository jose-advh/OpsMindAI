import "dotenv/config";
import fs from "fs/promises";

const modelUrl = "https://openrouter.ai/api/v1/chat/completions";
const modelKey = process.env.api_key;
const modelName = "deepseek/deepseek-r1-0528-qwen3-8b:free";

const TIMEOUT_MS = 60000;

function fetchConTimeout(resource, options = {}) {
  const { timeout = TIMEOUT_MS } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  return fetch(resource, {
    ...options,
    signal: controller.signal,
  }).finally(() => clearTimeout(id));
}

async function enviarSeccion(seccionNombre, seccionContenido, resumenAnterior) {
  const prompt = `
Eres un sistema de análisis financiero avanzado. Estás analizando una única empresa, cuyas diferentes secciones te serán entregadas en orden.

${
  resumenAnterior
    ? `Resumen acumulado anterior:\n${resumenAnterior}\n`
    : "Este es el primer lote del análisis."
}

Tu tarea:
1. Analiza la sección actual: "${seccionNombre}".
2. Extrae los puntos clave y conclusiones relevantes.
3. Relaciona esta sección con cualquier contexto previo si lo hay.
4. Devuelve un resumen estructurado para ser usado en el siguiente paso.

Responde solo en este formato JSON:
{
  "resumen_acumulado": "...",
  "puntos_clave": [
    "...",
    "...",
    "..."
  ]
}

Contenido de la sección "${seccionNombre}":
${JSON.stringify(seccionContenido)}
`;

  const respuesta = await fetchConTimeout(modelUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${modelKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost:5500/",
      "X-Title": "OpsMind - Empresa Única",
    },
    body: JSON.stringify({
      model: modelName,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const json = await respuesta.json();

  if (!respuesta.ok || !json.choices || !json.choices[0]) {
    console.error("Respuesta inesperada:", JSON.stringify(json, null, 2));
    throw new Error("Respuesta del modelo inválida.");
  }

  return json.choices[0].message.content;
}

export async function analizarEmpresaPorSecciones() {
  try {
    const rawData = await fs.readFile(
      "C:/Users/JOSE/Desktop/opsmind/reporte_empresas_100.json",
      "utf-8"
    );
    const empresaCompleta = JSON.parse(rawData);

    // Extraemos las secciones clave a procesar por separado
    const secciones = Object.entries(empresaCompleta);

    let resumenAcumulado = null;
    const resultados = [];

    for (let i = 0; i < secciones.length; i++) {
      const [nombre, contenido] = secciones[i];
      console.log(
        `📤 Procesando sección: ${nombre} (${i + 1}/${secciones.length})`
      );

      const resultado = await enviarSeccion(
        nombre,
        contenido,
        resumenAcumulado
      );
      console.log(`✅ Sección "${nombre}" procesada.`);

      resultados.push({ nombre, resultado });
      const resultadoParsed = JSON.parse(resultado);
      resumenAcumulado = resultadoParsed.resumen_acumulado;
    }

    console.log("\n🧠 Análisis completo por secciones:");
    resultados.forEach((res, i) => {
      console.log(`\n🔸 ${res.nombre.toUpperCase()}:\n${res.resultado}`);
    });

    return resultados;
  } catch (error) {
    console.error("❌ Error durante el análisis:", error.message);
  }
}

analizarEmpresaPorSecciones();
