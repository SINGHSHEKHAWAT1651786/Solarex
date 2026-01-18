/* ---------------- BODY ---------------- */
import SolarCard from "./SolarCard";
import { solarList } from "../constants";
import {useState} from "react";
const Body = () => {
const [searchText, setSearchText] = useState();
  return(
<>
 <div className="search-container">
<input
  type="text"
  className="search-input"
  placeholder="Search"
  value={searchText}
  onChange={(e) => {
    //e.target.value- whatever you write in input
    setSearchText(e.target.value);
  }}
/>
<h1>{searchText}</h1>
  <button className="search-btn">Search</button>
  </div>
  <div className="solar-list">
    {solarList.map((solar) => (
      <SolarCard key={solar.data.id} {...solar.data} />
    ))}
  </div>
</>


  );
 
};
export default Body;