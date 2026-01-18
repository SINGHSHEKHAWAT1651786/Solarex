/* ---------------- SOLAR CARD ---------------- */
import { IMG_CDN_URL } from "../constants";
const SolarCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
  area,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <h4>{totalRatingsString}</h4>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default SolarCard;

