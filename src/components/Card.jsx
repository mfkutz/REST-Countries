

const Card = ({ item }) => {
    return (
        <div className="w-[264px] rounded-[5px] shadow-md customCard " key={item.alpha3Code}>
            <div className="flex h-[180px]" >
                <img src={item.flag} alt="image" className="w-full h-full object-cover rounded-t-[5px]" />
            </div>
            <div className="p-5">
                <h2 className="font-bold text-[1.2rem] py-3">{item.name}</h2>
                <div className="flex items-center mb-[.1rem]">
                    <h3 className="font-semibold text-[.9rem]">Population: </h3>
                    <span className="text-[.9rem] ml-1">{item.population}</span>
                </div>
                <div className="flex items-center mb-[.1rem]">
                    <h3 className="font-semibold text-[.9rem]">Region:</h3>
                    <span className="text-[.9rem] ml-1">{item.region}</span>
                </div>
                <div className="flex items-center mb-[1.2rem]">
                    <h3 className="font-semibold text-[.9rem]">Capital:</h3>
                    <span className="text-[.9rem] ml-1">{item.capital}</span>
                </div>
            </div>
        </div>
    )
}

export default Card