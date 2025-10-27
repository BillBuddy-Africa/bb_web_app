import GC from "../../assets/GC.svg";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import SellGiftCard from "../../components/giftcard_components/SellGiftCard";
import BuyGiftCard from "../../components/giftcard_components/BuyGiftCard";
import AvailableGiftCards from "../../components/giftcard_components/AvailableGiftCards";

const Giftcards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStack, setModalStack] = useState<string[]>([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openNestedModal = (view: string) => {
    setModalStack((prev) => [...prev, view]);
    setIsModalOpen(false);
  };

  const goBack = () => setModalStack((prev) => prev.slice(0, -1));
  const closeNestedModal = () => setModalStack([]);

  const currentView = modalStack[modalStack.length - 1];

  return (
    <>
      <button
        onClick={openModal}
        className="bg-[#fff] border-1 border-[#D0DAE6] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col p-3 w-full"
      >
        <img src={GC} alt="" className="w-13 mb-1" />
        <span className="text-lg mt-2 font-medium text-left text-black">
          Gift Card
        </span>
        <p className="text-sm text-left text-[#A2A1A1] ">
          Buy and sell gift cards
        </p>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex  items-center justify-center bg-black/40  z-[20]">
          <div className="bg-white md:w-[750px]  w-screen md:h-auto h-[min(100dvh,100vh)] max-h-screen overflow-y-auto z-[50]   p-4 md:rounded-[15px] flex flex-col">
            <div className="flex items-center  border-b border-b-[#E2E8F0] pb-[1rem] pr-[10px] justify-between">
              <h3 className="text-[17px] tracking-[1px]  text-[#27014F] ">
                Gift Cards
              </h3>
              <button className="cursor-pointer" onClick={closeModal}>
                <IoMdClose className="text-[25px]" />
              </button>
            </div>

            <div className=" block sm:flex sm:mx-[2rem] mx-1 justify-center mt-[1.5rem] py-[2.5rem] gap-[20px] items-center">
              <div className="sm:mb-0 mb-7  ">
                <BuyGiftCard onOpenNestedModal={openNestedModal} />
              </div>
              <SellGiftCard />
            </div>
          </div>
        </div>
      )}

      {modalStack.length > 0 && (
        <Modal onClose={closeNestedModal}>
          {currentView === "giftcard" && (
            <AvailableGiftCards
              onNext={() => openNestedModal("UniqueGiftCard")}
              onClose={closeNestedModal}
              onBack={goBack}
            />
          )}
          {/* {currentView === "UniqueGiftCard" && (
            <UniqueGiftCard
              onNext={() => openNestedModal("BuyUniqueGiftCard")}
              onClose={closeNestedModal}
              onBack={goBack}
            />
          )} */}
          {/* {currentView === "BuyUniqueGiftCard" && (
            <BuyUniqueGiftCard
              onClose={closeNestedModal}
              onBack={goBack}
              onSubmit={handleSubmitOrder}
            />
          )} */}
        </Modal>
      )}
    </>
  );
};

export default Giftcards;

// Rendered compnents
type ModalWrapperProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ children }: ModalWrapperProps) => (
  <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50">
    <div className="p-[0.8rem]  rounded-[20px] bg-[#fff]/20">
      <div className="bg-white overflow-y-auto px-[1rem] md:w-[850px] w-[100vw] md:h-auto h-[min(100dvh,100vh)] max-h-screen     z-[50]   md:rounded-[15px] shadow-lg flex flex-col">
        {children}
      </div>
    </div>
  </div>
);
