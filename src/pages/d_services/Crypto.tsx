import crypto from "../../assets/crypto.svg";

const Crypto = () => {
  return (
    <button className="bg-[#fff] border-1 border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-3 w-full">
      <img src={crypto} alt="" className="w-13 mb-1" />
      <span className="text-lg mt-2 font-medium text-left text-black">Crypto</span>
      <p className="text-sm text-left text-[#A2A1A1] ">Buy and sell cryptocurrencies</p>
    </button>
  );
};

export default Crypto;
