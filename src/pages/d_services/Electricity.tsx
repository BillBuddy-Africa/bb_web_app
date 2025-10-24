import Nepa from "../../assets/Nepa.svg";
const Electricity = () => {
  return (
    <div className="bg-[#fff] border-1 border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-3 w-full">
      <img src={Nepa} alt="" className="w-13 mb-1" />
      <span className="text-lg text-left font-medium text-black">Electricity</span>
      <p className="text-sm text-left text-[#A2A1A1] ">Buy tokens on all discos</p>
    </div>
  );
};

export default Electricity;
