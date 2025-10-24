import Crypto from "./d_services/Crypto";
import Giftcards from "./d_services/Giftcards";
import Data from "./d_services/Data";
import Electricity from "./d_services/Electricity";
import Airtime from "./d_services/Airtime";
import CableTV from "./d_services/CableTV";
import Betting from "./d_services/Betting";
import Flight from "./d_services/Flight";
export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-5 w-full h-full  place-items-center">
      {/* 1 */}
      <Crypto />

      {/* 2 */}
      <Giftcards />

      {/* 3 */}
      <Data />

      {/* 4 */}
      <Electricity />

      {/* 5 */}
      <Airtime />

      {/* 6 */}
      <CableTV />

      {/* 7 */}
      <Betting />

      {/* 8 */}
      <Flight />
      {/* Filler to keep alignment */}
      <div className="invisible"></div>
    </div>
  );
}
