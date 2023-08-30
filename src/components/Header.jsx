import { useEffect, useState } from "react";
import { RiMoonLine, RiMoonFill } from "react-icons/ri";

const Header = () => {
  const [theme, setTheme] = useState("light")

  /* Dark Mode */
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className=" bg-white shadow-md flex dark:bg-DarkBlue transition duration-300 ">
      <div className="wrapper flex justify-between items-center py-[18px] px-[25px] w-full">
        <div className="text-[18px] font-bold dark:text-white sm:text-[25px]">
          Where in the world?
        </div>
        <div className="text-[16px] font-semibold flex gap-3 items-center cursor-pointer dark:text-white" onClick={handleThemeSwitch}>
          {theme !== "dark" ? (
            <div className="flex items-center gap-2">
              <RiMoonFill size={"20px"} />
              <span>Dark Mode</span></div>
          ) : (
            <div className="flex items-center gap-2">
              <RiMoonLine size={"20px"} color="white" />
              <span>Light Mode</span>
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default Header