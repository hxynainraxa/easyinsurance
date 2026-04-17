import React from "react";

function ComparePlansModal({ isOpen, onClose, selectedPlans }) {
  if (!isOpen) return null;

  const features = [
    { key: "rate", label: "Rate" },
    { key: "installment", label: "Installment Plan" },
    { key: "total", label: "Total" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 py-6">
      <div className="relative max-h-[90vh] w-full max-w-[1180px] overflow-y-auto rounded-[18px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#d9e4f0] bg-white px-6 py-5">
          <div>
            <h2 className="text-[28px] font-bold text-[#1b2f5b]">
              Compare Plans
            </h2>
            <p className="mt-1 text-[14px] text-[#6c7891]">
              Compare up to 3 selected plans
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#edf3fa] text-[24px] leading-none text-[#24407b]"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: `220px repeat(${selectedPlans.length}, minmax(0, 1fr))`,
            }}
          >
            <div></div>

            {selectedPlans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-[14px] border border-[#d6e0ee] bg-[#f9fbfe] p-5 text-center"
              >
                <img
                  src={plan.logo}
                  alt={plan.name}
                  className="mx-auto mb-4 h-[64px] w-[90px] object-contain"
                />
                <h3 className="min-h-[52px] text-[18px] font-semibold leading-[1.25] text-[#1e2b44]">
                  {plan.name}
                </h3>
              </div>
            ))}

            {features.map((feature) => (
              <React.Fragment key={feature.key}>
                <div className="flex items-center rounded-[12px] border border-[#d6e0ee] bg-[#edf3fa] px-4 py-4 text-[16px] font-semibold text-[#24385f]">
                  {feature.label}
                </div>

                {selectedPlans.map((plan) => (
                  <div
                    key={`${plan.id}-${feature.key}`}
                    className="rounded-[12px] border border-[#d6e0ee] bg-white px-4 py-4 text-[17px] font-semibold text-[#1d2d52]"
                  >
                    {plan[feature.key]}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparePlansModal;