import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navigation from "./features/navigaton/Navigation";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import Categories from "./pages/categories/Categories";
function App() {
  return (
    <div className="site">
      <Navigation />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
