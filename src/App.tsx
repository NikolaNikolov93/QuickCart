import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navigation from "./features/navigaton/Navigation";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="site">
      <Navigation />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
