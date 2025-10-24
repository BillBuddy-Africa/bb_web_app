import airtime from "../../assets/Airtime.svg";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Airtime = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    recipient: "",
    amount: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Hard-coded account balance
  const accountBalance = 5000;

  // Simulated network images
  const images = [
    {
      id: 1,
      src: "https://upload.wikimedia.org/wikipedia/en/7/70/MTN_Group_logo.svg",
      alt: "MTN",
    },
    {
      id: 2,
      src: "https://upload.wikimedia.org/wikipedia/en/e/e7/Airtel_logo.svg",
      alt: "Airtel",
    },
    {
      id: 3,
      src: "https://upload.wikimedia.org/wikipedia/en/0/09/Glo_logo.svg",
      alt: "Glo",
    },
    {
      id: 4,
      src: "https://upload.wikimedia.org/wikipedia/en/f/fd/9mobile_logo.svg",
      alt: "9mobile",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateField = (field: string, value: string) => {
    const newErrors = { ...errors };
    if (!value.trim()) {
      newErrors[field] = "This field is required";
    } else {
      delete newErrors[field];
    }
    setErrors(newErrors);
  };

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setFormData({ ...formData, amount: amount.toString() });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Airtime Purchase:", formData);
    setIsModalOpen(false);
  };

  const isFormInvalid =
    !formData.recipient || !formData.amount || activeImage === null;

  return (
    <>
      {/* Airtime Card */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-[#fff] border border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-4 w-full transition"
      >
        <img src={airtime} alt="" className="w-13 mb-1" />
        <span className="text-lg text-left mt-2 font-medium text-black">
          Airtime
        </span>
        <p className="text-sm text-left text-[#A2A1A1]">
          Buy airtime on all networks
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[50]">
         <div className="bg-white overflow-y-auto no-scrollbar sm:w-[600px] w-[100vw] sm:h-auto h-[min(100dvh,100vh)] max-h-screen z-[50] py-6 px-4 sm:rounded-[15px] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-b-[#E2E8F0] pb-[1rem]">
              <h3 className="sm:text-[17px] text-[20px] font-semibold tracking-[1px] text-[#000]">
                Airtime Purchase
              </h3>
              <button
                onClick={() => {
                  setErrors({});
                  setFormData({
                    recipient: "",
                    amount: "",
                  });
                  setActiveImage(null);
                  setSelectedAmount(null);
                  setIsModalOpen(false);
                }}
                className="cursor-pointer text-black"
              >
                <IoClose size={25} />
              </button>
            </div>

            {/* Form Section */}
            <div className="flex justify-center mt-[1.5rem] items-center">
              <div className="sm:w-[65%] w-full">
                <form onSubmit={handleSubmit}>
                  {/* Choose Network */}
                  <p className="text-[#0A2E65]/60 pb-[3px] pl-[5px] text-[15px] text-left mt-[16px]">
                    Choose Network
                  </p>
                  <div className="flex items-center justify-around p-2 rounded-[5px] border border-[#D0DAE6]">
                    {images.map((image) => (
                      <div
                        key={image.id}
                        className={`rounded-full p-[6px] cursor-pointer transition-all ${
                          activeImage === image.id
                            ? "border-2 border-[#0BCE5A]"
                            : "border-transparent"
                        }`}
                        onClick={() => setActiveImage(image.id)}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-[40px] h-[40px] object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Phone Number */}
                  <p className="text-[#0A2E65]/60 pb-[3px] pl-[5px] text-[16px] text-left mt-[20px]">
                    Phone Number
                  </p>
                  <input
                    type="text"
                    placeholder="08153235634"
                    name="recipient"
                    value={formData.recipient}
                    onChange={handleChange}
                    onBlur={() =>
                      validateField("recipient", formData.recipient)
                    }
                    className={`p-4 border text-[15px] w-full rounded-md outline-none ${
                      errors.recipient
                        ? "border-red-600"
                        : "border-[#A4A4A4] focus:border-[#0BCE5A]"
                    }`}
                  />
                  {errors.recipient && (
                    <p className="text-red-500 text-[13px] text-left">
                      {errors.recipient}
                    </p>
                  )}

                  {/* Choose Amount */}
                  <p className="text-[#0A2E65]/60 mt-[20px] pb-[3px] pl-[5px] text-[16px] text-left">
                    Choose an amount
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {[100, 200, 500, 1000, 3000, 5000].map((amount) => (
                      <div
                        key={amount}
                        className={`py-[10px] cursor-pointer rounded-[5px] flex justify-center items-center transition-all duration-300 hover:scale-105 ${
                          selectedAmount === amount
                            ? "bg-[#F2F4FC] border border-[#326CF6] text-[#27014F]"
                            : "text-[#A4A4A4] border border-[#A4A4A4]"
                        }`}
                        onClick={() => handleAmountClick(amount)}
                      >
                        <span>₦{amount}</span>
                      </div>
                    ))}
                  </div>

                  {/* Amount Field */}
                  <div className="sm:mt-[10px] mt-[20px] flex justify-between items-center">
                    <p className="text-[#0A2E65]/60 pl-[5px] text-[16px] pb-[3px] text-left">
                      Amount
                    </p>
                    <div className="flex items-center px-[5px] text-[16px]">
                      <span className="text-[#0A2E65] mr-[2px]">Balance:</span>
                      <span className="text-[#0A2E65]/60">₦</span>
                      <span className="text-[#0A2E65]/60">
                        {accountBalance.toLocaleString("en-US")}
                      </span>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="₦100.00"
                    name="amount"
                    value={
                      formData.amount
                        ? Number(formData.amount).toLocaleString()
                        : ""
                    }
                    onChange={handleChange}
                    onBlur={() => validateField("amount", formData.amount)}
                    className={`p-4 border text-[15px] w-full rounded-md outline-none ${
                      errors.amount
                        ? "border-red-600"
                        : "border-[#A4A4A4] focus:border-[#0BCE5A]"
                    }`}
                  />
                  {errors.amount && (
                    <p className="text-red-500 text-[13px] text-left">
                      {errors.amount}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isFormInvalid}
                    className={`mt-[2rem] w-full py-3 rounded-md text-white font-medium ${
                      isFormInvalid
                        ? "bg-[#0BCE5A]/60 cursor-not-allowed"
                        : "bg-[#27014F] hover:bg-[#0BCE5A] "
                    }`}
                  >
                    Buy Airtime
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Airtime;
