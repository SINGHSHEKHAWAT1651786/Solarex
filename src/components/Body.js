
import SolarCard from "./SolarCard";
import { solarList } from "../constants";
import  {useState, useEffect} from "react";
import Shimmer from "./Shimmer"; 
/* ---------------- FILTER FUNCTION ---------------- */
function filterData(searchText, solars) {
  return solars.filter((solar) =>
    solar.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

/* ---------------- BODY COMPONENT ---------------- */
const Body = () => {

  const [searchText, setSearchText] = useState("");
  const [allSolars, setAllSolars] = useState([]); 
  const [filteredSolars, setFilteredSolars] = useState([]);
 useEffect(()=>{
//APIs call
getSolars(); 
 }, []);

 async function getSolars() {
    try {
      const res = await fetch(
        "https://apinew.moglix.com/nodeApi/v1/product/getProductFbtDetails?productId=MSN457M8D6WN9J"
      );
      const json = await res.json();
      console.log(json);

      const cards =
        json?.data?.cards?.[2]?.data?.data?.cards || [];

      setAllSolars(cards);
      setFilteredSolars(cards);
    } catch (err) {
      console.error("API error:", err);
    }
  }

console.log("render");

if (allSolars.length === 0) {
  return <Shimmer />;
}

if (filteredSolars.length === 0) {
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

      <button 
        className="search-btn"
        onClick={() => {
          const filteredData = filterData(searchText, allSolars);
          setFilteredSolars(filteredData);
        }}
      >
        Search
      </button>
    </div>

    <div className="solar-list">
      {filteredSolars.map((solar, index) => (
        <SolarCard
          key={solar?.data?.id || index}
          {...solar.data}
        />
      ))}
    </div>
  </>
);
};
export default Body;
