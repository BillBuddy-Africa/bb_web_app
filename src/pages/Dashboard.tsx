import crypto from "../assets/crypto.svg";
import GC from "../assets/GC.svg";
import data from "../assets/Data.svg";
import airtime from "../assets/Airtime.svg";
import flight from "../assets/Flight.svg";
import Betting from "../assets/Betting.svg";
import TV from "../assets/CableTV.svg";
import Nepa from "../assets/Nepa.svg";
export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-6 w-full h-full  place-items-center">
      {/* 1 */}
      <div className="bg-[#fff] border-1 border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-3 w-full">
        <img src={crypto} alt="" className="w-13 mb-1" />
        <span className="text-lg font-medium text-black">Crypto</span>
        <p className="text-sm text-[#A2A1A1] ">Buy and sell cryptocurrencies</p>
      </div>

      {/* 2 */}
      <div className="bg-[#fff] border-1 border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-3 w-full">
        <img src={GC} alt="" className="w-13 mb-1" />
        <span className="text-lg font-medium text-black">Gift Card</span>
        <p className="text-sm text-[#A2A1A1] ">Buy and sell gift cards</p>
      </div>

      {/* 3 */}
      <div className="bg-[#fff] border-1 border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-3 w-full">
        <img src={data} alt="" className="w-13 mb-1" />
        <span className="text-lg font-medium text-black">Data</span>
        <p className="text-sm text-[#A2A1A1] ">Buy data across all networks</p>
      </div>

      {/* 4 */}
      <div className="bg-[#fff] border-1 border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-3 w-full">
        <img src={Nepa} alt="" className="w-13 mb-1" />
        <span className="text-lg font-medium text-black">Electricity</span>
        <p className="text-sm text-[#A2A1A1] ">Buy tokens on all discos</p>
      </div>

      {/* 5 */}
      <div className="bg-[#fff] border-1 border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-3 w-full">
        <img src={airtime} alt="" className="w-13 mb-1" />
        <span className="text-lg font-medium text-black">Airtime</span>
        <p className="text-sm text-[#A2A1A1] ">Buy airtime on all networks</p>
      </div>

      {/* 6 */}
      <div className="bg-[#fff] border-1 border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-3 w-full">
        <img src={TV} alt="" className="w-13 mb-1" />
        <span className="text-lg font-medium text-black">Cable TV</span>
        <p className="text-sm text-[#A2A1A1] ">Subscribe your cable tv</p>
      </div>

      {/* 7 */}
      <div className="bg-[#fff] border-1 border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-3 w-full">
        <img src={Betting} alt="" className="w-13 mb-1" />
        <span className="text-lg font-medium text-black">Betting</span>
        <p className="text-sm text-[#A2A1A1] ">Fund your betting wallet</p>
      </div>

      {/* 8 */}
      <div className="bg-[#fff] border-1 border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-3 w-full">
        <img src={flight} alt="" className="w-13 mb-1" />
        <span className="text-lg font-medium text-black">Flight</span>
        <p className="text-sm text-[#A2A1A1] ">Book local and int'l flights</p>
      </div>

      {/* Filler to keep alignment */}
      <div className="invisible"></div>
    </div>
  );
}
