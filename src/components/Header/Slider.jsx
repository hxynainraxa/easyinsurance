import React from "react";

function Slider() {
  return (
    <div className="w-full overflow-hidden bg-[#263b86]">
      <div className="relative flex h-[52px] items-center">
        <div className="absolute left-0 top-0 z-20 h-full">
          <button className="relative h-full bg-[#f4a61d] px-6 pr-8 text-[14px] font-bold uppercase text-white">
            NEW
            <span className="absolute right-[-18px] top-0 h-full w-0 border-b-[26px] border-l-[18px] border-t-[26px] border-b-transparent border-l-[#f4a61d] border-t-transparent"></span>
          </button>
        </div>

        <div className="mx-[120px] flex-1 overflow-hidden">
          <div className="ticker-track flex min-w-max items-center whitespace-nowrap text-white">
            <span className="mx-10 text-[14px] font-medium text-[#f3f6ff]">
              <span className="mr-3 text-[#f4a61d]">•</span>
              Instantly Buy{" "}
              <span className="font-semibold text-[#f4a61d]">
                Third Party Car Insurance
              </span>{" "}
              — No Inspection Required.
            </span>

            <span className="mx-10 text-[14px] font-medium text-[#f3f6ff]">
              <span className="mr-3 text-[#f4a61d]">•</span>
              Instantly Buy{" "}
              <span className="font-semibold text-[#f4a61d]">
                Third Party Car Insurance
              </span>{" "}
              — No Inspection Required.
            </span>

            <span className="mx-10 text-[14px] font-medium text-[#f3f6ff]">
              <span className="mr-3 text-[#f4a61d]">•</span>
              Instantly Buy{" "}
              <span className="font-semibold text-[#f4a61d]">
                Third Party Car Insurance
              </span>{" "}
              — No Inspection Required.
            </span>

            <span className="mx-10 text-[14px] font-medium text-[#f3f6ff]">
              <span className="mr-3 text-[#f4a61d]">•</span>
              Instantly Buy{" "}
              <span className="font-semibold text-[#f4a61d]">
                Third Party Car Insurance
              </span>{" "}
              — No Inspection Required.
            </span>

            <span className="mx-10 text-[14px] font-medium text-[#f3f6ff]">
              <span className="mr-3 text-[#f4a61d]">•</span>
              Instantly Buy{" "}
              <span className="font-semibold text-[#f4a61d]">
                Third Party Car Insurance
              </span>{" "}
              — No Inspection Required.
            </span>

            <span className="mx-10 text-[14px] font-medium text-[#f3f6ff]">
              <span className="mr-3 text-[#f4a61d]">•</span>
              Instantly Buy{" "}
              <span className="font-semibold text-[#f4a61d]">
                Third Party Car Insurance
              </span>{" "}
              — No Inspection Required.
            </span>
          </div>
        </div>

        <div className="absolute right-0 top-0 z-20 h-full">
          <button className="h-full bg-[#f4a61d] px-8 text-[14px] font-bold uppercase tracking-[0.01em] text-white">
            BUY NOW →
          </button>
        </div>
      </div>

      <style>{`
  .ticker-track {
    animation: tickerMove 40s linear infinite;
  }

  .ticker-track:hover {
    animation-play-state: paused;
  }

  @keyframes tickerMove {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`}</style>
    </div>
  );
}

export default Slider;
