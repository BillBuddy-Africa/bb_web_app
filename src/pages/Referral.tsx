const Referral = () => {
  const transactions = [
    { id: 1, name: "Jane Doe", status: "PENDING", date: "Feb 10, 2024" },
    { id: 2, name: "Ken Okon", status: "SUCCESS", date: "Feb 10, 2024" },
    { id: 3, name: "Stephanie Cooker", status: "FAILED", date: "Feb 10, 2024" },
    { id: 4, name: "Emmanuel Fred", status: "SUCCESS", date: "Feb 10, 2024" },
    { id: 5, name: "Manfredi Dwayne", status: "FAILED", date: "Feb 10, 2024" },
    { id: 6, name: "Jennifer Okpai", status: "SUCCESS", date: "Feb 10, 2024" },
    { id: 7, name: "Chinelo Nwanya", status: "PENDING", date: "Feb 10, 2024" },
    { id: 8, name: "Arinze Obi", status: "FAILED", date: "Feb 10, 2024" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "SUCCESS":
        return "bg-green-100 text-green-600";
      case "FAILED":
        return "bg-red-100 text-red-600";
      case "PENDING":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };
  return (
    <div className="bg-white rounded-xl mt-[-1rem] p-6 shadow-sm w-full">
      {transactions.map((tx) => (
        <div
          key={tx.id}
          className="flex items-center justify-between border-b border-gray-100 py-3 last:border-none"
        >
          <div>
            <p className="font-medium text-[#0A2E65]">{tx.name}</p>
            <span
              className={`text-[10px] font-medium px-2 py-[2px] rounded-md ${getStatusColor(
                tx.status
              )}`}
            >
              {tx.status}
            </span>
          </div>
          <p className="text-gray-500 text-sm">{tx.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Referral;
