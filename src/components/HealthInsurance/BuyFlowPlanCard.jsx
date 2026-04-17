function BuyFlowPlanCard({ selectedPlan, insuranceFor }) {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[8px] border border-[#dde3ea] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
        <div className="px-6 pt-5 text-center">
          {selectedPlan?.logo ? (
            <img
              src={selectedPlan.logo}
              alt={selectedPlan.company || "plan"}
              className="mx-auto mb-3 h-[52px] w-[52px] object-contain"
            />
          ) : (
            <div className="mx-auto mb-3 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#eaf1f7] text-[12px] font-semibold text-[#1f2b3d]">
              Logo
            </div>
          )}

          <p className="text-[13px] uppercase text-[#1f2b3d]">
            {selectedPlan.company || "EFU-LIFE"}
          </p>

          <p className="mt-1 text-[15px] font-semibold leading-[1.2] text-[#1f2b3d]">
            {selectedPlan.name || "Sehat Shield - Bronze"}
          </p>
        </div>

        <div className="mx-4 mt-4 border-t border-[#d9dfe7]" />

        <div className="px-5 py-4">
          <div className="flex items-center justify-between">
            <span className="text-[14px] text-[#1f2b3d]">Members</span>
            <span className="text-[14px] font-medium text-[#1f2b3d]">
              {insuranceFor}
            </span>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-[14px] text-[#1f2b3d]">Premium</span>
            <span className="text-[16px] font-bold text-[#3044a1]">
              {selectedPlan.price || "Rs. 6,821"}
            </span>
          </div>
        </div>

        <div className="border-t border-[#d9dfe7]">
          <button className="flex h-[40px] w-full items-center justify-center bg-[#dce8f6] text-[16px] font-semibold text-[#2d3f9f] transition-colors duration-200 hover:text-[#ef9807]">
            Promo Discount Voucher
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyFlowPlanCard;