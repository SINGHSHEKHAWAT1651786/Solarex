import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const SolarCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
  area,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <h4>{totalRatingsString}</h4>
      <h4>{lastMileTravelString}</h4>

      <h5 className="font-bold">{user.name}</h5>
    </div>
  );
};

export default SolarCard;
