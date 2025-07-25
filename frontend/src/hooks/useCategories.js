// hooks/useCategorias.js
import { useState, useEffect } from "react";

const useCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/categories/1");
        const data = await response.json();

        if (Array.isArray(data) && data.length === 0) {
          setCategorias([{ name: "No hay ninguna categoría" }]);
        } else {
          setCategorias(data);
        }
      } catch (error) {
        console.error("Error al cargar categorías:", error);
        setCategorias([{ name: "Error al cargar categorías" }]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  return { categorias, loading };
};

export default useCategorias;
