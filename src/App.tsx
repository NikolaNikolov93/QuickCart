import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navigation from "./features/navigaton/Navigation";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import Products from "./pages/products/Products";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
function App() {
  return (
    <div className="site">
      <Navigation />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/categories/:products" element={<Products />} />
          <Route path="/categories/:products/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
