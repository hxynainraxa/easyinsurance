import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Slider from "../Header/Slider";
import Footer from "../Footer";
import BuyFlowHeader from "./BuyFlowHeader";
import BuyFlowTracker from "./BuyFlowTracker";
import BuyFlowPlanCard from "./BuyFlowPlanCard";

import visaImg from "../../assets/visa.png";
import mastercardImg from "../../assets/mastercard.png";
import jazzcashImg from "../../assets/jazzcash.png";
import easypaisaImg from "../../assets/easypaisa.png";
import bankTransferImg from "../../assets/bank-transfer.png";

function HealthPayment() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const formData = state?.formData || {};
  const selectedPlan = state?.selectedPlan || {};
  const personalForm = state?.personalForm || {};

  const [selectedPayment, setSelectedPayment] = useState("bank-transfer");

  const steps = [
    { id: 1, label: "Personal Details", active: false, completed: true },
    { id: 2, label: "Review Information", active: false, completed: true },
    { id: 3, label: "Select Payment Option", active: true, completed: false },
    { id: 4, label: "Done", active: false, completed: false },
  ];

  const getInsuranceFor = () => {
    if (formData.selectedType === "myself") return "Myself";
    if (formData.selectedType === "family") return "Family";
    if (formData.selectedType === "parents") return "Parents";
    return "Myself";
  };

  const handleBack = () => {
    navigate("/health-review", {
      state: {
        formData,
        selectedPlan,
        personalForm,
      },
    });
  };

  const handleNext = () => {
    navigate("/health-done", {
      state: {
        formData,
        selectedPlan,
        personalForm,
        selectedPayment,
      },
    });
  };

  const optionBaseClass =
    "flex min-h-[82px] items-center justify-between border border-[#e2e2e2] bg-white px-4 transition-colors duration-200";

  return (
    <>
      <Slider />

      <section className="min-h-screen bg-[#eef3f8]">
        <BuyFlowHeader onBack={() => navigate(-1)} />
        <BuyFlowTracker steps={steps} />

        <div className="mx-auto max-w-[1160px] px-4 py-6">
          <div className="grid gap-5 lg:grid-cols-[816px_305px]">
            {/* Left Payment Section */}
            <div className="min-h-[589px] rounded-[8px] border border-[#dde3ea] bg-white px-5 py-6 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              <h2 className="text-[28px] font-bold text-[#243c96]">Pay via</h2>

              <div className="mt-4 border-t border-[#d9dfe7]" />

              <div className="mt-7 space-y-5">
                {/* Credit / Debit Card */}
                <label
                  className={`${optionBaseClass} cursor-pointer ${
                    selectedPayment === "card" ? "border-[#ef9807]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={selectedPayment === "card"}
                      onChange={() => setSelectedPayment("card")}
                      className="h-[16px] w-[16px] accent-[#ef9807]"
                    />
                    <span className="text-[16px] text-[#1f2b3d]">
                      Pay via Credit/Debit Card
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src={visaImg}
                      alt="Visa"
                      className="h-[60px] w-[95px] object-contain"
                    />
                    <img
                      src={mastercardImg}
                      alt="Mastercard"
                      className="h-[60px] w-[95px] object-contain"
                    />
                  </div>
                </label>

                {/* JazzCash / Easypaisa */}
                <label
                  className={`${optionBaseClass} cursor-pointer ${
                    selectedPayment === "wallet" ? "border-[#ef9807]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={selectedPayment === "wallet"}
                      onChange={() => setSelectedPayment("wallet")}
                      className="h-[16px] w-[16px] accent-[#ef9807]"
                    />
                    <span className="text-[16px] text-[#1f2b3d]">
                      Pay via JazzCash or Easypaisa
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src={jazzcashImg}
                      alt="JazzCash"
                      className="h-[60px] w-[95px] object-contain"
                    />
                    <img
                      src={easypaisaImg}
                      alt="Easypaisa"
                      className="h-[60px] w-[95px] object-contain"
                    />
                  </div>
                </label>

                {/* Bank Transfer */}
                <label
                  className={`cursor-pointer border border-[#e2e2e2] bg-white px-4 py-5 transition-colors duration-200 ${
                    selectedPayment === "bank-transfer"
                      ? "border-[#ef9807]"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-1 items-start gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={selectedPayment === "bank-transfer"}
                        onChange={() => setSelectedPayment("bank-transfer")}
                        className="mt-1 h-[16px] w-[16px] accent-[#ef9807]"
                      />

                      <div>
                        <p className="text-[16px] text-[#1f2b3d]">
                          Bank Deposit / Net Banking / ATM Transfer
                        </p>

                        <div className="mt-3 text-[14px] leading-[1.5] text-[#111]">
                          <p className="font-semibold">Bank Al Habib Account</p>
                          <p>Allama Iqbal Road Branch, Karachi</p>
                          <p>Smart PFM (Pvt) Ltd</p>
                          <p>128109810154 25027</p>
                          <p className="mt-2 text-[#b8b8b8]">
                            (Email us the scanned deposit slip or online transfer
                            receipt on payments@smartchoice.pk. On confirmation
                            the official policy will be delivered on your email)
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <img
                        src={bankTransferImg}
                        alt="Bank Transfer"
                        className="h-[60px] w-[95px] object-contain"
                      />
                    </div>
                  </div>
                </label>
              </div>

              <div className="mt-6 border-t border-[#d9dfe7]" />

              <div className="mt-8 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex h-[36px] min-w-[86px] items-center justify-center rounded-[8px] border border-[#3959a8] px-5 text-[16px] font-medium text-[#3959a8] transition-all duration-200 hover:bg-[#3959a8] hover:text-white"
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-[36px] min-w-[96px] items-center justify-center gap-2 rounded-[8px] bg-gradient-to-r from-[#2d7ec4] to-[#324aa9] px-5 text-[16px] font-semibold text-white transition-all duration-200 hover:from-[#0d6efd] hover:to-[#0d6efd]"
                >
                  Next
                  <span>➜</span>
                </button>
              </div>
            </div>

            {/* Right Side Card */}
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

export default HealthPayment;