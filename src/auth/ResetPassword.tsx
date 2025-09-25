import bg from "../assets/background.svg";
import home from "../assets/home.svg";
import Logo from "../assets/bb_logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import eye_lines from "../assets/Eye_hide_dark.svg";
import eye from "../assets/Eye_light.svg";

const ResetPassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  // Field Validation using Switch Statement
  const validateField = (fieldName: string, value: string) => {
    switch (fieldName) {
      case "email":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value.trim()) {
          setErrors((prev) => ({
            ...prev,
            email: "This field is required",
          }));
        } else if (!emailRegex.test(value)) {
          setErrors((prev) => ({
            ...prev,
            email: "Please enter a valid email",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            email: "",
          }));
        }
        break;

      case "password":
        if (value.length === 0) {
          setErrors((prev) => ({
            ...prev,
            password: "This field is required",
          }));
        } else if (value.length < 8) {
          setErrors((prev) => ({
            ...prev,
            password: "Please enter a valid password",
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            password: "",
          }));
        }
        break;

      default:
        break;
    }
  };

  // Update form field value
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#000000]">
      <img src={bg} className="absolute bottom-0 object-cover w-full" alt="" />
      <button className="cursor-pointer">
        <img
          src={home}
          className="absolute top-[2rem] left-[2rem] object-cover "
          alt=""
        />
      </button>
      <div className="bg-white w-[585px] z-20 rounded-[10px]">
        <div className="flex justify-center mt-[3rem] mb-[2rem] items-center ">
          <img src={Logo} alt="" />
        </div>

        <div className=" mb-[4rem]  w-[80%]  mx-auto">
          <h2 className="text-[30px] tracking-[-0.7px] text-[#000000] inter-font">
            Password Reset
          </h2>
          <p className="text-[14px] mt-[5px]">
            Please enter your new password.
          </p>

          <div className="flex flex-col md:mt-[2rem] mt-[1rem]">
            <div className="relative w-full">
              <label
                htmlFor="password "
                className="md:hidden font-semibold block mt-2 text-[16px] text-[#8b8989] "
              >
                Password
              </label>
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="New Password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                onBlur={() =>
                  validateField("newPassword", formData.newPassword)
                }
                className={`py-4 md:py-2.5 px-3   text-[16px] border  border-[#A4A4A4] w-full focus:border-2 outline-none rounded-md ${
                  errors.newPassword
                    ? "border border-red-600"
                    : "focus:border-[#0BCE5A]"
                } `}
              />

              <div
                className={`absolute  cursor-pointer right-[0.8rem]  md:bottom-[0.7rem] bottom-[1rem]
                  }`}
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <img src={eye} className="w-full h-full" alt="" />
                ) : (
                  <img
                    src={eye_lines}
                    className=" top-[1.5px]  left-[px]"
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="relative mt-[1rem] w-full">
              <label
                htmlFor="password "
                className="md:hidden font-semibold block mt-2 text-[16px] text-[#8b8989] "
              >
                Password
              </label>
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                onBlur={() =>
                  validateField("confirmPassword", formData.confirmPassword)
                }
                className={`py-4 md:py-2.5 px-3   text-[16px] border  border-[#A4A4A4] w-full focus:border-2 outline-none rounded-md ${
                  errors.confirmPassword
                    ? "border border-red-600"
                    : "focus:border-[#0BCE5A]"
                } `}
              />

              <div
                className={`absolute  cursor-pointer right-[0.8rem]  md:bottom-[0.7rem] bottom-[1rem]
                  }`}
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <img src={eye} className="w-full h-full" alt="" />
                ) : (
                  <img
                    src={eye_lines}
                    className=" top-[1.5px]  left-[px]"
                    alt=""
                  />
                )}
              </div>
            </div>

            <button
              className={`bg-[#0BCE5A] cursor-pointer md:mt-[2rem] md:text-[16px] text-[18px] mt-[1rem] font-semibold text-white md:p-3 p-4  rounded-[10px]   `}
              // disabled={isFormInvalid}
            >
              Submit Password
            </button>

            <div className="hidden mt-5 mb-15 items-center justify-center text-[16px]">
              <p className="font-[500] text-[#27014F]">
                Don't have an account?
              </p>
              <NavLink
                to="/signup"
                className="cursor-pointer  ml-[5px] text-[#9605C5]"
              >
                Create account
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
