import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Plus, Minus } from "lucide-react";
import Slider from "../Header/Slider";
import Navbar from "../Header/Navbar";
import Footer from "../Footer";

import ComparePopup from "../CarSection/CompareModal/ComparePopup";
import ComparePlansModal from "../CarSection/CompareModal/ComparePlans";
import EnquiryDropdown from "../EnquiryModal";

// logos
import habibLogo from "../../assets/habib-insurance.jpeg";
import standardLogo from "../../assets/insurance-2.jpg";
import efuLogo from "../../assets/efu.png";
import jazzcashLogo from "../../assets/jazzcash.png";
import jubileeLogo from "../../assets/jubilee.png";
import tpl from "../../assets/tpl.png";
import filterIcon from "../../assets/filter-2.png"

const HEALTH_FORM_STORAGE_KEY = "healthInsuranceForm";

function HealthPlans() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [selectedComparePlans, setSelectedComparePlans] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [openEnquiryId, setOpenEnquiryId] = useState(null);

  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedRange, setSelectedRange] = useState("60k-2lac");

  const savedHealthForm = (() => {
    try {
      return JSON.parse(localStorage.getItem(HEALTH_FORM_STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  })();

  const formData = state?.formData || savedHealthForm;

  const plans = [
    {
      id: 1,
      brand: "habib",
      logo: habibLogo,
      name: "Individual Health Secure Plan",
      rate: "10%",
      installment: "Rs. 5,250 / month",
      total: "Rs 63,000",
    },
    {
      id: 2,
      brand: "standard",
      logo: standardLogo,
      name: "Family Health Protection Plan",
      rate: "12%",
      installment: "Rs. 7,100 / month",
      total: "Rs 85,200",
    },
    {
      id: 3,
      brand: "efu",
      logo: efuLogo,
      name: "Premium Medical Coverage",
      rate: "15%",
      installment: "Rs. 9,400 / month",
      total: "Rs 112,800",
    },
    {
      id: 4,
      brand: "tpl",
      logo: tpl,
      name: "Elite Health Shield",
      rate: "11%",
      installment: "Rs. 6,300 / month",
      total: "Rs 75,600",
    },
    {
      id: 5,
      brand: "jazzcash",
      logo: jazzcashLogo,
      name: "Basic Health Care Plan",
      rate: "8%",
      installment: "Rs. 4,000 / month",
      total: "Rs 48,000",
    },
    {
      id: 6,
      brand: "jubilee",
      logo: jubileeLogo,
      name: "Comprehensive Health Plus",
      rate: "14%",
      installment: "Rs. 8,200 / month",
      total: "Rs 98,400",
    },
  ];

  const filteredPlans = useMemo(() => {
    if (selectedBrand === "all") return plans;
    return plans.filter((plan) => plan.brand === selectedBrand);
  }, [plans, selectedBrand]);

  const healthDetails = useMemo(() => {
    const insuranceFor =
      formData.selectedType === "myself"
        ? "Myself"
        : formData.selectedType === "family"
        ? "Family"
        : formData.selectedType === "parents"
        ? "Parents"
        : "-";

    const hospitalizationLimit =
      formData.selectedLimit === "60k-2lac"
        ? "60k - 2 Lac"
        : formData.selectedLimit === "2lac-5lac"
        ? "2 Lac - 5 Lac"
        : formData.selectedLimit === "5lac+"
        ? "5 Lac & Above"
        : "-";

    return {
      insuranceFor,
      myAge: formData.myAge || "-",
      spouseAge: formData.spouseAge || "-",
      hospitalizationLimit,
      showSpouseAge: formData.selectedType === "family",
    };
  }, [formData]);

  const isPlanSelectedForCompare = (planId) => {
    return selectedComparePlans.some((item) => item.id === planId);
  };

  const handleToggleCompare = (plan) => {
    const alreadySelected = selectedComparePlans.some(
      (item) => item.id === plan.id
    );

    if (alreadySelected) {
      setSelectedComparePlans((prev) =>
        prev.filter((item) => item.id !== plan.id)
      );
      return;
    }

    if (selectedComparePlans.length >= 3) {
      alert("You can compare up to 3 plans only");
      return;
    }

    setSelectedComparePlans((prev) => [...prev, plan]);
  };

  const handleRemoveComparedPlan = (planId) => {
    setSelectedComparePlans((prev) =>
      prev.filter((item) => item.id !== planId)
    );
  };

  const handleClearComparedPlans = () => {
    setSelectedComparePlans([]);
    setShowCompareModal(false);
  };

  const handleBuy = (plan) => {
    localStorage.setItem("healthSelectedPlan", JSON.stringify(plan));

    navigate("/health-buy", {
      state: {
        selectedPlan: plan,
        formData,
      },
    });
  };

  const handleResetFilters = () => {
    setSelectedBrand("all");
    setSelectedRange("60k-2lac");
  };

  return (
    <>
      <Slider />
      <Navbar />


     <section className="min-h-screen bg-[linear-gradient(180deg,#a8cff7_1%,#f2f7fa_9%,#eef3f8_5%,#eef3f8_0%)] pb-[150px] pt-6">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[256px_1fr]">
            {/* LEFT SIDE */}
            <div className="self-start space-y-3">
              {/* HEALTH DETAILS CARD */}
              <div className="rounded-[10px] border border-[#e4ecf7] bg-[#f8fbff] px-5 py-6 shadow-[0_4px_14px_rgba(27,55,100,0.06)]">
                <h3 className="mb-6 text-[15px] font-semibold text-[#1f2b3d]">
                  Your Health Details
                </h3>

                <div className="space-y-4 text-[14px] text-[#6b7280]">
                  <p>
                    Insurance For{" "}
                    <span className="ml-1 font-semibold text-[#2d3f9f]">
                      {healthDetails.insuranceFor}
                    </span>
                  </p>

                  <p>
                    Your Age{" "}
                    <span className="ml-1 font-semibold text-[#2d3f9f]">
                      {healthDetails.myAge}
                      {healthDetails.myAge !== "-" ? " year" : ""}
                    </span>
                  </p>

                  {healthDetails.showSpouseAge && (
                    <p>
                      Spouse Age{" "}
                      <span className="ml-1 font-semibold text-[#2d3f9f]">
                        {healthDetails.spouseAge}
                        {healthDetails.spouseAge !== "-" ? " year" : ""}
                      </span>
                    </p>
                  )}

                  <p>
                    Hospitalization Limit{" "}
                    <span className="ml-1 font-semibold text-[#2d3f9f]">
                      {healthDetails.hospitalizationLimit}
                    </span>
                  </p>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => navigate(-1)}
                    className="flex h-[30px] items-center justify-center rounded-[8px] border border-[#3959a8] px-3 text-[12px] font-medium text-[#3959a8] transition hover:bg-[#3959a8] hover:text-white"
                  >
                    Edit
                  </button>
                </div>
              </div>

              {/* FILTER CARD */}
              <div className="rounded-[10px] border border-[#e4ecf7] bg-white px-5 py-5 shadow-[0_4px_14px_rgba(27,55,100,0.06)]">
                <div className="mb-5 flex items-center justify-between">
  <button
    onClick={handleResetFilters}
    className="flex h-[30px] items-center justify-center rounded-[8px] border border-[#3959a8] px-4 text-[12px] font-medium text-[#3959a8] transition hover:bg-[#3959a8] hover:text-white"
  >
    Reset
  </button>

  <img
    src={filterIcon}
    alt="Filter"
    className="h-[18px] w-[18px] object-contain opacity-70 transition hover:opacity-100"
  />
</div>

                <h3 className="mb-6 text-[15px] font-semibold text-[#1f2b3d]">
                  Filter Plans
                </h3>

                <div className="mb-6">
                  <p className="mb-3 text-[14px] font-medium text-[#1f2b3d]">
                    Brand
                  </p>

                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="h-[42px] w-full rounded-[8px] border border-[#d9ddea] bg-white px-3 text-[14px] text-[#1f2b3d] outline-none transition-all duration-200 hover:border-[#2d3f9f] focus:border-[#2d3f9f]"
                  >
                    <option value="all">All Brands</option>
                    <option value="habib">Habib</option>
                    <option value="standard">Standard</option>
                    <option value="efu">EFU</option>
                    <option value="tpl">TPL</option>
                    <option value="jazzcash">Jazzcash</option>
                    <option value="jubilee">Jubilee</option>
                  </select>
                </div>

                <div>
                  <p className="mb-3 text-[14px] font-medium text-[#1f2b3d]">
                    Hospitalization Limit(PKR)
                  </p>

                  <div className="space-y-4">
                    <label className="flex cursor-pointer items-center gap-3 text-[14px] text-[#6b7280]">
                      <input
                        type="radio"
                        name="range"
                        value="60k-2lac"
                        checked={selectedRange === "60k-2lac"}
                        onChange={(e) => setSelectedRange(e.target.value)}
                        className="h-[17px] w-[17px] accent-[#f59e0b]"
                      />
                      <span>60k - 2 Lac</span>
                    </label>

                    <label className="flex cursor-pointer items-center gap-3 text-[14px] text-[#6b7280]">
                      <input
                        type="radio"
                        name="range"
                        value="2lac-5lac"
                        checked={selectedRange === "2lac-5lac"}
                        onChange={(e) => setSelectedRange(e.target.value)}
                        className="h-[17px] w-[17px] accent-[#f59e0b]"
                      />
                      <span>2 Lac - 5 Lac</span>
                    </label>

                    <label className="flex cursor-pointer items-center gap-3 text-[14px] text-[#6b7280]">
                      <input
                        type="radio"
                        name="range"
                        value="5lac+"
                        checked={selectedRange === "5lac+"}
                        onChange={(e) => setSelectedRange(e.target.value)}
                        className="h-[17px] w-[17px] accent-[#f59e0b]"
                      />
                      <span>5 Lac & Above</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PLANS AREA */}
            <div>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-[26px] font-bold text-[#1f2b3d]">
                  Showing {filteredPlans.length} Plans
                </h2>

                <div className="flex items-center gap-5">
                  <p className="text-[14px] text-[#22314c]">
                    Quote Id: <span className="font-semibold">6p98vg</span>
                  </p>

                  <button className="flex h-[38px] items-center gap-2 rounded-[10px] border border-[#3959a8] px-4 text-[14px] font-medium text-[#3959a8] transition-all duration-200 hover:bg-[#3959a8] hover:text-white">
                    Download Quote
                  </button>
                </div>
              </div>

              <div className="space-y-5">
                {filteredPlans.map((plan) => {
                  const isSelected = isPlanSelectedForCompare(plan.id);

                  return (
                    <div
                      key={plan.id}
                      className="overflow-hidden rounded-[14px] border border-[#d6e0ee] bg-white shadow-[0_2px_8px_rgba(27,55,100,0.08)]"
                    >
                      <div className="grid min-h-[160px] grid-cols-1 lg:grid-cols-[150px_1fr_160px]">
                        {/* LEFT */}
                        <div className="flex flex-col items-center justify-center border-b border-[#d6e0ee] px-4 py-5 text-center lg:border-b-0 lg:border-r">
                          <img
                            src={plan.logo}
                            alt={plan.name}
                            className="mb-3 h-[60px] w-[85px] object-contain"
                          />
                          <p className="text-[14px] font-medium leading-[1.2] text-[#1d2433]">
                            {plan.name}
                          </p>
                        </div>

                        {/* MIDDLE */}
                        <div className="grid grid-cols-1 gap-4 px-5 py-5 sm:grid-cols-3">
                          <div>
                            <p className="mb-1 text-[15px] text-[#8a8f9c]">
                              Rate
                            </p>
                            <p className="text-[18px] font-bold text-[#18316b]">
                              {plan.rate}
                            </p>
                          </div>

                          <div>
                            <p className="mb-1 text-[15px] text-[#8a8f9c]">
                              Installment Plan
                            </p>
                            <p className="text-[18px] font-bold text-[#1e2b44]">
                              {plan.installment}
                            </p>
                          </div>

                          <div>
                            <p className="mb-1 text-[15px] text-[#8a8f9c]">
                              Total
                            </p>
                            <p className="text-[18px] font-bold text-[#2947a7]">
                              {plan.total}
                            </p>
                          </div>
                        </div>

                        {/* RIGHT */}
                        <div className="flex flex-col items-center px-4 py-4">
                          <button
                            onClick={() => handleToggleCompare(plan)}
                            className={`group mb-3 flex h-[34px] w-[132px] items-center justify-center gap-2 rounded-[8px] border text-[13px] ${
                              isSelected
                                ? "border-[#3044a1] bg-[#eef3ff] text-[#3044a1]"
                                : "border-[#d9e2f1]"
                            }`}
                          >
                            {isSelected ? (
                              <Minus size={16} className="text-[#ef9807]" />
                            ) : (
                              <Plus size={16} className="text-[#233d91]" />
                            )}
                            <span>
                              {isSelected ? "Added" : "Add to compare"}
                            </span>
                          </button>

                          <button
                            onClick={() =>
                              setOpenEnquiryId(
                                openEnquiryId === plan.id ? null : plan.id
                              )
                            }
                            className="mb-3 h-[40px] w-[140px] rounded-[10px] bg-[#dfe5eb] text-[14px] font-medium text-[#273449] transition hover:bg-[#cfd6dd]"
                          >
                            Enquire Now
                          </button>

                          <button
                            onClick={() => handleBuy(plan)}
                            className="h-[40px] w-[140px] rounded-[10px] bg-gradient-to-r from-[#2c85c8] to-[#3147a9] text-[14px] font-semibold text-white transition-all duration-200 hover:from-[#0d6efd] hover:to-[#0d6efd]"
                          >
                            Buy
                          </button>
                        </div>
                      </div>

                      <EnquiryDropdown
                        isOpen={openEnquiryId === plan.id}
                        onClose={() => setOpenEnquiryId(null)}
                        planName={plan.name}
                      />

                      <button className="flex h-[30px] w-full items-center justify-center gap-1 border-t border-[#dfe8f4] bg-[#edf3fa] text-[14px] font-semibold text-[#3044a1] hover:text-[#ef9807]">
                        More detail <span className="text-[13px]">›</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComparePlansModal
        isOpen={showCompareModal}
        onClose={() => setShowCompareModal(false)}
        selectedPlans={selectedComparePlans}
      />

      {selectedComparePlans.length > 0 && (
        <ComparePopup
          selectedPlans={selectedComparePlans}
          onRemove={handleRemoveComparedPlan}
          onCompareAll={() => setShowCompareModal(true)}
          onClearAll={handleClearComparedPlans}
        />
      )}

      <Footer />
    </>
  );
}

export default HealthPlans;