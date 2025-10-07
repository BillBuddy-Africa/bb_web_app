export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-6 w-full h-full place-items-center">
      {/* 1 */}
      <div className="bg-[#f8f9fb] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col justify-center items-center py-8 w-full">
        <span className="text-lg font-medium text-gray-700">Crypto</span>
      </div>

      {/* 2 */}
      <div className="bg-[#f8f9fb] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col justify-center items-center py-8 w-full">
        <span className="text-lg font-medium text-gray-700">Gift Card</span>
      </div>

      {/* 3 */}
      <div className="bg-[#f8f9fb] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col justify-center items-center py-8 w-full">
        <span className="text-lg font-medium text-gray-700">Data</span>
      </div>

      {/* 4 */}
      <div className="bg-[#f8f9fb] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col justify-center items-center py-8 w-full">
        <span className="text-lg font-medium text-gray-700">Electricity</span>
      </div>

      {/* 5 */}
      <div className="bg-[#f8f9fb] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col justify-center items-center py-8 w-full">
        <span className="text-lg font-medium text-gray-700">Airtime</span>
      </div>

      {/* 6 */}
      <div className="bg-[#f8f9fb] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col justify-center items-center py-8 w-full">
        <span className="text-lg font-medium text-gray-700">Cable TV</span>
      </div>

      {/* 7 */}
      <div className="bg-[#f8f9fb] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col justify-center items-center py-8 w-full">
        <span className="text-lg font-medium text-gray-700">Betting</span>
      </div>

      {/* 8 */}
      <div className="bg-[#f8f9fb] hover:bg-gray-100 cursor-pointer rounded-xl flex flex-col justify-center items-center py-8 w-full">
        <span className="text-lg font-medium text-gray-700">Flight</span>
      </div>

      {/* Filler to keep alignment */}
      <div className="invisible"></div>
    </div>
  );
}
