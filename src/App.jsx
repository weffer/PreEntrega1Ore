import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <main className="container-xl mt-5">
        <hr className="border border-primary border-2 opacity-50" />
        <h2 className="text-center fw-bold">Productos</h2>
        <div className="row mt-5">
          <ItemListContainer
            greeting={
              "Quadra no es solo un escritorio es un estilo en tu espacio de trabajo, sus múltiples colores de estructura y tablero te permitirán personalizar tu espacio a tu gusto y estilo"
            }
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
