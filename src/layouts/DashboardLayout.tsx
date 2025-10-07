// src/layouts/DashboardLayout.tsx
import { Outlet, useLocation } from "react-router-dom";
import bg from "../assets/bg_cover.svg";
import advert from "../assets/advert.svg";
import walletBG from "../assets/walletBG.svg";
import TopNavBar from "../components/NavBar";
import NavBar from "../components/BottomNavBar";
import arrow from "../assets/arrow_up (2).svg";
import plus from "../assets/plus (2).svg";
import eye from "../assets/View_hide_light (2).svg";

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
        <div className="w-full  h-full max-h-[90%] max-w-7xl flex justify-center items-center gap-6">
          {isDashboard && (
            <div className="flex  flex-col gap-6">
              {/* Green Wallet Card */}
              <div className="relative bg-[#0BCE5A]  rounded-2xl py-7 px-4 text-white w-[300px] overflow-hidden">
                {/* Decorative background image */}
                <img
                  src={walletBG}
                  alt=""
                  className="absolute bottom-0 left-0 w-[40%] opacity-40 pointer-events-none"
                />

                {/* Content above image */}
                <div className="relative border border-[#0BCE5A] z-10">
                   <div className="w-10 absolute right-[-7px] top-[-20px] h-10 rounded-full cursor-pointer p-3 bg-[#00A643]  ">
                      <img src={eye} alt="" />
                    </div>
             
                  <div className="flex mt-4 justify-center items-center ">
                    <h2 className="text-[16px]">Wallet Balance</h2>
                  </div>
                  <div className="flex justify-center items-center ">
                    <p className="text-3xl font-bold mt-3">
                      ₦1,000,250.
                      <span className="text-[17px] ml-[-1px]">00</span>
                    </p>
                  </div>

                  <div className="flex gap-4 justify-center mt-5">
                    <button className="bg-transparent flex justify-center items-center gap-1 cursor-pointer border-white border text-white  rounded-[10px] px-3 py-2 text-sm font-[600]">
                      <img src={plus} alt="" />
                      <p> Add Money</p>
                    </button>
                    <button className="bg-white text-green-600 flex justify-center items-center cursor-pointer gap-1 rounded-[10px] px-3 py-2 text-[16px] font-[600]">
                      <p> Withdraw</p>
                      <img src={arrow} alt="" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Second Green Card */}
              <div className=" rounded-3xl shadow-lg flex justify-center items-center">
                <img
                  className="w-[300px]   object-contain"
                  src={advert}
                  alt=""
                />
              </div>
            </div>
          )}

          {/* Right white card */}
          <div
            className={`bg-white rounded-2xl h-full shadow-lg flex-1 p-6 w-full max-w-[900px]  overflow-y-auto ${
              !isDashboard
                ? "flex justify-center items-center"
                : "flex justify-start items-start"
            }`}
          >
            <div className="w-full h-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}
