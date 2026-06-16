import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

import ScrollToTop from "./components/ScrollToTop.jsx";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Categories from "./pages/Categories.jsx";
import ChiSiamo from "./pages/ChiSiamo.jsx";
import Contacts from "./pages/Contacts.jsx";
import { NewsletterProvider } from "./contexts/NewsletterContext.jsx";

function App() {
  return (
    <NewsletterProvider>
    <ThemeProvider>
      <ScrollToTop />
      
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/about" element={<ChiSiamo/>}/>
            <Route path="/contact" element={<Contacts/>}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      
    </ThemeProvider>
    </NewsletterProvider>
  );
}
export default App;
