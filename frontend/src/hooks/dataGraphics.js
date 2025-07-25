import { useState, useEffect } from "react";
import useCategorias from "./useCategorias";

const useProcesosPorCategoria = () => {
  const { categorias, loading: loadingCategorias } = useCategorias();
  const [procesosPorCategoria, setProcesosPorCategoria] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProcesos = async () => {
      if (loadingCategorias) return;

      try {
        const resultados = await Promise.all(
          categorias.map(async (categoria) => {
            const resArchivos = await fetch(
              `http://localhost:3000/api/archivos?categoria_id=${categoria.id}`
            );
            const archivos = await resArchivos.json();

            let totalAnalisis = 0;

            for (const archivo of archivos) {
              const resAnalisis = await fetch(
                `http://localhost:3000/api/analisis?archivo_id=${archivo.id}`
              );
              const analisis = await resAnalisis.json();

              if (analisis.length > 0) {
                totalAnalisis++;
              }
            }

            return {
              name: categoria.name,
              total: totalAnalisis,
            };
          })
        );

        setProcesosPorCategoria(resultados);
      } catch (error) {
        console.error("Error al cargar procesos por categoría:", error);
        setProcesosPorCategoria([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProcesos();
  }, [categorias, loadingCategorias]);

  return { procesosPorCategoria, loading };
};

export default useProcesosPorCategoria;
