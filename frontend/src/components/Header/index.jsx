const Header = () => {
  return (
    <header className="flex justify-around w-[95%] m-auto fixed left-0 right-0 p-5 border-1">
      <input
        type="text"
        id="busqueda"
        placeholder="Buscar"
        className="bg-white rounded-xl py-1 px-6"
      />
      <h1 className="text-1xl text-white font-bold">OpsMind</h1>
    </header>
  );
};

export default Header;
