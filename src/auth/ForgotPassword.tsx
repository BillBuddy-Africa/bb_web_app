import bg from "../assets/background.svg";
import home from "../assets/home.svg";
import Logo from "../assets/bb_logo.svg";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [emailChecked, setEmailChecked] = useState(false);

  const [token, setToken] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
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
  // Handle input change
  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      // Allow only digits
      const newOtp = [...token];
      newOtp[index] = value;
      setToken(newOtp);

      // Move to the next field automatically
      if (value && index < token.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  // Handle backspace and navigation
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && token[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  // Handle paste event
  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("text");
    if (/^\d{6}$/.test(pasteData)) {
      const newOtp = pasteData.split("");
      setToken(newOtp);
      inputRefs.current[5]?.focus();
    }
  };

  const maskEmail = (email: string) => {
    const [name, domain] = email.split("@");
    const maskedName = name[0] + "***" + name.slice(-3);
    return `${maskedName}@${domain}`;
  };

  return (
    <>
      {!emailChecked ? (
        <div className="flex justify-center items-center h-screen w-screen bg-[#000000]">
          <img
            src={bg}
            className="absolute bottom-0 object-cover w-full"
            alt=""
          />
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
                Reset Password
              </h2>
              <p className="text-[14px] mt-[5px]">
                Please enter your registered email address to reset your
                password.
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
                    placeholder="Enter your registered email"
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
                    <p className="text-red-500 text-[13px] mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <button
                  className={`bg-[#0BCE5A] cursor-pointer md:mt-[2rem] md:text-[16px] text-[18px] mt-[1rem] font-semibold text-white md:p-3 p-4  rounded-[10px]   `}
                  // disabled={isFormInvalid}
                  onClick={() => setEmailChecked(true)}
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen w-screen bg-[#000000]">
          <img
            src={bg}
            className="absolute bottom-0 object-cover w-full"
            alt=""
          />
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
                Verify Account
              </h2>
              <p className="text-[14px] mt-[5px]">
                Please enter the code sent to your email{" "}
                <span className="text-[#0BCE5A]">
                  {formData.email && maskEmail(formData.email)}
                </span>
              </p>

              <div className="flex flex-col md:mt-[2rem] mt-[1rem]">
                <div className="flex justify-center gap-[1rem] ">
                  {token.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        inputRefs.current[index] = el;
                      }}
                      id={`otp-${index}`}
                      type="tel"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(e, index)}
                      onPaste={handleOtpPaste}
                      autoFocus={index === 0}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="focus:border-[#0BCE5A] sm:w-[55px] sm:h-[55px] w-[45px] h-[45px] font-semibold text-[32px] text-center focus:border-2 outline-none p-2.5 border border-[#A4A4A4] rounded-md"
                    />
                  ))}
                </div>

                <NavLink
                  to="/reset_password"
                  className={`bg-[#0BCE5A] text-center cursor-pointer md:mt-[3rem] md:text-[16px] text-[18px] mt-[1rem] font-semibold text-white md:p-3 p-4  rounded-[10px]   `}
                  // disabled={isFormInvalid}
                >
                  Verify Account
                </NavLink>
                {/* <button
                  className={`bg-[#0BCE5A] cursor-pointer md:mt-[3rem] md:text-[16px] text-[18px] mt-[1rem] font-semibold text-white md:p-3 p-4  rounded-[10px]   `}
                  // disabled={isFormInvalid}
                >
                  Verify Account
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgotPassword;
