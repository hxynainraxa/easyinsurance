import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer2 from "./Footertwo";
import NavbarTwo from "../Header/Navbartwo";
import habibLogo from "../../assets/habib-insurance.jpeg";

const cityOptions = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Hyderabad",
];

const timeOptions = ["9-12", "12-3", "3-6"];

function CarSurveyForm() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const plan = state?.plan || {
    name: "Motor Comprehensive Insurance",
    rate: "1.4%",
    total: "Rs 311,111",
  };

  const vehicleData = state?.formData || {
    brand: "Honda",
    model: "Accord tourer",
    year: "2022",
    value: "22222222",
    name: "",
    phone: "",
    email: "",
  };

  const [formData, setFormData] = useState({
    ownerName: "",
    cnic: "",
    phone: "",
    email: "",
    address: "",
    registrationNo: "",
    city: "",
    inspectionDate: "",
    inspectionTime: "9-12",
    installmentOption: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [showSummaryPopup, setShowSummaryPopup] = useState(false);
  const [orderId] = useState(() => Math.floor(10000 + Math.random() * 90000));

  const formatCurrency = (value) => {
    if (!value) return "PKR 0";
    const numeric = String(value).replace(/[^\d]/g, "");
    if (!numeric) return "PKR 0";
    return `PKR ${Number(numeric).toLocaleString("en-PK")}`;
  };

  const amountText = useMemo(() => {
    return plan.total || "Rs 311,111";
  }, [plan.total]);

  const validateField = (name, value) => {
    switch (name) {
      case "ownerName":
        if (!value.trim()) return "Car owner name is required";
        if (value.trim().length < 3) return "Please enter a valid name";
        return "";

      case "cnic":
        if (!value.trim()) return "CNIC is required";
        if (!/^\d{13}$/.test(value)) return "CNIC must be exactly 13 digits";
        return "";

      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^\d{10}$/.test(value)) return "Phone must be 10 digits after +92";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+$/.test(value)) {
          return "Please enter a valid email";
        }
        return "";

      case "address":
        if (!value.trim()) return "Survey location address is required";
        if (value.trim().length < 8) return "Please enter a complete address";
        return "";

      case "registrationNo":
        if (!value.trim()) return "Car registration number is required";
        return "";

      case "city":
        if (!value) return "Please select city";
        return "";

      case "inspectionDate":
        if (!value) return "Please select date for inspection";
        return "";

      case "inspectionTime":
        if (!value) return "Please select a time slot";
        return "";

      default:
        return "";
    }
  };

  const validateAll = () => {
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (key === "installmentOption") return;
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let finalValue = type === "checkbox" ? checked : value;

    if (name === "cnic") {
      finalValue = value.replace(/\D/g, "").slice(0, 13);
    }

    if (name === "phone") {
      finalValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, finalValue),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateAll();
    setErrors(newErrors);

    const allTouched = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "installmentOption") {
        allTouched[key] = true;
      }
    });
    setTouched(allTouched);

    if (Object.keys(newErrors).length > 0) return;

    setShowThankYou(true);
    setShowSummaryPopup(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const inputClass = (field) =>
    `h-[38px] w-full rounded-[4px] border bg-white px-3 text-[13px] text-[#1f2b53] outline-none transition placeholder:text-[#bfc3cb] focus:border-[#3048a8] ${
      errors[field] && touched[field] ? "border-[#dc2626]" : "border-[#d9d9d9]"
    }`;

  const DetailRow = ({ label, value }) => (
    <div className="flex items-start justify-between gap-4 border-b border-[#edf1f6] py-2">
      <span className="min-w-[150px] text-[14px] font-medium text-[#3048a8]">
        {label}
      </span>
      <span className="text-right text-[14px] text-[#2b3348]">
        {value || "-"}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#dfe7ef]">
      <NavbarTwo />
      <div className="h-[70px]" />

      <div className="mx-auto max-w-[1280px] px-0">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[278px_1fr]">
          <aside className="relative hidden lg:block">
            <div className="sticky top-[70px] h-[calc(100vh-70px)] bg-[linear-gradient(180deg,#39415d_0%,#39415d_52%,#dfe7ef_52%,#dfe7ef_100%)]">
              <div className="px-4 pt-5">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <p className="text-[18px] font-semibold leading-none text-white">
                      {vehicleData.brand || "Car"}
                    </p>
                    <p className="mt-1 text-[14px] leading-none text-white">
                      {vehicleData.year || "2022"} {formatCurrency(vehicleData.value)}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate(-1)}
                    className="rounded-[3px] border border-white px-3 py-[4px] text-[12px] text-white transition hover:bg-white hover:text-[#39415d]"
                  >
                    {"< Back to plans"}
                  </button>
                </div>

                <div className="cursor-pointer bg-[#f5f5f5] px-6 py-7 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
                  <div className="mb-5 flex justify-center">
                    <img
                      src={habibLogo}
                      alt="Insurance"
                      className="h-[60px] w-[85px] object-contain"
                    />
                  </div>

                  <h3 className="mb-4 text-[13px] font-medium leading-[1.3] text-[#1d2333]">
                    {plan.name}
                  </h3>

                  <div className="space-y-3 text-[14px] text-[#2b3348]">
                    <div className="flex items-center justify-between">
                      <span>Rate</span>
                      <span className="font-semibold">{plan.rate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Amount</span>
                      <span className="font-semibold">{amountText}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Total</span>
                      <span className="font-semibold">{amountText}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="min-h-screen px-4 py-10 md:px-8 xl:px-12">
            {!showThankYou ? (
              <div className="mx-auto max-w-[710px] bg-[#f7f7f7]">
                <div className="border-b border-[#3048a8] px-4 py-4 md:px-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#3048a8] text-[20px] text-[#3048a8]">
                      1
                    </div>
                    <h2 className="text-[28px] font-medium text-[#243a8d]">
                      Car & Owner Details
                    </h2>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="px-4 pb-8 pt-10 md:px-10">
                  <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        name="ownerName"
                        placeholder="Car Owner Name"
                        value={formData.ownerName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass("ownerName")}
                      />
                      {errors.ownerName && touched.ownerName && (
                        <p className="mt-2 text-[12px] text-[#dc2626]">
                          {errors.ownerName}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        name="cnic"
                        placeholder="13 Digit CNIC No"
                        value={formData.cnic}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass("cnic")}
                      />
                      {errors.cnic && touched.cnic && (
                        <p className="mt-2 text-[12px] text-[#dc2626]">
                          {errors.cnic}
                        </p>
                      )}
                    </div>

                    <div>
                      <div
                        className={`flex h-[38px] w-full overflow-hidden rounded-[4px] border bg-white ${
                          errors.phone && touched.phone
                            ? "border-[#dc2626]"
                            : "border-[#d9d9d9]"
                        }`}
                      >
                        <div className="flex w-[58px] items-center justify-center border-r border-[#d9d9d9] text-[12px] text-[#1f2b53]">
                          +92
                        </div>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="h-full flex-1 px-3 text-[13px] text-[#1f2b53] outline-none placeholder:text-[#bfc3cb]"
                        />
                      </div>
                      {errors.phone && touched.phone && (
                        <p className="mt-2 text-[12px] text-[#dc2626]">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass("email")}
                      />
                      {errors.email && touched.email && (
                        <p className="mt-2 text-[12px] text-[#dc2626]">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <textarea
                        name="address"
                        placeholder="Survey Location Address"
                        value={formData.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={1}
                        className={`min-h-[38px] w-full rounded-[4px] border bg-white px-3 py-[9px] text-[13px] text-[#1f2b53] outline-none transition placeholder:text-[#bfc3cb] focus:border-[#3048a8] ${
                          errors.address && touched.address
                            ? "border-[#dc2626]"
                            : "border-[#d9d9d9]"
                        }`}
                      />
                      {errors.address && touched.address && (
                        <p className="mt-2 text-[12px] text-[#dc2626]">
                          {errors.address}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        name="registrationNo"
                        placeholder="Car Registration No"
                        value={formData.registrationNo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass("registrationNo")}
                      />
                      {errors.registrationNo && touched.registrationNo && (
                        <p className="mt-2 text-[12px] text-[#dc2626]">
                          {errors.registrationNo}
                        </p>
                      )}
                    </div>

                    <div>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass("city")}
                      >
                        <option value="">Select City</option>
                        {cityOptions.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                      {errors.city && touched.city && (
                        <p className="mt-2 text-[12px] text-[#dc2626]">
                          {errors.city}
                        </p>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="date"
                        name="inspectionDate"
                        value={formData.inspectionDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        min={new Date().toISOString().split("T")[0]}
                        className={inputClass("inspectionDate")}
                      />
                      {errors.inspectionDate && touched.inspectionDate && (
                        <p className="mt-2 text-[12px] text-[#dc2626]">
                          {errors.inspectionDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <select
                        name="inspectionTime"
                        value={formData.inspectionTime}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClass("inspectionTime")}
                      >
                        {timeOptions.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                      {errors.inspectionTime && touched.inspectionTime && (
                        <p className="mt-2 text-[12px] text-[#dc2626]">
                          {errors.inspectionTime}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 border-b border-[#e0e0e0] pb-3">
                    <label className="flex items-center gap-2 text-[14px] text-[#3a3a3a]">
                      <input
                        type="checkbox"
                        name="installmentOption"
                        checked={formData.installmentOption}
                        onChange={handleChange}
                        className="h-[13px] w-[13px] accent-[#3048a8]"
                      />
                      I want to avail the installment option
                    </label>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <button
                      type="submit"
                      className="h-[35px] min-w-[129px] rounded-[6px] bg-[linear-gradient(90deg,#2f85c8_0%,#3048a8_100%)] px-5 text-[14px] font-semibold text-white transition hover:opacity-95"
                    >
                      Schedule Survey
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="mx-auto flex min-h-[340px] max-w-[710px] items-center justify-center bg-[#f7f7f7] px-8 py-16">
                <div className="w-full text-center">
                  <h2 className="text-[56px] font-semibold leading-none text-[#3147a9]">
                    Thank You
                  </h2>

                  <div className="mt-8 space-y-2 text-[18px] leading-[1.5] text-[#333333]">
                    <p>Now sit back and relax. Our team is on it and you will be contacted shortly.</p>
                    <p>
                      Your Order ID is{" "}
                      <span className="text-[#f29a1a]">{orderId}</span>
                    </p>
                    <p>
                      We have also sent details at{" "}
                      <span className="text-[#f29a1a]">{formData.email}</span>
                    </p>
                    <p>
                      In case of any urgent query feel free to call us at{" "}
                      <span className="text-[#3147a9]">(021) 111-212-212</span>
                    </p>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setShowSummaryPopup(true)}
                      className="rounded-[8px] bg-[linear-gradient(90deg,#2f85c8_0%,#3048a8_100%)] px-6 py-3 text-[14px] font-semibold text-white"
                    >
                      View Submitted Details
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-16">
              <Footer2 />
            </div>
          </main>
        </div>
      </div>

      {showThankYou && showSummaryPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-4 py-6">
          <div className="relative max-h-[90vh] w-full max-w-[820px] overflow-y-auto rounded-[18px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#d9e4f0] bg-white px-6 py-5">
              <div>
                <h2 className="text-[28px] font-bold text-[#1b2f5b]">
                  Submitted Details
                </h2>
                <p className="mt-1 text-[14px] text-[#6c7891]">
                  All data entered in your forms
                </p>
              </div>

              <button
                onClick={() => setShowSummaryPopup(false)}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#edf3fa] text-[24px] leading-none text-[#24407b]"
              >
                ×
              </button>
            </div>

            <div className="space-y-6 p-6">
              <div className="rounded-[14px] border border-[#d6e0ee] bg-[#f9fbfe] p-5">
                <h3 className="mb-4 text-[18px] font-semibold text-[#24385f]">
                  Selected Plan
                </h3>
                <DetailRow label="Plan Name" value={plan.name} />
                <DetailRow label="Rate" value={plan.rate} />
                <DetailRow label="Total" value={plan.total} />
              </div>

              <div className="rounded-[14px] border border-[#d6e0ee] bg-[#f9fbfe] p-5">
                <h3 className="mb-4 text-[18px] font-semibold text-[#24385f]">
                  Form 1 - Car Details
                </h3>
                <DetailRow label="Car Brand" value={vehicleData.brand} />
                <DetailRow label="Car Model" value={vehicleData.model} />
                <DetailRow label="Manufacturing Year" value={vehicleData.year} />
                <DetailRow label="Current Value" value={formatCurrency(vehicleData.value)} />
              </div>

              <div className="rounded-[14px] border border-[#d6e0ee] bg-[#f9fbfe] p-5">
                <h3 className="mb-4 text-[18px] font-semibold text-[#24385f]">
                  Form 2 - User Details
                </h3>
                <DetailRow label="Name" value={vehicleData.name} />
                <DetailRow label="Phone" value={vehicleData.phone} />
                <DetailRow label="Email" value={vehicleData.email} />
              </div>

              <div className="rounded-[14px] border border-[#d6e0ee] bg-[#f9fbfe] p-5">
                <h3 className="mb-4 text-[18px] font-semibold text-[#24385f]">
                  Survey Form Details
                </h3>
                <DetailRow label="Car Owner Name" value={formData.ownerName} />
                <DetailRow label="CNIC" value={formData.cnic} />
                <DetailRow label="Phone" value={`+92 ${formData.phone}`} />
                <DetailRow label="Email" value={formData.email} />
                <DetailRow label="Survey Address" value={formData.address} />
                <DetailRow label="Registration No" value={formData.registrationNo} />
                <DetailRow label="City" value={formData.city} />
                <DetailRow label="Inspection Date" value={formData.inspectionDate} />
                <DetailRow label="Inspection Time" value={formData.inspectionTime} />
                <DetailRow
                  label="Installment Option"
                  value={formData.installmentOption ? "Yes" : "No"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarSurveyForm;