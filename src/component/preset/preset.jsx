import { useState } from "react";
import "./preset.css";

export default function Preset() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(0);

  const presets = [
    {
      name: "Vibrant Colors",
      size: "2.5GB",
      type: "After Effects",
      price: "599 BDT",
    },
    {
      name: "Soft Glow",
      size: "1.2GB",
      type: "After Effects",
      price: "399 BDT",
    },
    {
      name: "Cinematic",
      size: "3.1GB",
      type: "After Effects",
      price: "799 BDT",
    },
    {
      name: "Film Grain",
      size: "900MB",
      type: "After Effects",
      price: "299 BDT",
    },
  ];

  const filtered = presets.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="preset-container">
      <h1 className="preset-title">Presets</h1>

      <input
        type="text"
        className="search-bar"
        placeholder="Search preset..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="preset-row">
        {filtered.map((preset, index) => {
          const isActive = index === active;

          return (
            <div
              key={preset.name}
              className={`preset-card ${isActive ? "active" : "inactive"}`}
              onClick={() => setActive(index)}
            >
              <h3>{preset.name}</h3>
              <p>size: {preset.size}</p>
              <p>type: {preset.type}</p>
              <p>price: {preset.price}</p>

              <div className="preset-actions">
                <button>Watch</button>
                <button>Buy</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="arrow-controls">
        <button
          disabled={active === 0}
          onClick={() => setActive((prev) => prev - 1)}
        >
          ◀
        </button>

        <button
          disabled={active === filtered.length - 1}
          onClick={() => setActive((prev) => prev + 1)}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
