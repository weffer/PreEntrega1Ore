import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <main className="container-xl mt-5">
          <ItemListContainer
            greeting={
              "Nuestros Productos"
            }
          />        
      </main>
      <Footer />
    </>
  );
}

export default App;
