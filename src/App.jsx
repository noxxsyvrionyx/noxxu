import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/home/home";
import Preset from "./component/preset/preset";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2 style={{color:"white"}}></h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/preset">Preset</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preset" element={<Preset />} />
      </Routes>
    </BrowserRouter>
  );
}
