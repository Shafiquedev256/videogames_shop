import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home_page from "./pages/home_page";
import Details_page from "./pages/details_page";
import Cart_page from "./pages/cart_page";
import Checkout_page from "./pages/checkout_page";
import CategoryPage from "./pages/category_page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home_page />} />
          <Route path='/details/:title' element={<Details_page />} />
          <Route path='/cart' element={<Cart_page />} />
          <Route path='/checkout/:id' element={<Checkout_page />} />
          <Route path='/category/:category' element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
