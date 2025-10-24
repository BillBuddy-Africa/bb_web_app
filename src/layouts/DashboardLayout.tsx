// src/layouts/DashboardLayout.tsx
import { Outlet, useLocation } from "react-router-dom";
import bg from "../assets/bg_cover.svg";
import advert from "../assets/advert.svg";
import walletBG from "../assets/walletBG.svg";
import TopNavBar from "../components/NavBar";
import NavBar from "../components/BottomNavBar";
import arrow from "../assets/arrow_up (2).svg";
import plus from "../assets/plus (2).svg";
import credit from "../assets/greenarrow_down.svg";
import debit from "../assets/redarrow_up.svg";
import eye from "../assets/View_hide_light (2).svg";
import Background from "../assets/bgB.svg";
import camera from "../assets/Camera_light.svg";
import profileImg from "../assets/profile.svg";
import warning from "../assets/warning.svg";
import { HiArrowRight } from "react-icons/hi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import TopUpModal from "../components/TopUpModal";
import WithdrawalModal from "../components/WithdrawModal";

export default function DashboardLayout() {
  const location = useLocation();
  const [showBalance, setShowBalance] = useState(true);
  const [showTopupModal, setShowTopupModal] = useState(false);
  const [withdrawalModal, setWithdrawaModal] = useState(false);

  const isDashboard = location.pathname === "/dashboard";
  const isWallet = location.pathname === "/wallet";
  const isProfile = location.pathname === "/profile";

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
                  {/* Eye toggle button */}
                  <button
                    onClick={() => setShowBalance(!showBalance)}
                    className="w-10 absolute right-[-7px] top-[-20px] h-10 rounded-full cursor-pointer p-3 bg-[#00A643] flex justify-center items-center"
                  >
                    {showBalance ? (
                      <AiOutlineEye className="text-white text-xl" />
                    ) : (
                      <AiOutlineEyeInvisible className="text-white text-xl" />
                    )}
                  </button>

                  <div className="flex mt-4 justify-center items-center ">
                    <h2 className="text-[16px]">Wallet Balance</h2>
                  </div>
                  <div className="flex justify-center items-center ">
                    <p className="text-3xl font-bold mt-3">
                      {showBalance ? (
                        <>
                          ₦1,000,250.
                          <span className="text-[17px] ml-[-1px]">00</span>
                        </>
                      ) : (
                        "•••••••"
                      )}
                    </p>
                  </div>

                  <div className="flex gap-4 justify-center mt-5">
                    <button
                      onClick={() => setShowTopupModal(true)}
                      className="bg-transparent flex justify-center items-center gap-1 cursor-pointer border-white border text-white  rounded-[10px] px-3 py-2 text-sm"
                    >
                      <img src={plus} className="w-3" alt="" />
                      <p> Add Money</p>
                    </button>
                    <button
                      onClick={() => setWithdrawaModal(true)}
                      className="bg-white text-green-600 flex justify-center items-center cursor-pointer gap-1 rounded-[10px] px-3 py-2 text-[16px] "
                    >
                      <p> Withdraw</p>
                      <img src={arrow} className="w-3 ml-1" alt="" />
                    </button>
                  </div>

                  {/* Modal */}
                  <TopUpModal
                    showTopupModal={showTopupModal}
                    setShowTopupModal={setShowTopupModal}
                  />
                  <WithdrawalModal
                    withdrawalModal={withdrawalModal}
                    setWithdrawaModal={setWithdrawaModal}
                  />
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

          {isWallet && (
            <div className="flex flex-col gap-6">
              {/* Green Wallet Card */}
              <div className="relative bg-[#0BCE5A] rounded-2xl py-7 px-4 text-white w-[300px] overflow-hidden">
                {/* Decorative background image */}
                <img
                  src={walletBG}
                  alt=""
                  className="absolute bottom-0 left-0 w-[40%] opacity-40 pointer-events-none"
                />

                {/* Content above image */}
                <div className="relative border border-[#0BCE5A] z-10">
                  <div className="w-10 absolute right-[-7px] top-[-20px] h-10 rounded-full cursor-pointer p-3 bg-[#00A643]">
                    <img src={eye} alt="" />
                  </div>

                  <div className="flex mt-4 justify-center items-center">
                    <h2 className="text-[16px]">Wallet Balance</h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="text-3xl font-bold mt-3">
                      ₦1,000,250.
                      <span className="text-[17px] ml-[-1px]">00</span>
                    </p>
                  </div>

                  <div className="flex gap-4 justify-center mt-5">
                    <button className="bg-transparent flex justify-center items-center gap-1 cursor-pointer border-white border text-white rounded-[10px] px-3 py-2 text-sm">
                      <img src={plus} alt="" />
                      <p>Add Money</p>
                    </button>
                    <button className="bg-white text-green-600 flex justify-center items-center cursor-pointer gap-1 rounded-[10px] px-3 py-2 text-[16px]">
                      <p>Withdraw</p>
                      <img src={arrow} alt="" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Second Green Card */}
              <div className="rounded-3xl min-h-[12rem]  bg-white shadow-lg flex justify-center items-center">
                <div className="bg-white  rounded-2xl py-5 w-[236px] h-[168px] flex flex-col justify-between">
                  {/* Top Section */}
                  <div className="text-center">
                    <p className="text-gray-500 text-sm mb-1">
                      Daily Withdrawal Limit
                    </p>
                    <h2 className="text-xl font-semibold text-gray-900">
                      ₦500,000
                    </h2>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex justify-between gap-4  items-center text-sm mt-3">
                    <div className="flex items-center  gap-1">
                      <div>
                        <div className="flex items-center justify-between gap-1">
                          <img src={credit} alt="" />
                          <p className="text-gray-500">Total Credit</p>
                        </div>
                        <p className="text-green-600  text-right font-semibold">
                          ₦350,000
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {/* <XCircle className="text-red-500 w-4 h-4" /> */}
                      <div>
                        <div className="flex justify-center items-center gap-1 ">
                          {" "}
                          <img src={debit} alt="" />
                          <p className="text-gray-500">Total Debit</p>
                        </div>
                        <p className="text-red-600 text-right font-semibold">
                          ₦265,000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isProfile && (
            <div className="flex  h-full flex-col items-center  gap-6">
              {/* Profile Section */}
              <div className="relative bg-white  rounded-3xl shadow-md w-[300px] flex flex-col items-center justify-center h-[60%]  overflow-hidden ">
                <img
                  src={Background}
                  alt="background"
                  className="w-full absolute h-full object-cover"
                />

                {/* Profile Image */}
                <div className=" flex  flex-col items-center">
                  <div className="cursor-pointer relative">
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="w-24 h-24 cursor-pointer rounded-full border-4 border-white object-cover"
                    />
                    {/* Camera Overlay */}
                    <div className="absolute bottom-[1.7rem] right-[1.8rem] rounded-full ">
                      <img src={camera} alt="Camera Icon" className="" />
                    </div>
                  </div>
                  <div className=" text-center ">
                    <h2 className="font-semibold text-lg text-gray-800">
                      Samuel Oghene
                    </h2>
                    <button className="mt-2  relative cursor-pointer bg-green-100 text-green-700 text-sm font-medium rounded-full px-4 py-1">
                      Tier One →
                    </button>
                  </div>
                </div>

                {/* User Info */}
              </div>

              {/* Upgrade Card */}
              <div className="flex items-center justify-between bg-[#FFEEF2] border border-[#FF3366] rounded-xl px-4 py-2 w-[300px] shadow-sm">
                <div className="flex items-center gap-2">
                  <img src={warning} alt="Warning" className="w-12 mt-[2px]" />
                  <div>
                    <h3 className="font-semibold text-sm text-gray-800">
                      Upgrade Account
                    </h3>
                    <p className="text-xs leading-[0.9rem] text-gray-500">
                      Upgrade your account to access all features and keep it
                      secure
                    </p>
                  </div>
                </div>
                <HiArrowRight className="text-gray-800 w-5 h-5" />
              </div>
            </div>
          )}

          {/* Right white card */}
          <div
            className={`bg-white rounded-2xl h-full shadow-lg flex-1 p-6 w-full max-w-[80%]  overflow-y-auto ${
              !isDashboard
                ? "flex justify-center items-center"
                : "flex justify-start items-start"
            }`}
          >
            <div className="w-full h-full   overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}
