import { useState } from "react";
import SolarCard from "./SolarCard";
import { solarList } from "../constants";

/* ---------------- FILTER FUNCTION ---------------- */
function filterData(searchText, solars) {
  return solars.filter((solar) =>
    solar.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

/* ---------------- BODY COMPONENT ---------------- */
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allSolars] = useState(solarList); // original data (never mutated)
  const [solars, setSolars] = useState(solarList); // filtered data

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            const filteredData = filterData(searchText, allSolars);
            setSolars(filteredData);
          }}
        >
          Search
        </button>
      </div>

      <div className="solar-list">
        {solars.map((solar) => (
          <SolarCard key={solar.data.id} {...solar.data} />
        ))}
      </div>
    </>
  );
};

export default Body;
