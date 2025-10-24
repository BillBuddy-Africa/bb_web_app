import flightimg from "../../assets/Flight.svg";

const Flight = () => {
  return (
    <button className="relative bg-[#fff] border border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-3 w-full">
      {/* Coming Soon Flag */}
      <span className="absolute top-3 right-3 bg-red-500 text-[11px] font-semibold text-white px-2 py-0.5 rounded-[5px] ">
        coming soon
      </span>

      <img src={flightimg} alt="Flight" className="w-13 mb-1 " />
      <span className="text-lg text-left font-medium text-black">Flight</span>
      <p className="text-sm text-left text-[#A2A1A1]">
        Book local and int'l flights
      </p>
    </button>
  );
};

export default Flight;
