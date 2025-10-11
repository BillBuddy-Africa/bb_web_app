import btcIcon from "../assets/btc_bb.svg"; // replace with your icon

interface Transaction {
  id: string;
  title: string;
  type: "success" | "failed" | "pending";
  amount: string;
  date: string;
}

const Wallet = () => {
  const transactions: Transaction[] = [
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
  ];

  const statusColor = {
    success: "bg-green-100 text-green-600",
    failed: "bg-red-100 text-red-600",
    pending: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="bg-white  p-6 w-[95%] mx-auto ">
      <div>
        {transactions.map((t) => (
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
  );
};

export default Wallet;
