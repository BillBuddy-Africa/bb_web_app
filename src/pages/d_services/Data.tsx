import data from "../../assets/Data.svg";

interface Option {
  value: string;
  label: string;
  amount: string;
  name: string;
}

const options: Option[] = [
  { value: "mtn_1gb", label: "MTN 1GB", amount: "₦500", name: "MTN" },
  { value: "mtn_5gb", label: "MTN 5GB", amount: "₦2,000", name: "MTN" },
  { value: "mtn_10gb", label: "MTN 10GB", amount: "₦3,500", name: "MTN" },
  {
    value: "airtel_1.5gb",
    label: "Airtel 1.5GB",
    amount: "₦1,000",
    name: "MTN",
  },
  { value: "airtel_6gb", label: "Airtel 6GB", amount: "₦2,500", name: "MTN" },
  { value: "airtel_10gb", label: "Airtel 10GB", amount: "₦3,000", name: "MTN" },
  { value: "glo_2gb", label: "Glo 2GB", amount: "₦1,200", name: "MTN" },
  { value: "glo_7gb", label: "Glo 7GB", amount: "₦2,500", name: "MTN" },
  { value: "glo_10gb", label: "Glo 10GB", amount: "₦3,000", name: "MTN" },
  { value: "9mobile_1gb", label: "9Mobile 1GB", amount: "₦1,000", name: "MTN" },
  { value: "9mobile_5gb", label: "9Mobile 5GB", amount: "₦3,000", name: "MTN" },
  {
    value: "9mobile_10gb",
    label: "9Mobile 10GB",
    amount: "₦5,000",
    name: "MTN",
  },
];

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "none",
    outline: "none",
    textAlign: "left",
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
};


const Data = () => {
  return (
    <>
    <button className="bg-[#fff] border-1 border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-3 w-full">
      <img src={data} alt="" className="w-13 mb-1" />
      <span className="text-lg mt-2 font-medium text-left text-black">
        Data
      </span>
      <p className="text-sm text-[#A2A1A1] text-left ">
        Buy data across all networks
      </p>
    </button>


    
    </>
  );
};

export default Data;
