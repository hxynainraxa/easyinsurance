import { useEffect, useRef, useState } from "react";
import { carInsuranceTypes } from "../data/Car-Insurance";

function CarInsuranceSlider() {
  const visibleCards = 2;
  const originalCards = carInsuranceTypes;

  // clone first 2 cards at end for smooth loop
  const cards = [...originalCards, ...originalCards.slice(0, visibleCards)];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const trackRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTransitionEnd = () => {
    // when we reach cloned area, jump back to start without animation
    if (currentIndex >= originalCards.length) {
      setIsTransitionEnabled(false);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (!isTransitionEnabled) {
      const id = requestAnimationFrame(() => {
        const id2 = requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
        });
        return () => cancelAnimationFrame(id2);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [isTransitionEnabled]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-[#fff] py-[56px] md:py-[70px]">
      <div className="mx-auto max-w-[1240px] px-4 md:px-8 lg:px-10">
        <h2 className="mb-[34px] text-center text-[28px] font-extrabold text-[#243c96] md:text-[40px]">
          Types of car insurance
        </h2>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            className={`flex ${isTransitionEnabled ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{
              width: `${(cards.length / visibleCards) * 100}%`,
              transform: `translateX(-${currentIndex * (100 / cards.length)}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="shrink-0 px-[8px]"
                style={{
                  width: `${100 / cards.length}%`,
                }}
              >
                <div className="flex min-h-[300px] rounded-[18px] bg-[#efefef] p-[16px]">
                  <div className="flex gap-[16px]">
                    <div className="h-[130px] w-[130px] shrink-0 overflow-hidden rounded-[16px] bg-[#dbe8f6]">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="mb-[6px] text-[22px] font-extrabold text-[#243c96]">
                        {card.title}
                      </h3>

                      <p className="text-[14px] leading-[1.8] text-[#303030]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

<div className="mt-[26px] flex justify-center gap-[8px]">
  {[0, 1].map((index) => {
    const activeIndex = currentIndex % 3;

    const isActive =
      index === 0
        ? activeIndex === 0
        : activeIndex === 1 || activeIndex === 2;

    return (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`h-[8px] w-[62px] transition-all duration-300 ${
          isActive ? "bg-[#32459f]" : "bg-[#cfd5e6]"
        }`}
      />
    );
  })}
</div>
      </div>
    </section>

  );

}

export default CarInsuranceSlider;