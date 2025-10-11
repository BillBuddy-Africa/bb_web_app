import { useState } from "react";
import btcIcon from "../assets/btc_bb.svg"; // replace with your icon

interface Transaction {
  id: string;
  title: string;
  type: "success" | "failed" | "pending";
  amount: string;
  date: string;
}

const Transactions = () => {
  const [activeTab, setActiveTab] = useState<"crypto" | "gift" | "utility">(
    "crypto"
  );

  const tabs = [
    { id: "crypto", label: "Crypto" },
    { id: "gift", label: "Gift Card" },
    { id: "utility", label: "Utility Bills" },
  ];

  const transactions: Record<string, Transaction[]> = {
    crypto: [
      {
        id: "PTF34587629015",
        title: "Bought Crypto Transfer",
        type: "failed",
        amount: "₦2,231,147",
        date: "Feb 10, 2024",
      },
      {
        id: "PTF34587629016",
        title: "Inward Crypto Transfer",
        type: "success",
        amount: "₦131,147",
        date: "Feb 10, 2024",
      },
      {
        id: "PTF34587629017",
        title: "Outward Crypto Transfer",
        type: "failed",
        amount: "₦1,231,147",
        date: "Feb 10, 2024",
      },
      {
        id: "PTF34587629018",
        title: "Outward Crypto Transfer",
        type: "pending",
        amount: "₦231,147",
        date: "Feb 10, 2024",
      },
    ],
    gift: [
      {
        id: "PTF456123890",
        title: "Amazon Gift Card Purchase",
        type: "success",
        amount: "₦45,000",
        date: "Mar 12, 2024",
      },
    ],
    utility: [
      {
        id: "PTF789345671",
        title: "Electricity Bill Payment",
        type: "pending",
        amount: "₦23,500",
        date: "Apr 4, 2024",
      },
    ],
  };

  const statusColor = {
    success: "bg-green-100 text-green-600",
    failed: "bg-red-100 text-red-600",
    pending: "bg-yellow-100 text-yellow-600",
  };

  return (
    <>
      {/* Tabs (Sticky Header) */}
      <div className="sticky top-0 z-20 flex items-start w-full  bg-white ">
        <div className="flex gap-4 mt-5 ml-5 bg-gray-100 px-3 py-2 mb-3 rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2 cursor-pointer rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Transactions */}
      <div className="bg-white mb-6  rounded-3xl p-6 w-full mx-auto h-[400px] overflow-y-auto">
        <div>
          {transactions[activeTab].map((t) => (
            <div
              key={t.id}
              className="flex justify-between items-center border-b border-[#D0DAE6]/50 py-3 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <img src={btcIcon} alt="" className="w-8 h-8" />
                <div>
                  <p className="font-medium text-gray-800">{t.title}</p>
                  <div className="flex justify-center items-center">
                    <p className="text-sm pr-2 border-r mr-2 text-gray-400">
                      {t.id}
                    </p>
                    <span
                      className={`text-[10px] px-3 py-[3px] rounded-[20px] mt-1 inline-block ${
                        statusColor[t.type]
                      }`}
                    >
                      {t.type.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{t.amount}</p>
                <p className="text-sm text-gray-400">{t.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Transactions;
