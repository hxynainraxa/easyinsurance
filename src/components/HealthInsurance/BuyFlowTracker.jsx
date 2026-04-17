function BuyFlowTracker({ steps }) {
  return (
    <div className="sticky top-0 z-40 border-b border-[#d9d9d9] bg-white shadow-sm">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-4">
        {steps.map((step) => {
          const isActive = step.active;
          const isCompleted = step.completed;

          return (
            <div key={step.id} className="flex flex-1 flex-col items-center">
              
              {/* ICON */}
              <div
                className={`flex h-[26px] min-w-[46px] items-center justify-center px-3 text-[13px] font-semibold
                [clip-path:polygon(0_0,85%_0,100%_50%,85%_100%,0_100%)]
                
                ${
                  isActive
                    ? "bg-[#efa61a] text-white" // 🔥 active = yellow
                    : isCompleted
                    ? "border border-[#cfcfcf] bg-white text-[#7a7a7a]" // completed
                    : "border border-[#d9d9d9] bg-white text-[#c4c4c4]" // inactive
                }`}
              >
                {isActive || isCompleted ? "✓" : ""}
              </div>

              {/* LABEL */}
              <span
                className={`mt-2 text-center text-[13px] ${
                  isActive
                    ? "text-[#ef9807]"
                    : "text-[#a8a8a8]"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BuyFlowTracker;