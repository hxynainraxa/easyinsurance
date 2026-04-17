import { useLocation, useNavigate } from "react-router-dom";
import Slider from "../Header/Slider";
import Footer from "../Footer";
import BuyFlowHeader from "./BuyFlowHeader";
import BuyFlowTracker from "./BuyFlowTracker";
import BuyFlowPlanCard from "./BuyFlowPlanCard";

function HealthReview() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const formData = state?.formData || {};
  const selectedPlan = state?.selectedPlan || {};
  const personalForm = state?.personalForm || {};

  const steps = [
    { id: 1, label: "Personal Details", active: false, completed: true },
    { id: 2, label: "Review Information", active: true, completed: false },
    { id: 3, label: "Select Payment Option", active: false, completed: false },
    { id: 4, label: "Done", active: false, completed: false },
  ];

  const getInsuranceFor = () => {
    if (formData.selectedType === "myself") return "Myself";
    if (formData.selectedType === "family") return "Family";
    if (formData.selectedType === "parents") return "Parents";
    return "Myself";
  };

  const handleEdit = () => {
    navigate("/health-buy", {
      state: {
        formData,
        selectedPlan,
        personalForm,
      },
    });
  };

  const handleProceed = () => {
    navigate("/health-payment", {
      state: {
        formData,
        selectedPlan,
        personalForm,
      },
    });
  };

  return (
    <>
      <Slider />

      <section className="min-h-screen bg-[#eef3f8]">
        <BuyFlowHeader onBack={() => navigate(-1)} />
        <BuyFlowTracker steps={steps} />

        <div className="mx-auto max-w-[1160px] px-4 py-6">
          <div className="grid gap-5 lg:grid-cols-[816px_305px]">
            {/* Left Review Section */}
            <div className="min-h-[589px] rounded-[8px] border border-[#dde3ea] bg-white px-5 py-6 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              <h2 className="text-[28px] font-bold text-[#243c96]">
                Review Information
              </h2>

              <div className="mt-4 border-t border-[#d9dfe7]" />

              <h3 className="mt-6 text-[20px] font-bold text-[#243c96]">
                Your Details:
              </h3>

              <div className="mt-5 grid gap-x-14 gap-y-8 md:grid-cols-2">
                <div>
                  <p className="text-[14px] text-[#1f2b3d]">First Name</p>
                  <p className="mt-1 text-[15px] font-semibold text-[#1f2b3d]">
                    {personalForm.firstName || "-"}
                  </p>
                </div>

                <div>
                  <p className="text-[14px] text-[#1f2b3d]">Last Name</p>
                  <p className="mt-1 text-[15px] font-semibold text-[#1f2b3d]">
                    {personalForm.lastName || "-"}
                  </p>
                </div>

                <div>
                  <p className="text-[14px] text-[#1f2b3d]">CNIC:</p>
                  <p className="mt-1 text-[15px] font-semibold text-[#1f2b3d]">
                    {personalForm.cnic || "-"}
                  </p>
                </div>

                <div>
                  <p className="text-[14px] text-[#1f2b3d]">CNIC Date of Issuance</p>
                  <p className="mt-1 text-[15px] font-semibold text-[#1f2b3d]">
                    {personalForm.cnicIssueDate || "-"}
                  </p>
                </div>

                <div>
                  <p className="text-[14px] text-[#1f2b3d]">Date of Birth</p>
                  <p className="mt-1 text-[15px] font-semibold text-[#1f2b3d]">
                    {personalForm.dob || "-"}
                  </p>
                </div>

                <div>
                  <p className="text-[14px] text-[#1f2b3d]">Contact Number</p>
                  <p className="mt-1 text-[15px] font-semibold text-[#1f2b3d]">
                    {personalForm.contactNumber || "-"}
                  </p>
                </div>

                <div>
                  <p className="text-[14px] text-[#1f2b3d]">Email</p>
                  <p className="mt-1 text-[15px] font-semibold text-[#1f2b3d] break-all">
                    {personalForm.email || "-"}
                  </p>
                </div>

                <div>
                  <p className="text-[14px] text-[#1f2b3d]">Occupation:</p>
                  <p className="mt-1 text-[15px] font-semibold text-[#1f2b3d]">
                    {personalForm.occupation || "-"}
                  </p>
                </div>

                <div>
                  <p className="text-[14px] text-[#1f2b3d]">Marital Status</p>
                  <p className="mt-1 text-[15px] font-semibold uppercase text-[#1f2b3d]">
                    {personalForm.maritalStatus || "-"}
                  </p>
                </div>

                <div>
                  <p className="text-[14px] text-[#1f2b3d]">City</p>
                  <p className="mt-1 text-[15px] font-semibold text-[#1f2b3d]">
                    {personalForm.city || "-"}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <p className="text-[14px] text-[#1f2b3d]">Address</p>
                  <p className="mt-1 text-[15px] font-semibold text-[#1f2b3d]">
                    {personalForm.address || "-"}
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-[#d9dfe7]" />

              <div className="mt-8 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleEdit}
                  className="flex h-[34px] min-w-[74px] items-center justify-center rounded-[8px] border border-[#3959a8] px-5 text-[16px] font-medium text-[#3959a8] transition-all duration-200 hover:bg-[#3959a8] hover:text-white"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={handleProceed}
                  className="flex h-[34px] min-w-[98px] items-center justify-center rounded-[8px] bg-gradient-to-r from-[#2d7ec4] to-[#324aa9] px-5 text-[16px] font-semibold text-white transition-all duration-200 hover:from-[#0d6efd] hover:to-[#0d6efd]"
                >
                  Proceed
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

export default HealthReview;