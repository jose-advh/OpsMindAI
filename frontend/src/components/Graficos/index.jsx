// BarChart.jsx
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useProcesos from "../../hooks/useProcesses";
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  const processes = useProcesos("1");
  const [labels, setLabels] = useState([]);
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    if (
      processes &&
      processes.procesos &&
      Array.isArray(processes.procesos.procesos)
    ) {
      const categorias = processes.procesos.procesos;

      const nuevasLabels = categorias.map((cat) => cat.categoryName);
      const nuevosCounts = categorias.map((cat) => cat.data.length);

      setLabels(nuevasLabels);
      setCounts(nuevosCounts);
    }
  }, [processes]);

  const data = {
    labels: labels.length > 0 ? labels : ["Cargando..."],
    datasets: [
      {
        label: "Procesos realizados",
        data: counts.length > 0 ? counts : [0],
        backgroundColor: "#3b82f6",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: { color: "#fff" },
      },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
      },
      y: {
        ticks: { color: "#fff" },
      },
    },
  };

  return (
    <div className="rounded-xl w-[75%]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
