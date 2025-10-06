import { Bell } from "lucide-react";
import Logo from "../assets/Logo_dashboard.svg";
import pofile from "../assets/profile_img.svg";

const TopNavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white flex justify-between items-center px-8 py-3 z-50">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <img src={Logo} alt="" />
      </div>

      {/* Center - Active Page */}
      <h2 className="uppercase tracking-wider text-sm font-medium">
        Dashboard
      </h2>

      {/* Right - Icons */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full">
          <Bell className="text-black" size={18} />
        </div>
        <img
          src={pofile}
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
};

export default TopNavBar;
