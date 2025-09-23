import "react-loading-skeleton/dist/skeleton.css";
// import CryptoBG from "../../assets/dashboard_img/crptobg.svg";
// import crypto from "../../assets/dashboard_img/dashboard_icons/akar-icons_bitcoin-fill.svg";
// import giftcardsbg from "../../assets/dashboard_img/giftcardbg.svg";
// import Giftcard from "../../assets/dashboard_img/dashboard_icons/fluent_gift-card-20-filled.svg";
// import Dataimg from "../../assets/dashboard_img/dashboard_icons/ooui_network.svg";
// import dataBg from "../../assets/dashboard_img/databg.svg";
// import Bulb from "../../assets/dashboard_img/dashboard_icons/ion_bulb-sharp.svg";
// import Bulbbg from "../../assets/dashboard_img/Bulbbg.svg";
// import Tvbg from "../../assets/dashboard_img/tvbg.svg";
// import TV from "../../assets/dashboard_img/dashboard_icons/wpf_retro-tv.svg";
// import Casino from "../../assets/dashboard_img/dashboard_icons/maki_casino.svg";
// import Casinobg from "../../assets/dashboard_img/casinobg.svg";
// import airtimebg from "../../assets/dashboard_img/airtimebg.svg";
// import Airtimeimg from "../../assets/dashboard_img/dashboard_icons/ic_round-phone-iphone.svg";

const Dashboard = () => {
  return (
    <>
      <div className="w-full overflow-hidden h-[calc(100vh-5.2rem)] mr-[2rem] mt-[5rem] rounded-tl-[30px] bg-[#fff] text-center flex flex-col">
        <div className="flex-1 overflow-y-auto pb-[1.5rem] md:px-4 p-3">
          <div className="md:h-[2rem] md:block hidden  h-[1.5rem] bg-[white] mt-[-12px] md:rounded-tl-[20px] md:ml-0 ml-[-5px] [@media(min-width:1350px)]:w-[78%] w-full fixed z-20 "></div>
          <div className=" md:ml-[2%] py-[2.3%] bg-[#fff]  ">
            <div className="w-full mt-[3rem]  ">
              <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full h-full auto-rows-fr">
                <>
                  <button
                    // onClick={cryptoKycOpenModal}
                    className="cursor-pointer  transition-transform duration-300 hover:scale-105 relative h-[146px] sm:min-w-[252px] min-w-[152px] border border-[#D0DAE6] rounded-[10px] flex flex-col items-start pl-[1rem] py-[1rem]"
                  >
                    <div className="bg-[#F8E0FF] flex justify-center items-center p-[1rem] w-fit rounded-full self-start">
                      {/* <img src={crypto} alt="" /> */}
                    </div>
                    <p className="text-[#27014F] tracking-[0.6px] text-[20px]  mt-[1rem]">
                      Crypto
                    </p>
                    {/* <img src={CryptoBG} className="absolute  right-0" alt="" /> */}
                  </button>
                </>

                <>
                  <button
                    // onClick={cryptoKycOpenModal}
                    className="cursor-pointer  transition-transform duration-300 hover:scale-105 relative h-[146px] sm:min-w-[252px] min-w-[152px] border border-[#D0DAE6] rounded-[10px] flex flex-col items-start pl-[1rem] py-[1rem]"
                  >
                    <div className="bg-[#F8E0FF] flex justify-center items-center p-[1rem] w-fit rounded-full self-start">
                      {/* <img src={Giftcard} alt="" /> */}
                    </div>
                    <p className="text-[#27014F] tracking-[0.6px] text-[20px] mt-[1rem]">
                      Gift Cards
                    </p>
                    {/* <img
                      src={giftcardsbg}
                      className="absolute right-0"
                      alt=""
                    /> */}
                  </button>
                </>
                {/* <Airtime /> */}
                <>
                  <button
                    //   onClick={cryptoKycOpenModal}
                    className="cursor-pointer  transition-transform duration-300 hover:scale-105 relative h-[146px]  sm:min-w-[252px] min-w-[152px]  border border-[#D0DAE6] rounded-[10px] flex flex-col items-start pl-[1rem] py-[1rem]"
                  >
                    <div className="bg-[#F8E0FF] flex justify-center items-center p-[1rem] w-fit rounded-full self-start">
                      {/* <img src={Dataimg} alt="" /> */}
                    </div>
                    <p className="text-[#27014F] tracking-[0.6px] text-[20px]  mt-[1rem]">
                      Data
                    </p>
                    {/* <img src={dataBg} className="absolute right-0" alt="" /> */}
                  </button>
                </>
                <>
                  <button
                    //   onClick={openModal}
                    className="cursor-pointer  transition-transform duration-300 hover:scale-105 relative h-[146px]  sm:min-w-[252px] min-w-[152px]  border border-[#D0DAE6] rounded-[10px] flex flex-col items-start pl-[1rem] py-[1rem]"
                  >
                    <div className="bg-[#F8E0FF] flex justify-center items-center p-[1rem] w-fit rounded-full self-start">
                      {/* <img src={Airtimeimg} alt="" /> */}
                    </div>
                    <p className="text-[#27014F] tracking-[0.6px] text-[20px]  mt-[1rem]">
                      Airtime
                    </p>
                    {/* <img src={airtimebg} className="absolute right-0" alt="" /> */}
                  </button>
                </>
                <>
                  <button
                    // onClick={cryptoKycOpenModal}
                    className="cursor-pointer  transition-transform duration-300 hover:scale-105 relative h-[146px]  sm:min-w-[252px] min-w-[152px]  border border-[#D0DAE6] rounded-[10px] flex flex-col items-start pl-[1rem] py-[1rem]"
                  >
                    <div className="bg-[#F8E0FF] flex justify-center items-center p-[1rem] w-fit rounded-full self-start">
                      {/* <img src={Bulb} alt="" /> */}
                    </div>
                    <p className="text-[#27014F] tracking-[0.6px] text-[20px]  mt-[1rem]">
                      Electricity
                    </p>
                    {/* <img src={Bulbbg} className="absolute right-0" alt="" /> */}
                  </button>
                </>

                <>
                  <button
                    // onClick={cryptoKycOpenModal}
                    className="cursor-pointer transition-transform duration-300 hover:scale-105 relative h-[146px]  sm:min-w-[252px] min-w-[152px]  border border-[#D0DAE6] rounded-[10px] flex flex-col items-start pl-[1rem] py-[1rem]"
                  >
                    <div className="bg-[#F8E0FF] flex justify-center items-center p-[1rem] w-fit rounded-full self-start">
                      {/* <img src={TV} alt="Casino Icon" /> */}
                    </div>
                    <p className="text-[#27014F] tracking-[0.6px] text-[20px] mt-[1rem]">
                      Cable TV
                    </p>
                    {/* <img
                      src={Tvbg}
                      className="absolute right-0"
                      alt="Casino Background"
                    /> */}
                  </button>
                </>
                <>
                  <button
                    // onClick={cryptoKycOpenModal}
                    className="cursor-pointer transition-transform duration-300 hover:scale-105 relative h-[146px]  sm:min-w-[252px] min-w-[152px]  border border-[#D0DAE6] rounded-[10px] flex flex-col items-start pl-[1rem] py-[1rem]"
                  >
                    <div className="bg-[#F8E0FF] flex justify-center items-center p-[1rem] w-fit rounded-full self-start">
                      {/* <img src={Casino} alt="Casino Icon" /> */}
                    </div>
                    <p className="text-[#27014F] tracking-[0.6px] text-[20px] mt-[1rem]">
                      Betting
                    </p>
                    {/* <img
                      src={Casinobg}
                      className="absolute right-0"
                      alt="Casino Background"
                    /> */}
                  </button>
                </>

                {/* <Support /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
