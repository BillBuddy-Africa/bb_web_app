import bg from "../assets/background.svg";
import home from "../assets/home.svg";
import Logo from "../assets/bb_logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import eye_lines from "../assets/Eye_hide_dark.svg";
import eye from "../assets/Eye_light.svg";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
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
            Log in to your account
          </h2>
          <p className="text-[14px] mt-[5px]">
            Don’t have an account?
            <NavLink to="/signup" className="text-[#0BCE5A] ml-[5px]">
              Create account
            </NavLink>
          </p>

          <div className="flex flex-col md:mt-[2rem] mt-[1rem]">
            <div className="w-full mb-4">
              <label
                htmlFor="email"
                className="md:hidden block font-semibold mt-2 text-[16px] text-[#8b8989] "
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={() => validateField("email", formData.email)}
                className={`py-4 md:p-2.5 px-3  border  text-[16px]  border-[#A4A4A4] w-full focus:border-2  outline-none rounded-md ${
                  errors.email
                    ? "border border-red-600"
                    : "focus:border-[#0BCE5A]"
                } `}
              />
              {errors.email && (
                <p className="text-red-500 text-[13px] mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative w-full">
              <label
                htmlFor="password "
                className="md:hidden font-semibold block mt-2 text-[16px] text-[#8b8989] "
              >
                Password
              </label>
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                onBlur={() => validateField("password", formData.password)}
                className={`py-4 md:py-2.5 px-3   text-[16px] border  border-[#A4A4A4] w-full focus:border-2 outline-none rounded-md ${
                  errors.password
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
            {/* {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}

            {loginError && (
              <p className="text-red-600 text-[14px]  mt-1">{loginError}</p>
            )} */}

            <NavLink
              to="/forgot_password"
              className="md:text-[13px] text-[16px] text-end cursor-pointer text-[#27014F] underline bold-semibold md:mt-[5px] mt-[1rem] mb-[11px]"
            >
              Forgot password?
            </NavLink>

            <button
              className={`bg-[#0BCE5A] cursor-pointer md:mt-[2rem] md:text-[16px] text-[18px] mt-[1rem] font-semibold text-white md:p-3 p-4  rounded-[10px]   `}
              // disabled={isFormInvalid}
            >
              {/* {isLoadingLogin ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  </div>
                ) : (
                  "Log In"
                )} */}
              Log In
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

export default Login;
