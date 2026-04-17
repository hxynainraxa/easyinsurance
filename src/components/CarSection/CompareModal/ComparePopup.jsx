import React from "react";

function ComparePopup({
  selectedPlans,
  onRemove,
  onCompareAll,
  onClearAll,
}) {
  const canCompare = selectedPlans.length >= 2;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#cfe0f2] bg-[#dff0ff] px-6 py-3 shadow-[0_-4px_18px_rgba(27,55,100,0.12)]">
      <div className="mx-auto flex max-w-[1280px] items-center gap-4">
        <div className="flex flex-1 gap-3 overflow-x-auto">
          {[0, 1, 2].map((slotIndex) => {
            const plan = selectedPlans[slotIndex];

            if (!plan) {
              return (
                <div
                  key={slotIndex}
                  className="flex h-[108px] min-w-[372px] items-center justify-center rounded-[12px] border border-dashed border-[#9ab8d7] bg-[#dff0ff] text-[16px] text-[#7d99b5]"
                >
                  Compare up to 3 deals
                </div>
              );
            }

            return (
              <div
                key={plan.id}
                className="relative flex h-[108px] min-w-[372px] overflow-hidden rounded-[12px] border border-[#d6e0ee] bg-white"
              >
                <button
                  onClick={() => onRemove(plan.id)}
                  className="absolute right-3 top-3 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#dbe7f2] text-[18px] leading-none text-[#1d2f56]"
                >
                  ×
                </button>

                <div className="flex w-[136px] items-center justify-center border-r border-[#d6e0ee] px-4">
                  <img
                    src={plan.logo}
                    alt={plan.name}
                    className="h-[62px] w-[82px] object-contain"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center px-4">
                  <p className="line-clamp-2 text-[18px] font-medium leading-[1.2] text-[#1c2230]">
                    {plan.name}
                  </p>
                  <p className="mt-1 text-[15px] font-bold text-[#2c47aa]">
                    {plan.total}
                  </p>
                  <p className="text-[14px] text-[#5b6578]">Premium/Year</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex min-w-[160px] flex-col gap-3">
          <button
            onClick={onCompareAll}
            disabled={!canCompare}
            className={`h-[38px] rounded-[10px] text-[16px] font-semibold text-white transition ${
              canCompare
                ? "bg-gradient-to-r from-[#2c85c8] to-[#3147a9]"
                : "cursor-not-allowed bg-[#b9c9d8]"
            }`}
          >
            Compare all
          </button>

          <button
            onClick={onClearAll}
            className="h-[38px] rounded-[10px] bg-[#e9edf2] text-[16px] font-semibold text-[#4c5566] transition hover:bg-[#dbe2ea]"
          >
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComparePopup;