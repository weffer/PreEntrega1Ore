import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes,Route } from "react-router-dom"
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Nuestros Productos"}/>}/>
          <Route path="/nosotros"/>
          <Route path="/blog"/>
          <Route path="/contactanos"/>
          <Route path="/detalle/:id"/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
