import { useEffect, useState } from "react";

const useProcesos = (idEmpresa) => {
  const [procesos, setProcesos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!idEmpresa) return;

    const fetchProcesos = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/processes/${idEmpresa}`
        );
        if (!res.ok) throw new Error("Error al obtener procesos");
        const data = await res.json();
        setProcesos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProcesos();
  }, [idEmpresa]);

  return { procesos, loading, error };
};

export default useProcesos;
