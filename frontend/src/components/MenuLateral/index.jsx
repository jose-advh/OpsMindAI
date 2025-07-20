const MenuLateral = () => {
  return (
    <aside className="flex-col w-[15%] h-[100vh] bg-[#6A6B84]">
      <nav className="flex flex-col justify-between items-center p-3 pt-20 h-[45vh]">
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#" className="text-[18px] text-[#FFFF00]">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="text-[18px]">
              Departamentos
            </a>
          </li>
          <li>
            <a href="#" className="text-[18px]">
              Ayuda
            </a>
          </li>
        </ul>

        <button type="button" className="bg-white w-[100%] p-5 rounded-xl">
          Subir Archivo
        </button>
        {/* Al darle click se abrirá un modal para subir archivos */}
      </nav>
    </aside>
  );
};

export default MenuLateral;
