import ToggleButton from "./ToggleButton";

const ProfileSecurity = () => {
  return (
    <div className="mt-[5%] md:mt-[1%] lg:mt-[-1%] w-full  md:w-[60%] lg:w-[50%]">
      {/* Update Password */}
      <div className="flex items-center justify-between leading-[1.2rem]">
        <div className="flex mt-[2rem] md:mt-0 flex-col">
          <p className="font-[500] text-[17px] md:text-[15px]">
            Update Password
          </p>
          <p className="md:text-[12px] text-[14px] text-[#7688B4]">
            Change your old password to a new one
          </p>
        </div>

        <button className="text-[#0BCE5A] whitespace-nowrap cursor-pointer">
          Change Password
        </button>
      </div>

      {/* Update PIN */}
      <div className="flex items-center md:mt-[10%] mt-[16%] justify-between leading-[1.2rem]">
        <div className="flex flex-col">
          <p className="font-[500] text-[17px] md:text-[15px]">Update PIN</p>
          <p className="md:text-[12px] text-[14px] text-[#7688B4]">
            Change or reset your TWJ PIN
          </p>
        </div>

        <button className="text-[#0BCE5A] cursor-pointer">Change PIN</button>
      </div>

      {/* Two-Factor Authentication */}
      <div className="flex items-center md:mt-[10%] mt-[16%] justify-between leading-[1.2rem]">
        <div className="flex flex-col">
          <p className="font-[500] md:text-[15px] text-[17px]">
            Two-Factor Authentication
          </p>
          <p className="md:text-[12px] text-[14px] text-[#7688B4]">
            Protect your TWJ account from unauthorised <br /> transactions using
            a software token
          </p>
        </div>

        <ToggleButton isOn={true} onToggle={() => {}} />
      </div>
    </div>
  );
};

export default ProfileSecurity;
