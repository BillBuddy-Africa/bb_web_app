import { useState } from "react";
import AddRing from "../../assets/Add_ring_light.svg";
import BgImage from "../../assets/atmcard.jpg";
import BankIcon from "../../assets/bank.svg"; // adjust path as needed
import DeleteAccount from "../../assets/delete_icon.svg"; // adjust path as needed

const ProfileBank = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const bankList = [
    {
      id: 1,
      accountName: "Samuel Oghene",
      accountNumber: "1234567890",
      bankName: "Access Bank",
    },
    {
      id: 2,
      accountName: "Mary Johnson",
      accountNumber: "9876543210",
      bankName: "GTBank",
    },
    {
      id: 3,
      accountName: "John Doe",
      accountNumber: "4567891230",
      bankName: "UBA",
    },
  ];

  return (
    <div className="grid w-[90%] grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] md:gap-4 gap-6 justify-center">
      {/* Add bank button */}
      <button className="w-full md:h-[182px] h-[220px] md:mt-0 mt-6 border flex flex-col items-center justify-center cursor-pointer border-[#D0DAE6] hover:border-[#8003A9] transition duration-300 rounded-[10px]">
        <img src={AddRing} alt="Add Bank" />
        <p className="text-[#0BCE5A]">Add bank account</p>
      </button>

      {/* Bank cards with flip */}
      {bankList.map((banks, index) => (
        <div
          key={banks.id}
          className="relative min-w-[320px] md:h-[182px] h-[230px] cursor-pointer"
          onClick={() => handleFlip(index)}
        >
          <div
            className={`relative w-full h-full rounded-[10px] overflow-hidden bg-cover bg-center transition-transform duration-500 ${
              flippedIndex === index ? "[transform:rotateY(180deg)]" : ""
            }`}
            style={{
              backgroundImage: `url(${BgImage})`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Front Side */}
            <div
              className={`absolute inset-0 flex flex-col justify-between p-3 bg-[#0BCE5A]/80 text-white rounded-[10px] ${
                flippedIndex !== index ? "block" : "hidden"
              }`}
            >
              <div className="absolute top-4 p-3 bg-white rounded-full flex items-center justify-center right-4 text-xl">
                <img src={BankIcon} alt="Bank Icon" />
              </div>
              <div className="absolute bottom-3 left-3 leading-[1.1rem]">
                <p className="text-[16px]">{banks.accountName}</p>
                <p className="text-[14px]">{banks.accountNumber}</p>
                <p className="text-[12px]">{banks.bankName}</p>
              </div>
            </div>

            {/* Back Side */}
            <div
              className={`absolute inset-0 flex items-center justify-center bg-[#D32F2F]/90 text-white transform [transform:rotateY(180deg)] rounded-[10px] ${
                flippedIndex === index ? "block" : "hidden"
              }`}
            >
              <button className="relative group bg-white p-[0.5rem] flex items-center justify-center rounded-full cursor-pointer">
                <img
                  src={DeleteAccount}
                  alt="Delete Icon"
                  className="w-8 h-8"
                />
                {/* Tooltip */}
                <span className="absolute w-full whitespace-nowrap text-[15px] bottom-full mb-0 left-1/2 -translate-x-1/2 text-white text-xs py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Delete account details
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileBank;
