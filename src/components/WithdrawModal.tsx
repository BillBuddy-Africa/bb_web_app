import { FiX, FiArrowRightCircle, FiChevronDown } from "react-icons/fi";

const WithdrawalModal = ({ withdrawalModal, setWithdrawaModal }: any) => {
  if (!withdrawalModal) return null;

  return (
    <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-30">
      <div className="bg-white py-6 px-4 sm:rounded-2xl sm:w-[600px] sm:h-auto h-[min(100dvh,100vh)] max-h-screen w-[100vw] text-center relative">
        {/* Close button */}
        <div className="flex justify-end">
          <button
            onClick={() => setWithdrawaModal(false)}
            className="p-2 sm:mr-[5px] mr-[-10px] cursor-pointer"
          >
            <FiX className="text-gray-700 text-[25px]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col sm:h-[60%] justify-center">
          <form className="flex flex-col h-full items-center">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <div className="sm:w-[70%] mx-auto w-full flex flex-col justify-center">
                {/* Available Balance */}
                <h5 className="text-[#0A2E65]/60 text-[17px]">
                  Available Balance
                </h5>
                <div className="flex items-center justify-center mt-1">
                  <div className="relative text-[#000] flex items-center gap-2">
                    <span className="mb-[8px] mr-[-5px] text-[16px]">₦</span>
                    <p className="text-[32px] text-center font-semibold">
                      1,000,250
                    </p>
                    <span className="text-[16px] mt-[12px] ml-[-7px]">.00</span>
                  </div>
                </div>

                {/* Amount Input */}
                <p className="text-[#0A2E65]/60 mt-[1rem] pl-[5px] text-[15px] pb-[3px] text-left">
                  Amount
                </p>
                <div className="w-full mb-4">
                  <input
                    type="text"
                    placeholder="₦0.00"
                    value="₦500.00"
                    readOnly
                    className="p-4 px-3 border text-[15px] border-[#A4A4A4] w-full outline-none rounded-md text-[#000] focus:border-[#0BCE5A]"
                  />
                </div>

                {/* Bank Account Select (Hardcoded) */}
                <p className="text-[#0A2E65]/60 pl-[5px] text-[15px] pb-[3px] text-left">
                  Bank Account
                </p>
                <div className="w-full relative">
                  <div className="border border-[#A4A4A4] rounded-md p-4 flex justify-between items-center ">
                    <span className="text-gray-700">GTBank - 0123456789</span>
                    <FiChevronDown className="text-gray-500" />
                  </div>
                </div>

                {/* Narration */}
                <div className="flex justify-between mt-[0.5rem] items-center">
                  <p className="pt-2 pb-1 text-[14px] text-[#0A2E65]/60">
                    Narration
                  </p>
                </div>
                <div className="w-full border  rounded-md border-[#A4A4A4] focus:border-[#0BCE5A]">
                  <input
                    type="text"
                    placeholder="Savings withdrawal"
                    value="Withdrawal for rent"
                    className="w-full px-3 py-4 outline-none border-[#A4A4A4] focus:border-[#0BCE5A] text-[#000] text-[16px] rounded-md"
                  />
                </div>

                {/* Submit Button */}
                <div className="w-full mt-[1.5rem] mb-[2rem]">
                  <button
                    type="button"
                    onClick={() => console.log("Withdraw initiated")}
                    className="w-full flex justify-center items-center gap-2 bg-[#0BCE5A] cursor-pointer hover:bg-[#0aa74c] text-white text-[16px] py-3 rounded-md transition"
                  >
                    Withdraw Funds
                    <FiArrowRightCircle className="text-[18px]" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalModal;
