import bg from "../assets/background.svg";
import home from "../assets/home.svg";
import Logo from "../assets/bb_logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import eye_lines from "../assets/Eye_hide_dark.svg";
import eye from "../assets/Eye_light.svg";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "../App.css";

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    isChecked: false,
  });

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    isChecked: "",
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  // Field Validation using Switch Statement
  const validateField = (name: string, value: string | boolean | undefined) => {
    let error = "";

    switch (name) {
      case "userName":
        if (!value) error = "fullname is required";
        break;

      case "email":
        if (!value) error = "Email is required";
        else if (
          typeof value === "string" &&
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        ) {
          error = "Invalid email address";
        }
        break;

      case "password":
        if (!value) error = "Password is required";
        else if (typeof value === "string" && value.length < 8) {
          error = "Password must be at least 8 characters";
        } else if (
          typeof value === "string" &&
          !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/.test(value)
        ) {
          error = "Password must include uppercase, lowercase, and a number";
        }
        break;

      case "phoneNumber":
        if (!value) error = "Phone number is required";
        else if (typeof value === "string" && !isValidPhoneNumber(value)) {
          error = "Invalid phone number";
        }
        break;

      case "isChecked":
        if (value !== true) error = "You must agree to the terms";
        break;

      default:
        break;
    }

    setErrors((prevState) => ({
      ...prevState,
      [name]: error,
    }));

    return error;
  };

  // Handle phone number change
  const handlePhoneNumberChange = (value: string | undefined) => {
    setFormData((prevState) => ({
      ...prevState,
      phoneNumber: value || "",
    }));

    validateField("phoneNumber", value);
  };

  // Handle input changes for text fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));

    validateField(name, newValue);
  };

  return (
    <div className="mx-auto h-screen overflow-y-auto py-[3rem] w-screen bg-[#000000]">
      <img src={bg} className="absolute bottom-0 object-cover w-full" alt="" />
      <button className="cursor-pointer">
        <img
          src={home}
          className="absolute top-[2rem] left-[2rem] object-cover "
          alt=""
        />
      </button>
      {/* <div className="[@media(min-width:950px)]:w-1/2 w-full h-full hide-scrollbar overflow-y-auto"></div> */}
      <div className="relative bg-white w-[585px]  z-20 rounded-[10px] mx-auto shadow-sm">
        {/* Logo */}
        <div className="flex justify-center items-center pt-12 pb-10">
          <img src={Logo} alt="Logo" className="h-12 object-contain" />
        </div>

        {/* Content */}
        <div className="w-[80%] mx-auto mb-16">
          {/* Heading */}
          <h2 className="text-[30px] tracking-[-0.7px] text-black font-inter font-bold">
            Create an account
          </h2>
          <p className="text-sm mt-2">
            Already have an account?
            <NavLink to="/" className="text-[#0BCE5A] ml-1">
              Log in
            </NavLink>
          </p>

          {/* Form */}
          <form className="flex flex-col gap-6 mt-8">
            {/* Username */}
            <div>
              <label
                htmlFor="Username"
                className="md:hidden block mb-2 text-[16px] text-[#8b8989]"
              >
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                onBlur={() => validateField("fullName", formData.userName)}
                className={`w-full rounded-md border border-[#A4A4A4] px-3 py-4 md:py-2.5 text-[16px] outline-none focus:border-2 ${
                  errors.userName ? "border-red-600" : "focus:border-[#0BCE5A]"
                }`}
              />
              {errors.userName && (
                <p className="text-red-500 text-xs mt-1">{errors.userName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="md:hidden block mb-2 text-[16px] text-[#8b8989]"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => validateField("email", formData.email)}
                className={`w-full rounded-md border border-[#A4A4A4] px-3 py-4 md:py-2.5 text-[16px] outline-none focus:border-2 ${
                  errors.email ? "border-red-600" : "focus:border-[#0BCE5A]"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Number (disabled for now, but keep structure) */}
            <div
              className={`  ${
                errors.phoneNumber
                  ? "border-red-500"
                  : "focus:border-[#0BCE5A]"
              }`}
            >
              <label
                htmlFor="phoneNumber"
                className="md:hidden block my-2 text-[16px] text-[#8b8989]"
              >
                Phone Number
              </label>
              <PhoneInput
                placeholder="Enter your phone number"
                defaultCountry="NG"
                value={formData.phoneNumber}
                onChange={handlePhoneNumberChange}
                style={
                  {
                    "--PhoneInputCountrySelect-marginRight": "0em",
                    borderRadius: "0.375rem",
                    ...(errors.phoneNumber && {
                      border: "1px solid red", // Override with red border if there's an error
                    }),
                  } as React.CSSProperties
                }
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-[13px] mt-">
                  {errors.phoneNumber}
                </p>
              )}{" "}
              {/* Show error message if invalid */}
            </div>

            {/* Password */}
            <div className="relative">
              <label
                htmlFor="password"
                className="md:hidden block mb-2 text-[16px] text-[#8b8989]"
              >
                Password
              </label>
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={() => validateField("password", formData.password)}
                className={`w-full rounded-md border border-[#A4A4A4] px-3 py-4 md:py-2.5 text-[16px] outline-none focus:border-2 ${
                  errors.password ? "border-red-600" : "focus:border-[#0BCE5A]"
                }`}
              />
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <img src={eye} className="h-5 w-5" alt="Hide password" />
                ) : (
                  <img
                    src={eye_lines}
                    className="h-5 w-5"
                    alt="Show password"
                  />
                )}
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
            <p className="text-sm text-gray-600 mt-[-1rem]">
              Password must be at least 8 characters
            </p>

            {/* Terms */}
            <div className="flex text-[14px] gap-[6px]  ">
              <input
                className="checkbox"
                type="checkbox"
                id="terms"
                name="isChecked"
                checked={formData.isChecked}
                onChange={handleChange}
              />
              <div className="flex text-[16px] md:text-[14px]">
                <p>I agree to the </p>
                <a
                  href="https://twjhub.com/terms"
                  target="_blank"
                  className="ml-[2.5px] underline text-[#0BCE5A]"
                >
                  terms & conditions
                </a>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-[#0BCE5A] text-white mb-[4rem] font-semibold text-[17px] md:text-[14px] rounded-[10px] py-4 md:py-3 flex items-center justify-center mt-6"
            >
              Create Account
            </button>

            {/* Mobile footer */}
            {/* <div className="sm:hidden mt-6 flex items-center justify-center text-[16px]">
              <p className="font-medium text-[#27014F]">
                Already have an account?
              </p>
              <NavLink
                to="/"
                className="ml-2 font-medium text-[#9605C5] underline"
              >
                Log in
              </NavLink>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
