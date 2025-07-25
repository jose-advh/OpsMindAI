import BarChart from "../Graficos";
import useCategorias from "../../hooks/useCategories.js";

const BentoGrid = () => {
  const { categorias, loading } = useCategorias();

  if (loading) return <p>Cargando categorías...</p>;

  return (
    <div className="border-1 min-h-screen w-full flex items-center justify-center bg-slate-900">
      <div className="grid h-full w-full grid-cols-6 grid-rows-2 gap-3 p-20 xl:m-5 lg:m-32 md:m-16">
        {/* Columna 1 */}
        <div className="col-span-2 row-span-1 rounded-xl bg__grid shadow-xl backdrop-blur-md flex items-center justify-center">
          <article className="flex flex-col items-center">
            <h2 className="text-3xl mb-4 text-white">Tus categorías</h2>
            {categorias.map((categoria) => (
              <p key={categoria.id} className="text-[#c2c2c2]">
                {categoria.nombre}
              </p>
            ))}
          </article>
        </div>

        <div className="col-span-4 row-span-1 rounded-xl bg__grid shadow-xl backdrop-blur-md flex items-center justify-center">
          <BarChart />
        </div>

        {/* Columna 2 */}
        <div className="col-span-4 row-span-1 rounded-xl bg__grid shadow-xl backdrop-blur-md flex items-center justify-center">
          <article className="flex flex-col items-center w-[90%]">
            <h2 className="text-3xl mb-4 text-white">Estado General</h2>
            <p className="text-[#c2c2c2]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              placeat magni. Maiores eveniet voluptatibus porro ipsa distinctio
              velit iste cupiditate! Exercitationem sapiente alias distinctio,
              voluptatem vitae laborum culpa corrupti ab!
            </p>
          </article>
        </div>

        <div className="col-span-2 row-span-1 rounded-xl bg__grid shadow-xl backdrop-blur-md flex items-center justify-center">
          <img
            src="/media/icons/upload.png"
            alt="Subir Archivo"
            className="w-[40%]"
          />
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
