import { useEffect, useState } from "react";
import { BiSearchAlt2, BiChevronDown } from "react-icons/bi";
import Card from "./Card";


const Section = () => {

  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState(""); // Nuevo estado para el término de búsqueda
  const [region, setRegion] = useState(false)
  const [shuffledData, setShuffledData] = useState([]); // Estado para mantener los datos reordenados
  const [selectedRegion, setSelectedRegion] = useState(""); // Estado para la región seleccionada

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json')
        const jsonData = await response.json()
        setData(jsonData)
        setShuffledData(getShuffledData(jsonData));
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])



  function getShuffledData(data) {
    return [...data].sort(() => Math.random() - 0.5);
  }

  // Filtrar los datos según el término de búsqueda
  const filteredData = shuffledData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedRegion === "" || item.region === selectedRegion)
  )

  function handleRegion(region) {
    setSelectedRegion(region);
  }


  return (
    <div className="pt-[42px] h-screen z-0 flex flex-col w-full">
      <div className="wrapper flex justify-between pb-8 px-[10px] flex-wrap w-full gap-4">
        <div className=" relative">
          <input
            type="text"
            className="shadow-md border text-[14px] pl-16 h-[55px] w-[480px] rounded-md custom"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute top-4 left-7">
            <BiSearchAlt2 size='24px' color='gray' />
          </div>
        </div>

        <button className="shadow-md bg-white text-[14px] font-semibold rounded-md w-[200px] text-left pl-6 h-[55px] relative" onClick={() => setRegion(!region)}>
          {selectedRegion === "" ? 'All regions' : selectedRegion}
          <div className="absolute right-2 top-4">
            <BiChevronDown size='23px' />
          </div>
          <ul className={`bg-white absolute top-16 w-[200px] left-0 p-4 rounded-md shadow-md flex flex-col gap-2 cursor-default ${region ? 'block' : 'hidden'}`}>
            <li className="p-1 cursor-pointer hover:font-bold" onClick={() => handleRegion("")}>All Regions</li>
            <li className="p-1 cursor-pointer hover:font-bold" onClick={() => handleRegion("Africa")}>Africa</li>
            <li className="p-1 cursor-pointer hover:font-bold" onClick={() => handleRegion("Americas")}>America</li>
            <li className="p-1 cursor-pointer hover:font-bold" onClick={() => handleRegion("Asia")}>Asia</li>
            <li className="p-1 cursor-pointer hover:font-bold" onClick={() => handleRegion("Europe")}>Europe</li>
            <li className="p-1 cursor-pointer hover:font-bold" onClick={() => handleRegion("Oceania")}>Oceania</li>
          </ul>
        </button>
      </div>

      <div className="wrapper justify-center px-[10px]">

        <div className="flex flex-wrap gap-[4.6rem] justify-center ">
          {filteredData.map((item) => (
            < Card item={item} key={item.alpha3Code} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Section