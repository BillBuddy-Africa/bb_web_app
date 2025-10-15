import { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<"account" | "security" | "bank">(
    "account"
  );

  const tabs = [
    { id: "account", label: "Account" },
    { id: "Security", label: "Security" },
    { id: "Bank", label: "Bank" },
  ];
  return (
    <>
      {/* Tabs (Sticky Header) */}
      <div className="sticky top-0 z-20 flex items-start w-full  bg-white ">
        <div className="flex gap-4 mt-5 ml-5 bg-gray-100 px-3 py-2 mb-3 rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-1 cursor-pointer rounded-full font-medium transition-all ${
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
        <div>hi</div>
      </div>
    </>
  );
};

export default Profile;
