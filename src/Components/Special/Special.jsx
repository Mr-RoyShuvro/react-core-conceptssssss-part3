import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";


const Special = ({asset}) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h3>Special person get: <small>{asset}</small></h3>
            <h4>Gift: {gift}</h4>
        </div>
    );
};

export default Special;