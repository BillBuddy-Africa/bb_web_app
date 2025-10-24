import GC from "../../assets/GC.svg";
const Giftcards = () => {
  return (
    <button className="bg-[#fff] border-1 border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-3 w-full">
      <img src={GC} alt="" className="w-13 mb-1" />
      <span className="text-lg mt-2 font-medium text-left text-black">
        Gift Card
      </span>
      <p className="text-sm text-left text-[#A2A1A1] ">
        Buy and sell gift cards
      </p>
    </button>
  );
};

export default Giftcards;
