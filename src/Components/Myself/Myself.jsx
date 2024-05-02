import Special from "../Special/Special";


const Myself = ({asset}) => {
    return (
        <div>
            <h3>MySelf</h3>
            <section>
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default Myself;