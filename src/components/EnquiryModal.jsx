import React, { useMemo, useState } from "react";
import { X, ChevronDown, Mail } from "lucide-react";

function EnquiryDropdown({ isOpen, onClose, onSubmit, planName = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    countryCode: "+92",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const orderId = useMemo(() => {
    return Math.floor(10000 + Math.random() * 90000);
  }, [isSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const isValidEmail = (value) => /^\S+@\S+\.\S+$/.test(value.trim());
  const isValidPhone = (value) => {
    const cleaned = value.replace(/\s|-/g, "");
    return /^(?:\+92|0)?3[0-9]{9}$/.test(cleaned);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter phone number";
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter email address";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit?.(formData);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onClose?.();
  };

  return (
    <div
      className={`overflow-hidden border-t border-[#d7dfe8] bg-[#f8f8f8] transition-all duration-300 ${
        isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="relative px-6 py-6">
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-5 top-5 text-[#233d91] transition-colors hover:text-[#ef9807]"
        >
          <X size={22} strokeWidth={2.2} />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-3">
              {/* Full name */}
              <div>
                <label className="mb-2 block text-[15px] font-medium text-[#555]">
                  Full name <span className="text-[#555]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className={`h-[44px] w-full rounded-[4px] bg-white px-4 text-[15px] text-[#222] outline-none placeholder:text-[#bcbcbc] focus:border-[#3959a8] ${
                    errors.fullName
                      ? "border border-red-500"
                      : "border border-[#d7d7d7]"
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-[15px] font-medium text-[#555]">
                  Tel / Cell number <span className="text-[#555]">*</span>
                </label>

                <div
                  className={`flex h-[44px] overflow-hidden rounded-[4px] bg-white ${
                    errors.phone
                      ? "border border-red-500"
                      : "border border-[#d7d7d7]"
                  }`}
                >
                  <div className="flex min-w-[82px] items-center gap-2 border-r border-[#d7d7d7] px-3 text-[15px] text-[#444]">
                    <span className="text-[16px]">🇵🇰</span>
                    <span>{formData.countryCode}</span>
                    <ChevronDown size={14} className="text-[#777]" />
                  </div>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="3012345678"
                    className="h-full w-full px-4 text-[15px] text-[#222] outline-none placeholder:text-[#bcbcbc]"
                  />
                </div>

                {errors.phone && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-[15px] font-medium text-[#555]">
                  Email address <span className="text-[#555]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className={`h-[44px] w-full rounded-[4px] bg-white px-4 text-[15px] text-[#222] outline-none placeholder:text-[#bcbcbc] focus:border-[#3959a8] ${
                    errors.email
                      ? "border border-red-500"
                      : "border border-[#d7d7d7]"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-[12px] text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="flex h-[48px] min-w-[160px] items-center justify-center gap-2 rounded-[10px] bg-[#ef9807] px-6 text-[16px] font-medium text-black transition-all duration-200 hover:bg-[#db8b06]"
              >
                <Mail size={18} fill="currentColor" />
                Enquire Now
              </button>
            </div>
          </form>
        ) : (
          <div className="px-2 py-6 text-center">
            <h2 className="text-[58px] font-bold leading-none text-[#243c96]">
              Thank You
            </h2>

            <div className="mx-auto mt-6 max-w-[760px] space-y-3 text-[18px] leading-[1.45] text-[#333333]">
              <p>
                Now sit back and relax. Our team is on it and you will be
                contacted shortly.
              </p>

              <p>
                Your Order ID is{" "}
                <span className="font-medium text-[#ef9807]">{orderId}</span>
              </p>

              <p>
                We have also sent details at{" "}
                <span className="text-[#ef9807]">{formData.email}</span>
              </p>

              <p>
                In case of any urgent query feel free to call us at{" "}
                <span className="text-[#243c96]">(021) 111-212-212</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EnquiryDropdown;