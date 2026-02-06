import { useState, useEffect } from "react";
import SolarCard from "./SolarCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { solarList } from "../constants";
import {filterData} from "../utils/helper"; 
import useOnline from "../utils/useOnline";
/* ---------------- BODY COMPONENT ---------------- */
const Body = (user) => {
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
// Error on the page 
 const isOnLine = useOnline();
 if(!isOnLine){
  return <h1>Offline, please check your internet</h1>
 }
  if (isLoading) {
    return <Shimmer />;
  }

  if (!filteredSolars.length) {
    return <h1>No solars match your filter</h1>;
  }

  return (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus: bg-green-200 p-2 m-2"
          placeholder="Search by name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="p-1 m-1 bg-purple-900 hover:bg-yellow-600 text-white rounded-md " onClick={()=>{
          const data =filterData(searchText, allSolars);
          setFilteredSolars(data);
        }}>Search</button>
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

      <div className="flex flex-wrap bg-pink-500 ">
        {filteredSolars.map((solar) => (
          <Link
            to={"/solar/" + solar?.data?.id}
            key={solar?.data?.id}
          >
            <SolarCard {...solar.data} user = {user} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
