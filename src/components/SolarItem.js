import { IMG_CDN_URL } from "../constants";

const SolarItem = ({
    name,
    descriptions,
    cloudinaryImageId,
    price
}) => {


    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h4>{descriptions}</h4>
            <h4> Rupees: {price / 100}</h4>
        </div>
    );
};

export default SolarItem;

