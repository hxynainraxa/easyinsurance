import logo from "../../assets/logo.svg";
// import backArrow from "../../../assets/back-arrow.png";

function BuyFlowHeader({ onBack }) {
  return (
    <div className="border-b border-[#d9d9d9] bg-white">
      <div className="mx-auto flex h-[62px] max-w-[1360px] items-center justify-between px-6">
        <button
          onClick={onBack}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#dce8f6] transition-all duration-200 hover:bg-[#c9dcf3]"
        >
          {/* <img src={backArrow} alt="back" className="h-[14px] w-[14px] object-contain" /> */}
          <span className="text-[20px] font-semibold text-[#223e91]">←</span>
        </button>

        <img
          src={logo}
          alt="smartchoice"
          className="h-[38px] w-auto object-contain"
        />

        <div className="w-[40px]" />
      </div>
    </div>
  );
}

export default BuyFlowHeader;