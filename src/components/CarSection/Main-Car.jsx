import benefitsImage from "../../assets/car-main-pic.png";

const benefits = [
  "Rate as low as 1.5%",
  "Both conventional and shariah compliant plans",
  "Protection for accidental damages, theft and total loss",
  "Third party coverage for bodily injury, property damages and emergency medical",
  "No-claim discount upon policy renewal.",
];

function BenefitsSection() {
  return (
    <section className="bg-[#f3f3f3] py-[56px] md:py-[68px]">
      <div className="mx-auto max-w-[1240px] px-4 md:px-8 lg:px-10">
        <h2 className="mb-[38px] text-center text-[26px] font-extrabold leading-tight text-[#243c96] md:text-[38px]">
          Benefits of Car Insurance
        </h2>

        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
          {/* LEFT */}
          <div className="w-full max-w-[520px] pt-[8px]">
            <p className="mb-[26px] max-w-[500px] text-[15px] leading-[1.75] text-[#1e1e1e] md:text-[16px]">
              Car insurance provides financial protection in the event of
              unexpected accidental damages, vehicle theft, or total loss.
              Smartchoice offers a comparison of the best car insurance quotes
              in Pakistan from top providers, ensuring you receive the best
              price and comprehensive coverage for your vehicle, whether new or
              used.
            </p>

            <h3 className="mb-[14px] text-[22px] font-extrabold leading-tight text-[#1a1a1a] md:text-[28px]">
              Some of the key benefits
            </h3>

            <div className="grid max-w-[540px] grid-cols-1 gap-[14px] md:grid-cols-2">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex min-h-[76px] items-start gap-3 rounded-[10px] bg-white px-[12px] py-[10px] shadow-[0_3px_10px_rgba(0,0,0,0.08)]"
                >
                  <div className="mt-[2px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-2 border-[#f1a01d]">
                    <span className="text-[11px] font-bold leading-none text-[#f1a01d]">
                      ✓
                    </span>
                  </div>

                  <p className="text-[14px] leading-[1.55] text-[#1f1f1f]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex w-full max-w-[590px] justify-center lg:justify-end">
            <img
              src={benefitsImage}
              alt="Benefits of car insurance"
              className="w-full max-w-[520px] object-contain lg:mt-[54px] lg:mr-[8px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;