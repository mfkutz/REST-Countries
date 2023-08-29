import { Link, useParams } from "react-router-dom"
import { RiArrowLeftLine } from "react-icons/ri";

import data from "../../src/data.json";


const Details = () => {
    const { countryId } = useParams();
    const country = data.find(item => item.alpha3Code === countryId);

    return (

        <div className="wrapper flex flex-col px-[10px] bg-gray-600">
            <div className=" pt-[5rem] ">
                <Link to={"/"}>
                    <button className="bg-white rounded-md shadow-md px-9 py-2 flex items-center gap-4">
                        <RiArrowLeftLine />
                        <span>Back</span>
                    </button>
                </Link>
            </div>
            <div className="pt-[5rem] flex justify-between">

                <div>
                    <img src={country.flag} alt="" />
                </div>

                <div>
                    <h2>{country.name}</h2>
                    <div className="flex">

                        <div>
                            <div className="flex items-center mb-[.1rem]">
                                <h3 className="font-semibold text-[1.1rem]">Native Name: </h3>
                                <span className="text-[1.1rem] ml-1">Belgie</span>
                            </div>
                            <div className="flex items-center mb-[.1rem]">
                                <h3 className="font-semibold text-[1.1rem]">Population: </h3>
                                <span className="text-[1.1rem] ml-1">11319511</span>
                            </div>
                            <div className="flex items-center mb-[.1rem]">
                                <h3 className="font-semibold text-[1.1rem]">Region: </h3>
                                <span className="text-[1.1rem] ml-1">Europe</span>
                            </div>
                            <div className="flex items-center mb-[.1rem]">
                                <h3 className="font-semibold text-[1.1rem]">Sub Region: </h3>
                                <span className="text-[1.1rem] ml-1">Western Europe</span>
                            </div>
                            <div className="flex items-center mb-[.1rem]">
                                <h3 className="font-semibold text-[1.1rem]">Capital: </h3>
                                <span className="text-[1.1rem] ml-1">Brussels</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-[.1rem]">
                                <h3 className="font-semibold text-[1.1rem]">Top Level Domain:</h3>
                                <span className="text-[1.1rem] ml-1">.be</span>
                            </div>
                            <div className="flex items-center mb-[.1rem]">
                                <h3 className="font-semibold text-[1.1rem]">Currencies: </h3>
                                <span className="text-[1.1rem] ml-1">Euro</span>
                            </div>
                            <div className="flex items-center mb-[.1rem]">
                                <h3 className="font-semibold text-[1.1rem]">Languages: </h3>
                                <span className="text-[1.1rem] ml-1">Dutch, French, German</span>
                            </div>
                        </div>


                    </div>

                    <div className="">
                        <div className="flex items-center mb-[.1rem] gap-2">
                            <h3 className="font-semibold text-[1.1rem]">Border Countries: </h3>
                            <span className="text-[.9rem] ml-1 border w-[110px] py-1 rounded-md text-center font-semibold">France</span>
                            <span className="text-[.9rem] ml-1 border w-[110px] py-1 rounded-md text-center font-semibold">Germany</span>
                            <span className="text-[.9rem] ml-1 border w-[110px] py-1 rounded-md text-center font-semibold">Netherlands</span>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Details