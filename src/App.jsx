import { useState } from "react";
import Home from "./component/home/home";
import Preset from "./component/preset/preset";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <nav className="navbar">
        <h2 style={{ color: "white" }}></h2>

        <div className="nav-links">
          <button className="nav-btn" onClick={() => setPage("home")}>
            Home
          </button>
          <button className="nav-btn" onClick={() => setPage("preset")}>
            Preset
          </button>
        </div>
      </nav>

      {page === "home" && <Home />}
      {page === "preset" && <Preset />}
    </div>
  );
}
