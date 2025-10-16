import { useState } from "react";
import Edit from "../assets/Edit_pen.svg";
import ProfileSecurity from "../components/profile/ProfileSecurity";
import ProfileBank from "../components/profile/ProfileBank";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<"account" | "security" | "bank">(
    "account"
  );

  const tabs = [
    { id: "account", label: "Account" },
    { id: "security", label: "Security" },
    { id: "bank", label: "Bank" },
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
      <div className="bg-white mb-6  w-full mx-auto h-[400px] overflow-y-auto">
        {activeTab === "security" && <ProfileSecurity />}
        {activeTab === "account" && (
          <div className=" w-[60%] md:px-[0.6rem]">
            <div className="flex items-center justify-between md:mb-[6%] mb-[8%]">
              <p className="text-[#7688B4] text-[15px]">Username</p>
              <p className="text-[#27014F] text-[15px]">SamuelO</p>
            </div>

            <div className="flex items-center justify-between md:mb-[6%] mb-[8%]">
              <p className="text-[#7688B4] text-[15px]">Unique ID</p>
              <p className="text-[#27014F] text-[15px]">TWJ123456</p>
            </div>

            <div className="flex items-center justify-between md:mb-[6%] mb-[8%]">
              <p className="text-[#7688B4] text-[15px]">Email address</p>
              <p className="text-[#27014F] text-[15px]">
                samuel.oghene@example.com
              </p>
            </div>

            <div className="flex items-center justify-between md:mb-[6%] mb-[8%]">
              <p className="text-[#7688B4] text-[15px]">Phone</p>
              <span className="flex gap-[2px] items-center">
                <p className="text-[#27014F] text-[15px]">+234 812 345 6789</p>
                <img src={Edit} alt="Edit" className="cursor-pointer w-4 h-4" />
              </span>
            </div>

            <div className="flex items-center justify-between md:mb-[7%] mb-[12%]">
              <p className="text-[#7688B4] text-[15px]">Date of birth</p>
              <p className="text-[#27014F] text-[15px]">April 15, 1997</p>
            </div>
          </div>
        )}

        {activeTab === "bank" && <ProfileBank />}
      </div>
    </>
  );
};

export default Profile;
