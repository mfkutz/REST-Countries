import { useEffect, useState } from "react"
import { BiSearchAlt2, BiChevronDown } from "react-icons/bi"
import Card from "./Card"

const Section = () => {

  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [region, setRegion] = useState(false)
  const [shuffledData, setShuffledData] = useState([])
  const [selectedRegion, setSelectedRegion] = useState("")

  const [countriesToShow, setCountriesToShow] = useState(8)    /* agrego estado para controlar cuanto se muestra*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data.json')
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
    return [...data].sort((a, b) => a.name.localeCompare(b.name))
  }

  const filteredData = shuffledData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedRegion === "" || item.region === selectedRegion)
  ).slice(0, countriesToShow) /*agregue un slice para que muestre desde 0 a el estado, aun sigue funcionando el back en details*/

  function handleRegion(region) {
    setSelectedRegion(region);
  }

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      if (documentHeight - windowHeight - scrollPosition < 300) {
        // Si el usuario está cerca del final, incrementar la cantidad de países a mostrar
        setCountriesToShow(prev => prev + 8); // Mostrar 8 países adicionales
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <div className="pt-[42px] h-full z-0 flex flex-col w-full pb-12 ">
      <div className="wrapper flex justify-between pb-8 px-[25px] flex-wrap w-full gap-4 ">
        <div className=" relative">
          <input
            type="text"
            className="shadow-md border text-[14px] pl-16 h-[55px] w-[480px] rounded-md custom dark:bg-DarkBlue dark:text-white "
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute top-4 left-7">
            <BiSearchAlt2 size='24px' color='gray' />
          </div>
        </div>
        <button className="shadow-md bg-white text-[14px] font-semibold rounded-md w-[200px] text-left pl-6 h-[55px] relative dark:bg-DarkBlue dark:text-white" onClick={() => setRegion(!region)}>
          {selectedRegion === "" ? 'All regions' : selectedRegion}
          <div className="absolute right-2 top-4">
            <BiChevronDown size='23px' />
          </div>
          <ul className={`bg-white absolute top-16 w-[200px] left-0 p-4 rounded-md shadow-md flex flex-col gap-2 cursor-default dark:bg-DarkBlue ${region ? 'block' : 'hidden'}`}>
            <li className="p-1 cursor-pointer hover:font-bold" onClick={() => handleRegion("")}>All Regions</li>
            <li className="p-1 cursor-pointer hover:font-bold" onClick={() => handleRegion("Africa")}>Africa</li>
            <li className="p-1 cursor-pointer hover:font-bold" onClick={() => handleRegion("Americas")}>America</li>
            <li className="p-1 cursor-pointer hover:font-bold" onClick={() => handleRegion("Asia")}>Asia</li>
            <li className="p-1 cursor-pointer hover:font-bold" onClick={() => handleRegion("Europe")}>Europe</li>
            <li className="p-1 cursor-pointer hover:font-bold" onClick={() => handleRegion("Oceania")}>Oceania</li>
          </ul>
        </button>
      </div>
      <div className="wrapper px-[25px] w-full ">
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