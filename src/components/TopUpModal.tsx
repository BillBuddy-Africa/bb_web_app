import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";

const TopUpModal = ({ showTopupModal, setShowTopupModal }: any) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("1234567890");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!showTopupModal) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      {/* <div className="p-[0.8rem] rounded-[20px] bg-[#fff]/20"> */}
        <div className="bg-white py-6 px-4 sm:rounded-2xl sm:w-[600px] w-[100vw] text-center relative">
          {/* Close Button */}
          <button
            onClick={() => setShowTopupModal(false)}
            className="absolute top-5 cursor-pointer right-5 text-black"
          >
            <IoMdClose className="text-[25px]" />
          </button>

          {/* Header */}
          <div className="flex flex-col items-center justify-center mt-6">
            <h4 className="text-[#27014F] font-semibold mt-[1rem] text-[24px]">
              Account Top-up
            </h4>
            <p className="text-[#0A2E65]/60 tracking-[1px] text-[16px] leading-[1.5rem] mb-6">
              Transfer money to your virtual account wallet{" "}
              <br className="sm:block hidden" />
              using the account number below.
            </p>
          </div>

          {/* Account Details */}
          <div className="sm:w-[77%] w-full mx-auto text-[#022B69]">
            <div className="flex justify-between mb-4">
              <p>Account Name</p>
              <p>Billbuddy Technologies Ltd</p>
            </div>

            <div className="flex justify-between mb-4 items-center">
              <p>Account Number</p>
              <div className="flex items-center text-[#8003A9] gap-2 relative">
                <span>1234567890</span>
                <button
                  onClick={handleCopy}
                  className="cursor-pointer text-[#8003A9] hover:text-[#5d0080]"
                >
                  <FaRegCopy className="text-lg" />
                </button>

                {copied && (
                  <span className="absolute -top-6 right-0 flex items-center gap-1 text-[#32A071] text-sm bg-[#32A071]/20 px-2 py-[1px] rounded-md">
                    <FaRegCheckCircle /> Copied!
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-between mb-8">
              <p>Bank Name</p>
              <p>Example Bank PLC</p>
            </div>
          </div>
        </div>
     \
    </div>
  );
};

export default TopUpModal;
