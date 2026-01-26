import { useState, useEffect } from "react";
import SolarCard from "./SolarCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    getSolars();
  }, []);

  useEffect(() => {
    setFilteredSolars(filterData(searchText, allSolars));
  }, [searchText, allSolars]);

  async function getSolars() {
    try {
      const res = await fetch(
        "https://apinew.moglix.com/nodeApi/v1/product/getProductFbtDetails?productId=MSN457M8D6WN9J"
      );
      const json = await res.json();

      const cards =
        json?.data?.cards?.[2]?.data?.data?.cards ?? [];

      setAllSolars(cards);
      setFilteredSolars(cards);
    } catch (err) {
      console.error("API error:", err);
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

      <div className="solar-list">
        {filteredSolars.map((solar) => {
          return(
            <Link to= {"/solar" + solar.data.id} key={solar?.data?.id}>
 <SolarCard
            
            {...solar.data}
          />
            </Link>
          );
         
        })}
      </div>
    </>
  );
};

export default Body;
