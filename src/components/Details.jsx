import { Link, useParams } from "react-router-dom"
import { RiArrowLeftLine } from "react-icons/ri";

/* import data from "../../src/data.json"; */
import data from '../../public/data.json'


const Details = () => {
    const { countryId } = useParams();
    const country = data.find(item => item.alpha3Code === countryId);

    return (
        

            <div className="wrapper flex flex-col px-[10px] w-full h-screen">
                <div className=" pt-[5rem] ">
                    <Link to={"/"}>
                        <button className="bg-white rounded-md shadow-md px-9 py-2 flex items-center gap-4">
                            <RiArrowLeftLine />
                            <span>Back</span>
                        </button>
                    </Link>
                </div>
                <div className="pt-[5rem] flex justify-between">

                    <div className=" w-[560px] h-[400px] relative ">
                        <img src={country.flag} alt="" className="absolute inset-0 w-full h-full object-contain" />

                    </div>


                    <div className=" flex flex-col">
                        <h2 className="text-[30px] font-bold pt-10">{country.name}</h2>
                        <div className="flex pt-7  gap-24">

                            <div className="flex flex-col gap-2">
                                <div className="flex items-center mb-[.1rem]">
                                    <h3 className="font-semibold text-[1.1rem]">Native Name: </h3>
                                    <span className="text-[1.1rem] ml-1">{country.nativeName}</span>
                                </div>
                                <div className="flex items-center mb-[.1rem]">
                                    <h3 className="font-semibold text-[1.1rem]">Population: </h3>
                                    <span className="text-[1.1rem] ml-1">{country.population.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center mb-[.1rem]">
                                    <h3 className="font-semibold text-[1.1rem]">Region: </h3>
                                    <span className="text-[1.1rem] ml-1">{country.region}</span>
                                </div>
                                <div className="flex items-center mb-[.1rem]">
                                    <h3 className="font-semibold text-[1.1rem]">Sub Region: </h3>
                                    <span className="text-[1.1rem] ml-1">{country.subregion}</span>
                                </div>
                                <div className="flex items-center mb-[.1rem]">
                                    <h3 className="font-semibold text-[1.1rem]">Capital: </h3>
                                    <span className="text-[1.1rem] ml-1">{country.capital}</span>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center mb-[.1rem]">
                                    <h3 className="font-semibold text-[1.1rem]">Top Level Domain:</h3>
                                    <span className="text-[1.1rem] ml-1">{country.topLevelDomain}</span>
                                </div>
                                <div className="flex items-center mb-[.1rem]">
                                    <h3 className="font-semibold text-[1.1rem]">Currencies: </h3>
                                    <span className="text-[1.1rem] ml-1">{country.currencies[0].code}</span>
                                </div>
                                <div className="flex items-center mb-[.1rem]">
                                    <h3 className="font-semibold text-[1.1rem]">Languages: </h3>
                                    <span className="text-[1.1rem] ml-1">
                                        {country.languages.map((language, index) => (
                                            <span key={index}>
                                                {language.nativeName}
                                                {index < country.languages.length - 1 ? ", " : ""}
                                            </span>
                                        ))}
                                    </span>
                                </div>
                            </div>


                        </div>

                        <div className="pt-12">
                            <div className="flex items-center mb-[.1rem] gap-2 flex-wrap">
                                <h3 className="font-semibold text-[1.1rem]">Time zone: </h3>

                                <span className="text-[.9rem] ml-1 border w-[110px] py-1 rounded-md text-center font-semibold">{country.timezones}</span>

                            </div>
                        </div>
                    </div>

                </div>

            </div>


        
    )
}

export default Details