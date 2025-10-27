import GiftCardImg from "../../assets/giftcard_steem.png";
import { IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import Select from "react-select";

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    borderRadius: "5px",
    padding: "4px",
    boxShadow: "none",
    outline: "none",
    textAlign: "left",
    width: "100%",
    border: state.isFocused ? "2px solid #8003A9" : "1px solid #a4a4a4",
    "&:hover": {
      border: state.isFocused ? "2px solid #8003A9" : "1px solid #a4a4a4",
    },
  }),

  option: (provided: any, state: any) => ({
    ...provided,
    cursor: "pointer",
    textAlign: "left",
    backgroundColor: state.isSelected
      ? "#8003A9"
      : state.isFocused
      ? "#F8E0FF" // Hover background color
      : "#fff",
    color: state.isSelected ? "#fff" : "#27014F", // Text color change on selection
  }),

  menu: (provided: any) => ({
    ...provided,
    width: "250px", // Set width wider than the input
    zIndex: 9999,
  }),
  menuPortal: (base: any) => ({
    ...base,
    zIndex: 9999,
  }),
};

const simulatedGiftCards = [
  {
    productId: 1,
    productName: "Amazon Gift Card",
    logoUrls: [GiftCardImg],
    country: { isoName: "US" },
  },
  {
    productId: 2,
    productName: "iTunes Gift Card",
    logoUrls: [GiftCardImg],
    country: { isoName: "US" },
  },
  {
    productId: 3,
    productName: "Google Play Gift Card",
    logoUrls: [GiftCardImg],
    country: { isoName: "US" },
  },
  {
    productId: 4,
    productName: "Steam Gift Card",
    logoUrls: [GiftCardImg],
    country: { isoName: "UK" },
  },
  {
    productId: 5,
    productName: "Netflix Gift Card",
    logoUrls: [GiftCardImg],
    country: { isoName: "CA" },
  },
  {
    productId: 6,
    productName: "Spotify Gift Card",
    logoUrls: [GiftCardImg],
    country: { isoName: "US" },
  },
];

const categories = [
  { value: "Entertainment", label: "Entertainment" },
  { value: "Shopping", label: "Shopping" },
  { value: "Gaming", label: "Gaming" },
];
const countries = [
  { value: "US", label: "United States" },
  { value: "UK", label: "United Kingdom" },
  { value: "CA", label: "Canada" },
];
type ModalProps = {
  onNext: () => void;
  onBack: () => void;
  onClose: () => void;
};

const AvailableGiftCards = ({ onNext, onClose }: ModalProps) => {
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div
      id="scrollableDiv"
      className="text-center md:rounded-[15px] overflow-y-aut w-full  hide-scrollbar  space-y-"
      style={{ height: "90vh", overflow: "auto" }}
    >
      <div className="  px-3 bg-white">
        <div className="sticky  top-0 z-20 w-full  flex items-center border-b border-b-[#E2E8F0] py-[1rem]  justify-between bg-white">
          <h3 className="text-[17px] tracking-[1px] text-[#000]">Gift Cards</h3>
          <button
            className="cursor-pointer p-4"
            onClick={() => {
              // setAllCards([]); coming from store
              onClose();
            }}
          >
            <IoMdClose className="text-[25px]" />
          </button>
        </div>
        {/* inittially was sticky not fixed  and top-60px */}
        <div className="pt-4 w-full  pb-4 z-20 sticky top-[4.2rem] bg-white flex flex-col gap-4 sm:flex-row md:items-center md:gap-4">
          {/* Country Select */}
          <div className="w-full md:w-[18%]">
            <Select
              options={countries}
              value={selectedCountry}
              //   onChange={handleCountryChange}
              //   components={{
              //     SingleValue: customSingleValue,
              //     Option: customOption,
              //   }}
              styles={customStyles}
              className="custom-select"
              isSearchable={false}
            />
          </div>

          {/* Category Select */}
          <div className="w-full md:w-auto">
            <Select
              options={categories}
              value={selectedCategory}
              //   onChange={handleCategoryChange}
              styles={customStyles}
              placeholder="Select Category"
            />
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search Gift Card"
              name="searchTerm"
              value={searchTerm}
              onChange={handleSearchChange}
              className="p-2.5 pl-3 pr-10 border text-[15px] border-[#A4A4A4] w-full focus:border-2 outline-none rounded-[5px] focus:border-purple-800"
            />
            <FiSearch
              size={22}
              className="absolute bottom-[0.60rem] right-3 text-gray-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-[1rem] col-span-full">
          {simulatedGiftCards.map((card) => (
            <button
              key={card.productId}
              onClick={() => {
                console.log("Clicked:", card.productName);
                // Optionally set selected state here
              }}
              className="flex flex-col bg-white transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              <img
                src={card.logoUrls[0]}
                alt={card.productName}
                className="w-full sm:h-[150px] h-[120px] object-cover rounded-[10px] mb-1.5"
              />
              <h4 className="text-[#000] ml-[3px] text-left font-semibold text-[15px]">
                {card.productName}
              </h4>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableGiftCards;
