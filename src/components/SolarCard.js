/* ---------------- SOLAR CARD ---------------- */
import { IMG_CDN_URL } from "../constants";
const SolarCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
  area,
  lastMileTravelString,
  user,
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50  ">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <h4>{totalRatingsString}</h4>
      <h4>{lastMileTravelString}</h4>
      <h4>{user.name}</h4>
    </div>
  );
};

export default SolarCard;

