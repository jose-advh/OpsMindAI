const BentoGrid = () => {
  return (
    <div className="border-1 min-h-screen w-[100%] flex items-center justify-center bg-slate-900">
      <div className="grid h-full w-full grid-cols-6 grid-rows-2 gap-3 p-20 xl:m-5 lg:m-32 md:m-16">
        {/* Columna 1 */}
        <div className="col-span-2 row-span-1 rounded-xl bg-gradient-to-r from-green-500 to-green-700 rounded"></div>
        <div className="col-span-4 row-span-1 roundend-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl"></div>

        {/* Columna 2 */}
        <div className="col-span-4 row-span-1 roundend-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl"></div>
        <div className="col-span-2 row-span-1 rounded-xl bg-gradient-to-r from-green-500 to-green-700 rounded"></div>
      </div>
    </div>
  );
};

export default BentoGrid;
