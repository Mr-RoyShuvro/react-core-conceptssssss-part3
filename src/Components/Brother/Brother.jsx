import { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";


const Brother = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h3>Brother</h3>
            <p>{money}</p>
        </div>
    );
};

export default Brother;