import Bettingimg from "../../assets/Betting.svg";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { FiChevronDown, FiX } from "react-icons/fi";

const Betting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    betProvider: "",
    customerId: "",
    amount: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [accountName, setAccountName] = useState("John Doe");
  const [accountBalance] = useState(15000);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setIsModalOpen(false);
  };

  const isFormInvalid =
    !formData.betProvider || !formData.customerId || !formData.amount;

  return (
    <>
      {/* Betting Card */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#fff] border-1 border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-3 w-full"
      >
        <img src={Bettingimg} alt="" className="w-13 mb-1" />
        <span className="text-lg text-left mt-2 font-medium text-black">
          Betting
        </span>
        <p className="text-sm text-left text-[#A2A1A1] ">
          Fund your betting wallet
        </p>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999]">
          <div className="bg-white sm:w-[600px] w-[95vw] sm:h-auto h-[min(100dvh,100vh)] max-h-screen overflow-y-auto rounded-[15px] shadow-lg px-5 py-6 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
              <h3 className="text-[18px] font-semibold text-[#000]">
                Fund Betting Wallet
              </h3>
              <button
                onClick={() => {
                  setErrors({});
                  setFormData({
                    betProvider: "",
                    customerId: "",
                    amount: "",
                  });
                  setIsModalOpen(false);
                }}
                className=" cursor-pointer text-black"
              >
                <FiX className="text-gray-700 text-[25px]" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 sm:w-[70%] mx-auto ">
              {/* Bet Provider */}
              <label className="block text-left text-[#0A2E65]/70 text-[16px] mb-2">
                Bet Provider
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Bet9ja"
                  name="betProvider"
                  value={formData.betProvider}
                  onChange={handleInputChange}
                  onBlur={(e) => validateField("betProvider", e.target.value)}
                  className={`p-3 border w-full rounded-md outline-none text-[15px] ${
                    errors.betProvider
                      ? "border-red-500"
                      : "border-[#A4A4A4] focus:border-[#0BCE5A] "
                  }`}
                />
                <FiChevronDown className="absolute top-3 right-3 text-gray-400" />
              </div>
              {errors.betProvider && (
                <p className="text-red-500 text-[13px] mt-1">
                  {errors.betProvider}
                </p>
              )}

              {/* Customer ID */}
              <label className="block text-left text-[#0A2E65]/70 text-[16px] mt-4 mb-2">
                Customer ID
              </label>
              <input
                type="text"
                placeholder="4567786"
                name="customerId"
                value={formData.customerId}
                onChange={handleInputChange}
                onBlur={(e) => validateField("customerId", e.target.value)}
                className={`p-3 border w-full rounded-md outline-none text-[15px] ${
                  errors.customerId
                    ? "border-red-500"
                    : "border-[#A4A4A4] focus:border-[#0BCE5A] "
                }`}
              />
              {errors.customerId && (
                <p className="text-red-500 text-[13px] mt-1">
                  {errors.customerId}
                </p>
              )}

              {/* Verified Name */}
              <div className="flex items-center gap-2 mt-2">
                <FaCheckCircle className="text-green-600" />
                <p className="text-[#27014F] font-medium">{accountName}</p>
              </div>

              {/* Amount */}
              <div className="flex justify-between items-center mt-5">
                <label className="text-[#0A2E65]/70 text-[16px]">Amount</label>
                <div className="text-[15px] text-[#0A2E65]/70">
                  <span className="font-semibold text-[#0A2E65]">Balance:</span>{" "}
                  ₦{accountBalance.toLocaleString("en-US")}
                </div>
              </div>
              <input
                type="text"
                placeholder="₦0.00"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                onBlur={(e) => validateField("amount", e.target.value)}
                className={`p-3 border w-full rounded-md outline-none text-[15px] mt-2 ${
                  errors.amount
                    ? "border-red-500"
                    : "border-[#A4A4A4] focus:border-[#0BCE5A] "
                }`}
              />
              {errors.amount && (
                <p className="text-red-500 text-[13px] mt-1">{errors.amount}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isFormInvalid}
                className={`mt-6 w-full py-3 mb-[2rem] rounded-md text-white font-medium ${
                  isFormInvalid
                    ? "bg-[#0BCE5A]/60 cursor-not-allowed"
                    : "bg-[#27014F] hover:bg-[#0BCE5A]"
                }`}
              >
                Fund Wallet
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Betting;
