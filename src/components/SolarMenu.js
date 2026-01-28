
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
const SolarMenu = () => {
    const {resId} = useParams();
   //Apis for Solar Info
   const [solar, setSolar] = useState(null); 
    useEffect(()=>{
    getSolarInfo();
   }, []);
   async function getSolarInfo(){
    const data = await fetch("url" + resId)
    const json = await data.json();
    console.log(json.data);
    setSolar(json.data);
   }
   return (!restaurant)? <Shimmer/> :(
  <div className="menu">
    <div>
      <h1>Solar id: {resId}</h1>
      <h2>{solar.name}</h2>

      <img
        src={IMG_CDN_URL + solar.cloudinaryImageId}
      />

      <h3>{solar?.area}</h3>
      <h3>{solar?.city}</h3>
      <h3>{solar?.avgRating} stars</h3>
      <h3>{solar?.costForTwoMsg}</h3>
    </div>

    <div>
      <h1>Menu</h1>
      <ul>
        {Object.values(solar?.menu?.items).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  </div>
);
};
export default SolarMenu;