import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products.jsx";
import Categories from "./pages/Categories.jsx";
import ChiSiamo from "./pages/ChiSiamo.jsx";
import Contacts from "./pages/Contacts.jsx";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<Products/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/about" element={<ChiSiamo/>}/>
            <Route path="/contact" element={<Contacts/>}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
