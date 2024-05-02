import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";


const Friend = () => {
    const get = useContext(AssetContext);
    return (
        <div>
            <h3>Friend get: {get}</h3>
        </div>
    );
};

export default Friend;