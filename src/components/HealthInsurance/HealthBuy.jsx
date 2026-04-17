import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "../Header/Slider";
import Footer from "../Footer";
import BuyFlowHeader from "./BuyFlowHeader";
import BuyFlowTracker from "./BuyFlowTracker";
import BuyFlowPlanCard from "./BuyFlowPlanCard";

const HEALTH_FORM_STORAGE_KEY = "healthInsuranceForm";
const HEALTH_BUY_FORM_STORAGE_KEY = "healthBuyPersonalForm";
const HEALTH_SELECTED_PLAN_STORAGE_KEY = "healthSelectedPlan";

function HealthBuy() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const savedFormData = (() => {
    try {
      return JSON.parse(localStorage.getItem(HEALTH_FORM_STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  })();

  const savedSelectedPlan = (() => {
    try {
      return JSON.parse(localStorage.getItem(HEALTH_SELECTED_PLAN_STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  })();

  const savedPersonalForm = (() => {
    try {
      return (
        JSON.parse(localStorage.getItem(HEALTH_BUY_FORM_STORAGE_KEY)) || {
          firstName: "",
          lastName: "",
          cnic: "",
          cnicIssueDate: "",
          dob: "",
          contactNumber: "",
          email: "",
          occupation: "",
          maritalStatus: "",
          city: "",
          address: "",
        }
      );
    } catch {
      return {
        firstName: "",
        lastName: "",
        cnic: "",
        cnicIssueDate: "",
        dob: "",
        contactNumber: "",
        email: "",
        occupation: "",
        maritalStatus: "",
        city: "",
        address: "",
      };
    }
  })();

  const formData = state?.formData || savedFormData;
  const selectedPlan = state?.selectedPlan || savedSelectedPlan;

  const [personalForm, setPersonalForm] = useState(
    state?.personalForm || savedPersonalForm
  );
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (formData && Object.keys(formData).length > 0) {
      localStorage.setItem(
        HEALTH_FORM_STORAGE_KEY,
        JSON.stringify(formData)
      );
    }
  }, [formData]);

  useEffect(() => {
    if (selectedPlan && Object.keys(selectedPlan).length > 0) {
      localStorage.setItem(
        HEALTH_SELECTED_PLAN_STORAGE_KEY,
        JSON.stringify(selectedPlan)
      );
    }
  }, [selectedPlan]);

  useEffect(() => {
    localStorage.setItem(
      HEALTH_BUY_FORM_STORAGE_KEY,
      JSON.stringify(personalForm)
    );
  }, [personalForm]);

  const steps = [
    { id: 1, label: "Personal Details", active: true, completed: false },
    { id: 2, label: "Review Information", active: false, completed: false },
    { id: 3, label: "Select Payment Option", active: false, completed: false },
    { id: 4, label: "Done", active: false, completed: false },
  ];

  const occupationOptions = [
    "Businessman",
    "Businesswoman",
    "Officer",
    "Manager",
    "Government Contractor",
    "Other",
    "Student",
  ];

  const cityOptions = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
  ];

  const getInsuranceFor = () => {
    if (formData.selectedType === "myself") return "Myself";
    if (formData.selectedType === "family") return "Family";
    if (formData.selectedType === "parents") return "Parents";
    return "Myself";
  };

  const inputBaseClass =
    "h-[38px] w-full rounded-[4px] border px-3 outline-none transition-colors duration-200 hover:border-black focus:border-[#3959a8]";

  const getFieldClass = (fieldName) =>
    `${inputBaseClass} ${
      errors[fieldName] ? "border-red-500" : "border-[#d0d5dc]"
    }`;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPersonalForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const isValidEmail = (value) => /^\S+@\S+\.\S+$/.test(value.trim());
  const isValidPhone = (value) =>
    /^(?:\+92|0)?3[0-9]{9}$/.test(value.replace(/\s|-/g, ""));
  const isValidCNIC = (value) => /^\d{5}-\d{7}-\d{1}$/.test(value.trim());

  const validateForm = () => {
    const newErrors = {};

    if (!personalForm.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!personalForm.lastName.trim())
      newErrors.lastName = "Last name is required";

    if (!personalForm.cnic.trim()) {
      newErrors.cnic = "CNIC is required";
    } else if (!isValidCNIC(personalForm.cnic)) {
      newErrors.cnic = "Use format 12345-1234567-1";
    }

    if (!personalForm.cnicIssueDate.trim())
      newErrors.cnicIssueDate = "CNIC issue date is required";
    if (!personalForm.dob.trim())
      newErrors.dob = "Date of birth is required";

    if (!personalForm.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!isValidPhone(personalForm.contactNumber)) {
      newErrors.contactNumber = "Enter a valid phone number";
    }

    if (!personalForm.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(personalForm.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!personalForm.occupation)
      newErrors.occupation = "Occupation is required";
    if (!personalForm.maritalStatus)
      newErrors.maritalStatus = "Marital status is required";
    if (!personalForm.city) newErrors.city = "City is required";
    if (!personalForm.address.trim())
      newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (validateForm()) {
      localStorage.setItem(
        HEALTH_BUY_FORM_STORAGE_KEY,
        JSON.stringify(personalForm)
      );

      navigate("/health-review", {
        state: {
          formData,
          selectedPlan,
          personalForm,
        },
      });
    }
  };

  return (
    <>
      <Slider />

      <section className="min-h-screen bg-[#eef3f8]">
        <BuyFlowHeader onBack={() => navigate(-1)} />
        <BuyFlowTracker steps={steps} />

        <div className="mx-auto max-w-[1160px] px-4 py-6">
          <div className="grid gap-5 lg:grid-cols-[816px_305px]">
            <form
              onSubmit={handleNext}
              className="min-h-[589px] rounded-[8px] border border-[#dde3ea] bg-white px-5 py-6 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
            >
              <h2 className="text-[28px] font-bold text-[#243c96]">
                Personal Details:
              </h2>

              <div className="mt-4 border-t border-[#d9dfe7]" />

              <div className="mt-6 grid gap-x-6 gap-y-7 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-[14px] text-[#1f2b3d]">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={personalForm.firstName}
                    onChange={handleChange}
                    className={getFieldClass("firstName")}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-[12px] text-red-500">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[14px] text-[#1f2b3d]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={personalForm.lastName}
                    onChange={handleChange}
                    className={getFieldClass("lastName")}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-[12px] text-red-500">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[14px] text-[#1f2b3d]">
                    CNIC: <span className="text-[#1f2b3d]">ⓘ</span>
                  </label>
                  <input
                    type="text"
                    name="cnic"
                    placeholder="12345-1234567-1"
                    value={personalForm.cnic}
                    onChange={handleChange}
                    className={getFieldClass("cnic")}
                  />
                  {errors.cnic && (
                    <p className="mt-1 text-[12px] text-red-500">
                      {errors.cnic}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[14px] text-[#1f2b3d]">
                    CNIC Date of Issuance
                  </label>
                  <input
                    type="date"
                    name="cnicIssueDate"
                    value={personalForm.cnicIssueDate}
                    onChange={handleChange}
                    className={getFieldClass("cnicIssueDate")}
                  />
                  {errors.cnicIssueDate && (
                    <p className="mt-1 text-[12px] text-red-500">
                      {errors.cnicIssueDate}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[14px] text-[#1f2b3d]">
                    Date of Birth <span className="text-[#1f2b3d]">ⓘ</span>
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={personalForm.dob}
                    onChange={handleChange}
                    className={getFieldClass("dob")}
                  />
                  {errors.dob && (
                    <p className="mt-1 text-[12px] text-red-500">
                      {errors.dob}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[14px] text-[#1f2b3d]">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="03xxxxxxxxx"
                    value={personalForm.contactNumber}
                    onChange={handleChange}
                    className={getFieldClass("contactNumber")}
                  />
                  {errors.contactNumber && (
                    <p className="mt-1 text-[12px] text-red-500">
                      {errors.contactNumber}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[14px] text-[#1f2b3d]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={personalForm.email}
                    onChange={handleChange}
                    className={getFieldClass("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[12px] text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[14px] text-[#1f2b3d]">
                    Occupation:
                  </label>
                  <select
                    name="occupation"
                    value={personalForm.occupation}
                    onChange={handleChange}
                    className={getFieldClass("occupation")}
                  >
                    <option value="">Select Occupation</option>
                    {occupationOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.occupation && (
                    <p className="mt-1 text-[12px] text-red-500">
                      {errors.occupation}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[14px] text-[#1f2b3d]">
                    Marital Status
                  </label>
                  <select
                    name="maritalStatus"
                    value={personalForm.maritalStatus}
                    onChange={handleChange}
                    className={getFieldClass("maritalStatus")}
                  >
                    <option value="">Select Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </select>
                  {errors.maritalStatus && (
                    <p className="mt-1 text-[12px] text-red-500">
                      {errors.maritalStatus}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[14px] text-[#1f2b3d]">
                    City
                  </label>
                  <select
                    name="city"
                    value={personalForm.city}
                    onChange={handleChange}
                    className={getFieldClass("city")}
                  >
                    <option value="">Select City</option>
                    {cityOptions.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {errors.city && (
                    <p className="mt-1 text-[12px] text-red-500">
                      {errors.city}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-[14px] text-[#1f2b3d]">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={personalForm.address}
                    onChange={handleChange}
                    className={getFieldClass("address")}
                  />
                  {errors.address && (
                    <p className="mt-1 text-[12px] text-red-500">
                      {errors.address}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-10 border-t border-[#d9dfe7]" />

              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="flex h-[36px] min-w-[105px] items-center justify-center gap-2 rounded-[8px] bg-gradient-to-r from-[#2d7ec4] to-[#324aa9] px-5 text-[16px] font-semibold text-white transition-all duration-200 hover:from-[#0d6efd] hover:to-[#0d6efd]"
                >
                  Next
                  <span>➜</span>
                </button>
              </div>
            </form>

            <BuyFlowPlanCard
              selectedPlan={selectedPlan}
              insuranceFor={getInsuranceFor()}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HealthBuy;