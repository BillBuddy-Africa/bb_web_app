// src/layouts/DashboardLayout.tsx
import { Outlet, useLocation } from "react-router-dom";
import bg from "../assets/bg_cover.svg";
import advert from "../assets/advert.svg";
import walletBG from "../assets/walletBG.svg";
import TopNavBar from "../components/NavBar";
import NavBar from "../components/BottomNavBar";

export default function DashboardLayout() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className="relative min-h-screen bg-[#f8f9fb] overflow-hidden">
      {/* Navbar fixed at the top */}
      <TopNavBar />

      {/* Background Image */}
      <img className="absolute inset-0 w-full  object-cover" src={bg} alt="" />

      {/* Main Content — perfectly centered */}
      <div className="relative flex items-center justify-center h-[calc(100vh-9rem)]    px-4 mt-[4rem]">
        <div className="w-full max-w-7xl flex justify-center items-center gap-6">
          {isDashboard && (
            <div className="flex flex-col gap-6">
              {/* Green Wallet Card */}
              <div className="relative bg-[#0BCE5A] rounded-2xl p-6 text-white w-[300px] overflow-hidden">
                {/* Decorative background image */}
                <img
                  src={walletBG}
                  alt=""
                  className="absolute bottom-0 left-0 w-[40%] opacity-40 pointer-events-none"
                />

                {/* Content above image */}
                <div className="relative z-10">
                  <h2 className="text-lg font-semibold">Wallet Balance</h2>
                  <p className="text-3xl font-bold mt-3">₦1,000,250.00</p>

                  <div className="flex justify-between mt-5">
                    <button className="bg-white text-green-600 rounded-full px-3 py-1 text-sm font-medium">
                      + Add Money
                    </button>
                    <button className="bg-white text-green-600 rounded-full px-3 py-1 text-sm font-medium">
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>

              {/* Second Green Card */}
              <img
                className="w-[300px] h-[180px] object-cover"
                src={advert}
                alt=""
              />
            </div>
          )}

          {/* Right white card */}
          <div
            className={`bg-white rounded-2xl shadow-sm flex-1 p-6 max-w-[900px] ${
              !isDashboard
                ? "flex justify-center items-center"
                : "grid grid-cols-3 gap-6"
            }`}
          >
            {isDashboard ? (
              [
                "Crypto",
                "Gift Card",
                "Data",
                "Electricity",
                "Airtime",
                "Cable TV",
                "Betting",
                "Flight",
              ].map((service) => (
                <div
                  key={service}
                  className="bg-[#f8f9fb] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col justify-center items-center py-8"
                >
                  <span className="text-lg font-medium text-gray-700">
                    {service}
                  </span>
                </div>
              ))
            ) : (
              <h2 className="text-gray-500 text-2xl font-semibold">
                Coming Soon 🚀
              </h2>
            )}
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}
