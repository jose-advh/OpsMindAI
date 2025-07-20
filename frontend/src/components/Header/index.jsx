const Header = () => {
  return (
    <header className="flex justify-between w-[60%] m-auto fixed left-0 right-0 p-5">
      <input
        type="text"
        id="busqueda"
        placeholder="Buscar"
        className="bg-white rounded-xl py-1 px-3"
      />
      <h1 className="text-1xl text-white font-bold">OpsMind</h1>
    </header>
  );
};

export default Header;
