import { RiMoonLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="z-50 bg-white shadow-md flex ">
      <div className="wrapper flex justify-between items-center py-[18px] px-[10px] w-full">
        <div className="text-[25px] font-bold">
          Where in the world?
        </div>
        <div className="text-[16px] font-semibold flex gap-3 items-center cursor-pointer">
          <RiMoonLine /> <span>Dark Mode</span>
        </div>
      </div>
    </div>
  )
}

export default Header