import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Cardapio from "./pages/Menu";
import MenuCardapio from "./components/MenuCardapio";
import PaginaPadrao from "./components/MenuCardapio/PaginaPadrao";
import Sobre from "./pages/Sobre";
import Footer from "./components/MenuCardapio/Footer";
import NotFound from "./pages/NotFound";
import Prato from "./pages/Prato";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <MenuCardapio />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          <Route path="prato/:id" element={<Prato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
