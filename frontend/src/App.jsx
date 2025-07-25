import BentoGrid from "./components/BentoGrid";
import Header from "./components/Header";
import MenuLateral from "./components/MenuLateral";


function App() {
  return (
    <>
      <div className="flex justify-between">
        <MenuLateral />
        <BentoGrid />
      </div>
    </>
  );
}

export default App;
