import { useState, useEffect } from "react";
import SolarCard from "./SolarCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { solarList } from "../constants";

/* ---------------- FILTER FUNCTION ---------------- */
function filterData(searchText, solars) {
  return solars.filter((solar) =>
    solar?.data?.name
      ?.toLowerCase()
      .includes(searchText.toLowerCase())
  );
}

/* ---------------- BODY COMPONENT ---------------- */
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allSolars, setAllSolars] = useState([]);
  const [filteredSolars, setFilteredSolars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState(""); // "api" | "constant"

  useEffect(() => {
    getSolars();
  }, []);

  useEffect(() => {
    setFilteredSolars(filterData(searchText, allSolars));
  }, [searchText, allSolars]);

  async function getSolars() {
    try {
      const res = await fetch("url"); // invalid / placeholder API

      if (!res.ok) {
        throw new Error("API request failed");
      }

      const responseText = await res.text();

      // 🔒 Prevent HTML response from crashing JSON.parse
      if (responseText.trim().startsWith("<")) {
        throw new Error("HTML response received instead of JSON");
      }

      const json = JSON.parse(responseText);

      const cards =
        json?.data?.cards?.[2]?.data?.data?.cards ?? [];

      if (!cards.length) {
        throw new Error("Empty API response");
      }

      setAllSolars(cards);
      setFilteredSolars(cards);
      setDataSource("api");
    } catch (error) {
      console.warn("API failed. Using constant data:", error.message);

      // ✅ Fallback to constants.js
      setAllSolars(solarList);
      setFilteredSolars(solarList);
      setDataSource("constant");
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <Shimmer />;
  }

  if (!filteredSolars.length) {
    return <h1>No solars match your filter</h1>;
  }

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
      </div>

      {/* Message shown only when searching */}
      {searchText && (
        <p className="source-text">
          {dataSource === "api"
            ? "This is APIs value"
            : "This is constant.js value"}
        </p>
      )}

      {/* Optional info when API fails */}
      {dataSource === "constant" && (
        <p className="warning-text">
          API unavailable. Showing fallback data.
        </p>
      )}

      <div className="solar-list">
        {filteredSolars.map((solar) => (
          <Link
            to={"/solar/" + solar?.data?.id}
            key={solar?.data?.id}
          >
            <SolarCard {...solar.data} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
