import data from "../../assets/Data.svg";
const Data = () => {
  return (
    <button className="bg-[#fff] border-1 border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-3 w-full">
      <img src={data} alt="" className="w-13 mb-1" />
      <span className="text-lg mt-2 font-medium text-left text-black">
        Data
      </span>
      <p className="text-sm text-[#A2A1A1] text-left ">
        Buy data across all networks
      </p>
    </button>
  );
};

export default Data;
