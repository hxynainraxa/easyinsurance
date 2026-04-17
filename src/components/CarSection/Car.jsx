import { Check, ChevronDown } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Slider from "../Header/Slider";
import bgImage from "../../assets/car-bg.png";
import {
  carBrands,
  carBrandModels,
  manufacturingYears,
} from "../data/car-data";
import BenefitsSection from "./Main-Car";
import CarInsuranceSlider from "./CarInsuranceSlider";
import WhySmartchoice from "../WhySmartChoice";
import FAQs from "../FAQsSection";
import { carsFaqsData } from "../data/smartchoice-menu-data";
import Footer from "../Footer";

function Car() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = localStorage.getItem("carCurrentStep");
    return savedStep ? Number(savedStep) : 1;
  });

  const [formData, setFormData] = useState(() => {
    const savedStep1 = JSON.parse(localStorage.getItem("carStep1Data") || "{}");
    const savedStep2 = JSON.parse(localStorage.getItem("carStep2Data") || "{}");

    return {
      brand: savedStep1.brand || "",
      model: savedStep1.model || "",
      year: savedStep1.year || "",
      value: savedStep1.value || "",
      name: savedStep2.name || "",
      phone: savedStep2.phone || "",
      email: savedStep2.email || "",
    };
  });

  const [errors, setErrors] = useState({});

  const models = useMemo(() => {
    return formData.brand ? carBrandModels[formData.brand] || [] : [];
  }, [formData.brand]);

  useEffect(() => {
    const step1Data = {
      brand: formData.brand,
      model: formData.model,
      year: formData.year,
      value: formData.value,
    };

    localStorage.setItem("carStep1Data", JSON.stringify(step1Data));
  }, [formData.brand, formData.model, formData.year, formData.value]);

  useEffect(() => {
    const step2Data = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
    };

    localStorage.setItem("carStep2Data", JSON.stringify(step2Data));
  }, [formData.name, formData.phone, formData.email]);

  useEffect(() => {
    localStorage.setItem("carCurrentStep", String(currentStep));
  }, [currentStep]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (name === "brand") {
        return {
          ...prev,
          brand: value,
          model: "",
        };
      }

      return {
        ...prev,
        [name]: value,
      };
    });

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const isFilled = (value) => String(value).trim() !== "";
  const isValidName = (value) => String(value).trim().length >= 2;

  const isValidPhone = (value) => {
    const cleaned = String(value).replace(/\s|-/g, "");
    return /^(?:\+92|0)?3[0-9]{9}$/.test(cleaned);
  };

  const isValidEmail = (value) => /^\S+@\S+\.\S+$/.test(String(value).trim());

  const validateStepOne = () => {
    const newErrors = {};

    if (!formData.brand) newErrors.brand = "Please select car brand";
    if (!formData.model) newErrors.model = "Please select car model";
    if (!formData.year) newErrors.year = "Please select manufacturing year";
    if (!formData.value || Number(formData.value) <= 0) {
      newErrors.value = "Please enter current value";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStepTwo = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (!isValidName(formData.name)) {
      newErrors.name = "Please enter a valid name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter phone number";
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter email";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStepOneSubmit = (e) => {
    e.preventDefault();

    if (validateStepOne()) {
      setCurrentStep(2);
    }
  };

  const handleStepTwoSubmit = (e) => {
    e.preventDefault();

    if (validateStepTwo()) {
      navigate("/car-plans", {
        state: {
          formData,
        },
      });
    }
  };

  const baseFieldClass =
    "h-[44px] w-full appearance-none rounded-[8px] border border-[#d8d8d8] bg-white px-[14px] pr-[48px] text-[14px] text-[#8d8d8d] outline-none placeholder:text-[#bdbdbd]";
  const errorFieldClass = "border-red-500";

  const SelectIcon = ({ filled }) =>
    filled ? (
      <div className="pointer-events-none absolute right-3 top-1/2 flex h-[22px] w-[22px] -translate-y-1/2 items-center justify-center rounded-full bg-[#7edc6e]">
        <Check size={14} className="text-white" strokeWidth={3} />
      </div>
    ) : (
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#b7becd]">
        <ChevronDown size={18} strokeWidth={2.2} />
      </div>
    );

  const ValidTick = () => (
    <div className="pointer-events-none absolute right-3 top-1/2 flex h-[22px] w-[22px] -translate-y-1/2 items-center justify-center rounded-full bg-[#7edc6e]">
      <Check size={14} className="text-white" strokeWidth={3} />
    </div>
  );

  return (
    <>
      <Slider />
      <Navbar />

      <section
        className="h-auto min-h-[580px] bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "40% 74%",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-[1240px] px-4 md:px-8 lg:px-10">
          <div className="flex min-h-[720px]">
            <div className="w-full max-w-[720px] pt-[38px] md:pt-[46px]">
              <div className="mb-6 inline-flex rounded-[12px] bg-[#efa61a] px-[15px] py-[12px] text-[16px] font-medium leading-none text-white md:px-[18px] md:text-[18px]">
                Rate as low as <span className="ml-1 font-extrabold">1.35%</span>
              </div>

              <h1 className="mb-4 max-w-[720px] text-[34px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#243c96] md:text-[54px]">
                Find Best Car Insurance in Pakistan
              </h1>

              <p className="mb-10 max-w-[520px] text-[18px] leading-[1.45] text-[#111111]">
                Compare &amp; find coverage for your car from top insurance providers in Pakistan.
              </p>

              <div className="mb-6 flex justify-center">
                <div className="flex w-full max-w-[490px] items-start justify-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-[20px] w-[20px] items-center justify-center rounded-full text-[11px] font-semibold text-white ${
                        currentStep === 1 ? "bg-[#6373bb]" : "bg-[#d7dcec]"
                      }`}
                    >
                      1
                    </div>
                    <span
                      className={`mt-[10px] text-[13px] font-medium ${
                        currentStep === 1 ? "text-[#6373bb]" : "text-[#b4bcd4]"
                      }`}
                    >
                      Car Detail
                    </span>
                  </div>

                  <div
                    className={`mx-[14px] mt-[10px] h-[2px] w-[118px] ${
                      currentStep === 2 ? "bg-[#6373bb]" : "bg-[#d6dceb]"
                    }`}
                  />

                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-[20px] w-[20px] items-center justify-center rounded-full text-[11px] font-semibold text-white ${
                        currentStep === 2 ? "bg-[#6373bb]" : "bg-[#d7dcec]"
                      }`}
                    >
                      2
                    </div>
                    <span
                      className={`mt-[10px] text-[13px] font-medium ${
                        currentStep === 2 ? "text-[#6373bb]" : "text-[#b4bcd4]"
                      }`}
                    >
                      Quotes
                    </span>
                  </div>
                </div>
              </div>

              {currentStep === 1 && (
                <form onSubmit={handleStepOneSubmit} className="w-full">
                  <div className="mx-auto grid max-w-[490px] grid-cols-1 gap-[16px] md:grid-cols-2">
                    <div className="relative">
                      <select
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        className={`${baseFieldClass} ${errors.brand ? errorFieldClass : ""}`}
                      >
                        <option value="">Car Brand</option>
                        {carBrands.map((brand) => (
                          <option key={brand} value={brand}>
                            {brand}
                          </option>
                        ))}
                      </select>
                      <SelectIcon filled={isFilled(formData.brand)} />
                      {errors.brand && (
                        <p className="mt-1 text-[12px] text-red-500">{errors.brand}</p>
                      )}
                    </div>

                    <div className="relative">
                      <select
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        disabled={!formData.brand}
                        className={`${baseFieldClass} disabled:cursor-not-allowed disabled:bg-[#f7f7f7] ${
                          errors.model ? errorFieldClass : ""
                        }`}
                      >
                        <option value="">
                          {formData.brand ? "Car Model" : "Select Brand First"}
                        </option>
                        {models.map((model) => (
                          <option key={model} value={model}>
                            {model}
                          </option>
                        ))}
                      </select>
                      <SelectIcon filled={isFilled(formData.model)} />
                      {errors.model && (
                        <p className="mt-1 text-[12px] text-red-500">{errors.model}</p>
                      )}
                    </div>

                    <div className="relative">
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className={`${baseFieldClass} ${errors.year ? errorFieldClass : ""}`}
                      >
                        <option value="">Manufacturing Year</option>
                        {manufacturingYears.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      <SelectIcon filled={isFilled(formData.year)} />
                      {errors.year && (
                        <p className="mt-1 text-[12px] text-red-500">{errors.year}</p>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="number"
                        name="value"
                        value={formData.value}
                        onChange={handleChange}
                        placeholder="Current Value (PKR)"
                        className={`${baseFieldClass} ${errors.value ? errorFieldClass : ""}`}
                      />
                      {isFilled(formData.value) && <ValidTick />}
                      {errors.value && (
                        <p className="mt-1 text-[12px] text-red-500">{errors.value}</p>
                      )}
                    </div>
                  </div>

                  {isFilled(formData.value) && (
                    <div className="mx-auto mt-2 max-w-[490px] text-center text-[13px] text-[#7a7a7a]">
                      {Number(formData.value).toLocaleString("en-PK")} PKR
                    </div>
                  )}

                  <div className="mx-auto max-w-[490px]">
                    <button
                      type="submit"
                      className="mt-5 flex h-[44px] w-full items-center justify-center gap-2 rounded-[8px] bg-gradient-to-r from-[#4b96d6] to-[#4858b5] text-[16px] font-semibold text-white"
                    >
                      Next
                      <span className="text-[15px]">➜</span>
                    </button>
                  </div>
                </form>
              )}

              {currentStep === 2 && (
                <form onSubmit={handleStepTwoSubmit} className="w-full">
                  <div className="mx-auto grid max-w-[490px] grid-cols-1 gap-[16px]">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`${baseFieldClass} ${errors.name ? errorFieldClass : ""}`}
                      />
                      {isValidName(formData.name) && <ValidTick />}
                      {errors.name && (
                        <p className="mt-1 text-[12px] text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className={`${baseFieldClass} ${errors.phone ? errorFieldClass : ""}`}
                      />
                      {isValidPhone(formData.phone) && <ValidTick />}
                      {errors.phone && (
                        <p className="mt-1 text-[12px] text-red-500">{errors.phone}</p>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className={`${baseFieldClass} ${errors.email ? errorFieldClass : ""}`}
                      />
                      {isValidEmail(formData.email) && <ValidTick />}
                      {errors.email && (
                        <p className="mt-1 text-[12px] text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="mx-auto mt-4 flex max-w-[490px] items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="flex h-[40px] w-[150px] items-center justify-center rounded-[8px] bg-transparent text-[16px] font-medium text-[#243c96]"
                    >
                      <span className="mr-2 text-[14px]">←</span>
                      Previous Step
                    </button>

                    <button
                      type="submit"
                      className="flex h-[40px] w-[150px] items-center justify-center rounded-[8px] bg-gradient-to-r from-[#4b96d6] to-[#4858b5] text-[16px] font-semibold text-white"
                    >
                      See Plans
                      <span className="ml-2 text-[14px]">➜</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection />
      <CarInsuranceSlider />
      <WhySmartchoice />
      <FAQs faqsData={carsFaqsData} />
      <Footer />
    </>
  );
}

export default Car;