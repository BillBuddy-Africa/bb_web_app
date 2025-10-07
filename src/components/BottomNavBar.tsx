import { NavLink } from "react-router-dom";
// import { LogOut } from "lucide-react"; // optional icon (you can replace)
import LogOut from "../assets/Sign_out.svg";

const NavBar = () => {
  const navItems = [
    "Dashboard",
    "Wallet",
    "Transactions",
    "Profile",
    "Rates",
    "Referral",
    "Help",
  ];

  return (
    <nav className="flex justify-center items-center mt-6 mb-8">
      {/* White rounded bar */}
      <div className="flex items-center justify-between bg-white rounded-full shadow-md px-8 py-3">
        {/* Nav links */}
        <div className="flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-green-100 text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* Red circle logout button */}
      </div>
      <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full ml-5 transition-all duration-200 cursor-pointer hover:scale-110">
        <img src={LogOut} alt="Logout" className="w-4 h-4" />
      </button>
    </nav>
  );
};

export default NavBar;
