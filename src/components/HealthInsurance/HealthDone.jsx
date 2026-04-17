import { useLocation } from "react-router-dom";
import { useState } from "react";
 import { useNavigate } from "react-router-dom";
import Slider from "../Header/Slider";
import Footer from "../Footer";
import BuyFlowHeader from "./BuyFlowHeader";
import BuyFlowTracker from "./BuyFlowTracker";

import doneTopIcon from "../../assets/thanks.png";
import thumbsUpIcon from "../../assets/fb_thumb.png";
import clockIcon from "../../assets/time.png";
import questionIcon from "../../assets/qurey.png";

function HealthDone() {
  const { state } = useLocation();


  
  const selectedPlan = state?.selectedPlan || {};
  const selectedPayment = state?.selectedPayment || "bank-transfer";
  const personalForm = state?.personalForm || {};
  const formData = state?.formData || {};

  const [showPopup, setShowPopup] = useState(true);

  const steps = [
    { id: 1, label: "Personal Details", active: false, completed: true },
    { id: 2, label: "Review Information", active: false, completed: true },
    { id: 3, label: "Select Payment Option", active: false, completed: true },
    { id: 4, label: "Done", active: true, completed: false },
  ];

  const orderId = "149538";
  const premiumAmount = selectedPlan?.total || "6,300.00";

  const getPaymentLabel = () => {
    if (selectedPayment === "bank-transfer") return "bank transfer";
    if (selectedPayment === "wallet") return "JazzCash / Easypaisa";
    if (selectedPayment === "card") return "credit / debit card";
    return selectedPayment || "-";
  };

  const getInsuranceTypeLabel = () => {
    if (formData.selectedType === "myself") return "Myself";
    if (formData.selectedType === "family") return "Family";
    if (formData.selectedType === "parents") return "Parents";
    return formData.selectedType || "-";
  };

  const getLimitLabel = () => {
    if (formData.selectedLimit === "60k-2lac") return "60k - 2 Lac";
    if (formData.selectedLimit === "2lac-5lac") return "2 Lac - 5 Lac";
    if (formData.selectedLimit === "5lac+") return "5 Lac & Above";
    return formData.selectedLimit || "-";
  };

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
    <>
      <Slider />
      <BuyFlowHeader />
      <BuyFlowTracker steps={steps} />

      <section className="bg-[#eef3f8] px-4 pb-0 pt-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        <div className="mx-auto min-h-[870px] w-full max-w-[1176px] rounded-[4px] border border-[#dde3ea] bg-white px-6 py-8 shadow-[0_2px_10px_rgba(0,0,0,0.04)] md:px-10 md:py-10">
          <div className="mx-auto max-w-[860px] text-center">
            <img
              src={doneTopIcon}
              alt="done"
              className="mx-auto h-auto w-auto object-contain"
            />

            <h1 className="mt-8 text-[34px] font-bold leading-none text-[#ef9807] md:text-[38px]">
              Great, You're all done!
            </h1>

            <div className="mt-6 space-y-1 text-[15px] leading-[1.55] text-[#6c6c6c]">
              <p>
                Thank you for choosing {getPaymentLabel()} option. Your Order ID
                is <span className="font-bold text-[#3d3d3d]">{orderId}</span>.
              </p>
              <p>Please transfer {premiumAmount} in following account</p>
            </div>

            <div className="mt-8 text-center text-[14px] leading-[1.5] text-[#5b5b5b]">
              <p className="font-semibold text-[#303030]">Bank Al Habib Account</p>
              <p>Allama Iqbal Road Branch, Karachi</p>
              <p>Smart PFM (Pvt) Ltd</p>
              <p>128109810154 25027</p>
            </div>

            <div className="mx-auto mt-10 max-w-[760px] text-[15px] leading-[1.65] text-[#6c6c6c]">
              <p>
                Kindly email the transaction receipt/deposit slip to us on
                support@smartchoice.pk along with your order ID.
              </p>
              <p>
                As soon as confirmation is received our team will begin the
                policy issuance process and email policy at provided email
                address.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setShowPopup(true)}
                className="rounded-[8px] bg-[linear-gradient(90deg,#2f85c8_0%,#3048a8_100%)] px-6 py-3 text-[14px] font-semibold text-white transition hover:opacity-95"
              >
                View My Details
              </button>
            </div>

            <div className="mx-auto mt-14 flex max-w-[610px] items-start gap-4 text-left">
              <img
                src={thumbsUpIcon}
                alt="thumbs up"
                className="h-[65px] w-[65px] shrink-0 object-contain"
              />

              <p className="text-[15px] leading-[1.6] text-[#6c6c6c]">
                Did you like the experience with Smartchoice.pk? Did we make
                your life easier? Give us a and let us know on our{" "}
                <span className="text-[#4b63c6]">Facebook page.</span>
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-[760px] gap-8 md:grid-cols-2">
              <div className="flex items-start gap-4 text-left">
                <img
                  src={clockIcon}
                  alt="clock"
                  className="h-[65px] w-[65px] shrink-0 object-contain"
                />

                <p className="text-[15px] leading-[1.5] text-[#6c6c6c]">
                  Orders placed during working hours before 1pm shall be
                  processed same day. Otherwise next working day.
                </p>
              </div>

              <div className="flex items-start gap-4 text-left">
                <img
                  src={questionIcon}
                  alt="questions"
                  className="h-[65px] w-[65px] shrink-0 object-contain"
                />

                <p className="text-[15px] leading-[1.5] text-[#6c6c6c]">
                  If you have any quries, please feel free to contact us on{" "}
                  <span className="font-semibold text-[#4a4a4a]">
                    (021) 111-212-212
                  </span>
                  . Our working hours are Monday - Saturday from 10am to 7pm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
          <div className="max-h-[90vh] w-full max-w-[900px] overflow-y-auto rounded-[18px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-[24px] font-bold text-[#3048a8]">
                Submitted Details
              </h2>

              <button
                onClick={() => setShowPopup(false)}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#edf3fa] text-[24px] leading-none text-[#24407b]"
              >
                ×
              </button>
            </div>

            <div className="mb-6 rounded-[14px] border border-[#d6e0ee] bg-[#f9fbfe] p-5">
              <h3 className="mb-3 text-[18px] font-semibold text-[#24385f]">
                Selected Plan
              </h3>
              <DetailRow label="Plan Name" value={selectedPlan.name} />
              <DetailRow label="Rate" value={selectedPlan.rate} />
              <DetailRow label="Installment" value={selectedPlan.installment} />
              <DetailRow label="Total" value={selectedPlan.total} />
            </div>

            <div className="mb-6 rounded-[14px] border border-[#d6e0ee] bg-[#f9fbfe] p-5">
              <h3 className="mb-3 text-[18px] font-semibold text-[#24385f]">
                Health Form Details
              </h3>
              <DetailRow label="Insurance For" value={getInsuranceTypeLabel()} />
              <DetailRow label="Your Age" value={formData.myAge} />
              <DetailRow label="Spouse Age" value={formData.spouseAge} />
              <DetailRow label="Hospitalization Limit" value={getLimitLabel()} />
            </div>

            <div className="mb-6 rounded-[14px] border border-[#d6e0ee] bg-[#f9fbfe] p-5">
              <h3 className="mb-3 text-[18px] font-semibold text-[#24385f]">
                Personal Details
              </h3>
              <DetailRow label="First Name" value={personalForm.firstName} />
              <DetailRow label="Last Name" value={personalForm.lastName} />
              <DetailRow label="CNIC" value={personalForm.cnic} />
              <DetailRow
                label="CNIC Issue Date"
                value={personalForm.cnicIssueDate}
              />
              <DetailRow label="Date of Birth" value={personalForm.dob} />
              <DetailRow
                label="Contact Number"
                value={personalForm.contactNumber}
              />
              <DetailRow label="Email" value={personalForm.email} />
              <DetailRow label="Occupation" value={personalForm.occupation} />
              <DetailRow
                label="Marital Status"
                value={personalForm.maritalStatus}
              />
              <DetailRow label="City" value={personalForm.city} />
              <DetailRow label="Address" value={personalForm.address} />
            </div>

            <div className="rounded-[14px] border border-[#d6e0ee] bg-[#f9fbfe] p-5">
              <h3 className="mb-3 text-[18px] font-semibold text-[#24385f]">
                Payment Details
              </h3>
              <DetailRow label="Payment Method" value={getPaymentLabel()} />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default HealthDone;