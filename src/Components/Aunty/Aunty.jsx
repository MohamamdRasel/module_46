import Cousin from "../Cousin/Cousin";


const Aunty = ({asset}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Salam'} asset={asset}></Cousin>
                <Cousin name={'Kalam'} asset={asset}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;