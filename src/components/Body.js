
import SolarCard from "./SolarCard";
import { solarList } from "../constants";
import  {useState, useEffect} from "react";
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
 useEffect(()=>{
//APIs call
getSolars(); 
 }, []);
 async function getSolars() {
  const data= await fetch("https://apinew.moglix.com/nodeApi/v1/product/getProductFbtDetails?productId=MSN457M8D6WN9J")
const json = await data.json();
console.log(json); 
//Optional chaining 
setSolars(json?.data?.cards[2]?.data?.data?.cards);
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
