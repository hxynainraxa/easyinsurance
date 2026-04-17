import { useLocation, useNavigate } from "react-router-dom";
import { Plus, Minus } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import Slider from "../Header/Slider";
import Navbar from "../Header/Navbar";
import habibLogo from "../../assets/habib-insurance.jpeg";
import standardLogo from "../../assets/insurance-2.jpg";
import efuLogo from "../../assets/efu.png";
import jazzcashLogo from "../../assets/jazzcash.png";
import jubileeLogo from "../../assets/jubilee.png";
import tpl from "../../assets/tpl.png";
import editIcon from "../../assets/edit.png";
import downloadIcon from "../../assets/quote-2.png";
import Footer from "../Footer";
import filterIcon from "../../assets/filter.png";
import EnquiryDropdown from "../EnquiryModal";
import ComparePopup from "./CompareModal/ComparePopup";
import ComparePlans from "./CompareModal/ComparePlans";

function CarPlans() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [showFilter, setShowFilter] = useState(false);
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [openEnquiryId, setOpenEnquiryId] = useState(null);

  const filterWrapperRef = useRef(null);
  const filterButtonRef = useRef(null);

  const [selectedComparePlans, setSelectedComparePlans] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const isPlanSelectedForCompare = (planId) => {
    return selectedComparePlans.some((item) => item.id === planId);
  };

  const handleToggleCompare = (plan) => {
    const alreadySelected = selectedComparePlans.some(
      (item) => item.id === plan.id
    );

    if (alreadySelected) {
      setSelectedComparePlans((prev) =>
        prev.filter((item) => item.id !== plan.id)
      );
      return;
    }

    if (selectedComparePlans.length >= 3) {
      return;
    }

    setSelectedComparePlans((prev) => [...prev, plan]);
  };

  const handleRemoveComparedPlan = (planId) => {
    setSelectedComparePlans((prev) => prev.filter((item) => item.id !== planId));
  };

  const handleClearComparedPlans = () => {
    setSelectedComparePlans([]);
    setShowCompareModal(false);
  };

  const formData = state?.formData || {
    brand: "Honda",
    model: "Accord tourer",
    year: "2025",
    value: "22222222",
  };

  const plans = [
    {
      id: 1,
      brand: "habib",
      logo: habibLogo,
      name: "Motor Comprehensive Insurance",
      rate: "1.4%",
      installment: "Rs. 51,852 / month",
      total: "Rs 311,111",
    },
    {
      id: 7,
      brand: "habib",
      logo: habibLogo,
      name: "Motor Accidental",
      rate: "1.9%",
      installment: "Rs. 21,852 / month",
      total: "Rs 111,111",
    },
    {
      id: 2,
      brand: "standard",
      logo: standardLogo,
      name: "Motor Comprehensive Insurance - Standard",
      rate: "1.4%",
      installment: "Rs. 51,852 / month",
      total: "Rs 311,111",
    },
    {
      id: 8,
      brand: "standard",
      logo: standardLogo,
      name: "Standard High Insurance - Standard",
      rate: "2%",
      installment: "Rs. 83,852 / month",
      total: "Rs 811,111",
    },
    {
      id: 3,
      brand: "efu",
      logo: efuLogo,
      name: "Premium Car Protection Plan",
      rate: "1.6%",
      installment: "Rs. 58,900 / month",
      total: "Rs 353,400",
    },
    {
      id: 9,
      brand: "efu",
      logo: efuLogo,
      name: "Basic Car Protection Plan",
      rate: "1.1%",
      installment: "Rs. 28,900 / month",
      total: "Rs 102,400",
    },
    {
      id: 4,
      brand: "tpl",
      logo: tpl,
      name: "Elite Motor Insurance",
      rate: "1.8%",
      installment: "Rs. 64,200 / month",
      total: "Rs 385,200",
    },
    {
      id: 10,
      brand: "tpl",
      logo: tpl,
      name: "Business Motor Insurance",
      rate: "1.6%",
      installment: "Rs. 84,200 / month",
      total: "Rs 290,200",
    },
    {
      id: 5,
      brand: "jazzcash",
      logo: jazzcashLogo,
      name: "Basic Coverage Plan",
      rate: "1.2%",
      installment: "Rs. 42,000 / month",
      total: "Rs 252,000",
    },
    {
      id: 11,
      brand: "jazzcash",
      logo: jazzcashLogo,
      name: "Caring Car Coverage Plan",
      rate: "1.7%",
      installment: "Rs. 92,000 / month",
      total: "Rs 452,000",
    },
    {
      id: 6,
      brand: "jubilee",
      logo: jubileeLogo,
      name: "Comprehensive Plus Plan",
      rate: "1.5%",
      installment: "Rs. 55,300 / month",
      total: "Rs 331,800",
    },
    {
      id: 12,
      brand: "jubilee",
      logo: jubileeLogo,
      name: "Sharing Plus Plan",
      rate: "1.2%",
      installment: "Rs. 20,300 / month",
      total: "Rs 100,800",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!showFilter) return;

      const clickedInsideFilter =
        filterWrapperRef.current &&
        filterWrapperRef.current.contains(event.target);

      const clickedFilterButton =
        filterButtonRef.current &&
        filterButtonRef.current.contains(event.target);

      if (!clickedInsideFilter && !clickedFilterButton) {
        setShowFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilter]);

  const formatCurrency = (value) => {
    if (!value) return "Rs 0";
    return `Rs ${Number(value).toLocaleString("en-PK")}`;
  };

  const getNumericPrice = (price) =>
    Number(String(price).replace(/[^\d]/g, "")) || 0;

  const getNumericRate = (rate) =>
    Number(String(rate).replace(/[^\d.]/g, "")) || 0;

  const sortedPlans = useMemo(() => {
    let filtered = [...plans];

    if (selectedBrand !== "all") {
      filtered = filtered.filter((plan) => plan.brand === selectedBrand);
    }

    filtered.sort((a, b) => {
      if (sortBy === "price") {
        return sortOrder === "lowToHigh"
          ? getNumericPrice(a.total) - getNumericPrice(b.total)
          : getNumericPrice(b.total) - getNumericPrice(a.total);
      }

      if (sortBy === "percentage") {
        return sortOrder === "lowToHigh"
          ? getNumericRate(a.rate) - getNumericRate(b.rate)
          : getNumericRate(b.rate) - getNumericRate(a.rate);
      }

      if (sortBy === "title") {
        return sortOrder === "aToZ"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }

      return 0;
    });

    return filtered;
  }, [sortBy, sortOrder, selectedBrand]);

  const handleSortByChange = (value) => {
    setSortBy(value);

    if (value === "title") {
      setSortOrder("aToZ");
    } else {
      setSortOrder("lowToHigh");
    }
  };

  return (
    <>
      <Slider />
      <Navbar />
      <div className="bg-[linear-gradient(180deg,#a8cff7_0%,#f2f7fa_60%,#ffffff_100%)] pb-10 pt-8"></div>

      <section className="min-h-screen bg-white pb-[150px] pt-8">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-1 text-[14px] text-[#1f2b3d]">
              <p>
                Car Make: <span className="font-bold">{formData.brand}</span>
              </p>
              <p>
                Car Model: <span className="font-bold">{formData.model}</span>
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:w-[600px]">
              <div className="relative flex items-start gap-4">
                <button
                  onClick={() => navigate(-1)}
                  className="flex h-[26px] items-center gap-2 rounded border border-[#8ea6c7] px-3 text-[12px] text-[#35507d] transition hover:bg-[#35507d] hover:text-white"
                >
                  Edit
                  <img
                    src={editIcon}
                    alt="edit"
                    className="h-[15px] w-[12px] object-contain"
                  />
                </button>

                <button
                  ref={filterButtonRef}
                  onClick={() => setShowFilter((prev) => !prev)}
                  className="flex h-[26px] items-center gap-2 rounded border border-[#3959a8] px-3 text-[12px] font-medium text-[#3959a8] transition hover:bg-[#3959a8] hover:text-white"
                >
                  <img
                    src={filterIcon}
                    alt="filter"
                    className="h-[15px] w-[15px] object-contain"
                  />
                  Filter
                </button>

                {showFilter && (
                  <div
                    ref={filterWrapperRef}
                    className="absolute left-[82px] top-[36px] z-30 w-[260px] rounded-[14px] border border-[#d6e0ee] bg-white p-4 shadow-[0_10px_24px_rgba(27,55,100,0.12)]"
                  >
                    <div className="mb-3">
                      <div className="mb-3">
                        <p className="mb-2 text-[13px] font-semibold text-[#22314c]">
                          Brand
                        </p>

                        <select
                          value={selectedBrand}
                          onChange={(e) => setSelectedBrand(e.target.value)}
                          className="h-[38px] w-full rounded-[10px] border border-[#cfd9e8] px-3 text-[13px] text-[#22314c] outline-none focus:border-[#3959a8]"
                        >
                          <option value="all">All Brands</option>
                          <option value="habib">Habib</option>
                          <option value="standard">Standard</option>
                          <option value="efu">EFU</option>
                          <option value="tpl">TPL</option>
                          <option value="jazzcash">Jazzcash</option>
                          <option value="jubilee">Jubilee</option>
                        </select>
                      </div>

                      <p className="mb-2 text-[13px] font-semibold text-[#22314c]">
                        Filter by
                      </p>
                      <select
                        value={sortBy}
                        onChange={(e) => handleSortByChange(e.target.value)}
                        className="h-[38px] w-full rounded-[10px] border border-[#cfd9e8] px-3 text-[13px] text-[#22314c] outline-none focus:border-[#3959a8]"
                      >
                        <option value="price">Price</option>
                        <option value="title">Title</option>
                        <option value="percentage">Percentage</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <p className="mb-2 text-[13px] font-semibold text-[#22314c]">
                        Order
                      </p>
                      <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="h-[38px] w-full rounded-[10px] border border-[#cfd9e8] px-3 text-[13px] text-[#22314c] outline-none focus:border-[#3959a8]"
                      >
                        {sortBy === "title" ? (
                          <>
                            <option value="aToZ">A to Z</option>
                            <option value="zToA">Z to A</option>
                          </>
                        ) : (
                          <>
                            <option value="lowToHigh">Low to High</option>
                            <option value="highToLow">High to Low</option>
                          </>
                        )}
                      </select>
                    </div>

                    <button
                      onClick={() => {
                        setSortBy("price");
                        setSortOrder("lowToHigh");
                        setSelectedBrand("all");
                      }}
                      className="h-[36px] w-full rounded-[10px] bg-[#edf3fa] text-[13px] font-semibold text-[#3044a1] transition hover:bg-[#3044a1] hover:text-white"
                    >
                      Reset Filter
                    </button>
                  </div>
                )}

                <div className="h-[42px] w-px bg-[#b8c8dd]" />

                <div className="flex-1 text-[14px] text-[#2d3a53]">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="min-w-[78px]">Model Year</span>
                    <div className="h-px flex-1 bg-[#7c8da7]" />
                    <span className="font-bold">{formData.year}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="min-w-[78px]">Market Price</span>
                    <div className="h-px flex-1 bg-[#7c8da7]" />
                    <span className="font-bold">
                      {formatCurrency(formData.value)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mb-5 text-[16px] font-semibold text-[#1f2b3d]">
            Showing {sortedPlans.length} Plans
          </h2>

          <div className="mb-5 flex items-center justify-end gap-5">
            <p className="text-[14px] text-[#22314c]">
              Quote Id: <span className="font-semibold">vxfgh</span>
            </p>

            <button className="flex h-[38px] items-center gap-2 rounded-[10px] border border-[#3959a8] px-4 text-[14px] font-medium text-[#3959a8] transition-all duration-200 hover:border-[#3959a8] hover:bg-[#3959a8] hover:text-white">
              <img
                src={downloadIcon}
                alt=""
                className="h-[20px] w-[40px] object-contain"
              />
              Download Quote
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_214px]">
            <div className="space-y-5">
              {sortedPlans.map((plan) => {
                const isSelected = isPlanSelectedForCompare(plan.id);

                return (
                  <div
                    key={plan.id}
                    className="overflow-hidden rounded-[14px] border border-[#d6e0ee] bg-white shadow-[0_2px_8px_rgba(27,55,100,0.08)]"
                  >
                    <div className="grid min-h-[160px] grid-cols-[150px_1fr_160px]">
                      <div className="flex flex-col items-center justify-center border-r border-[#d6e0ee] bg-white px-4 text-center">
                        <img
                          src={plan.logo}
                          alt={plan.name}
                          className="mb-3 h-[60px] w-[85px] object-contain"
                        />
                        <p className="text-[14px] font-medium leading-[1.2] text-[#1d2433]">
                          {plan.name}
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 bg-white px-5 py-5">
                        <div>
                          <p className="mb-1 text-[15px] font-normal text-[#8a8f9c]">
                            Rate
                          </p>
                          <p className="text-[18px] font-bold leading-none text-[#18316b]">
                            {plan.rate}
                          </p>
                        </div>

                        <div>
                          <p className="mb-1 flex items-center gap-1 text-[15px] font-normal text-[#8a8f9c]">
                            Installment Plan
                            <span className="inline-flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#22314c] text-[10px] font-semibold text-white">
                              i
                            </span>
                          </p>
                          <p className="text-[18px] font-bold leading-none text-[#1e2b44]">
                            {plan.installment}
                          </p>
                        </div>

                        <div>
                          <p className="mb-1 text-[15px] font-normal text-[#8a8f9c]">
                            Total
                          </p>
                          <p className="text-[18px] font-bold leading-none text-[#2947a7]">
                            {plan.total}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-start bg-white px-4 pb-4 pt-4">
                        <button
                          onClick={() => handleToggleCompare(plan)}
                          className={`group mb-3 flex h-[34px] w-[132px] items-center justify-center gap-2 rounded-[8px] border text-[13px] font-medium shadow-[0_1px_4px_rgba(27,55,100,0.08)] transition-all duration-200 ${
                            isSelected
                              ? "border-[#3044a1] bg-[#eef3ff] text-[#3044a1]"
                              : "border-[#d9e2f1] bg-white text-[#42506a]"
                          }`}
                        >
                          <span className="flex h-[16px] w-[16px] items-center justify-center">
                            {isSelected ? (
                              <Minus
                                size={16}
                                strokeWidth={2.8}
                                className="text-[#ef9807] transition-all duration-200"
                              />
                            ) : (
                              <Plus
                                size={16}
                                strokeWidth={2.8}
                                className="text-[#233d91] transition-all duration-200 group-hover:text-[#ef9807]"
                              />
                            )}
                          </span>

                          <span>{isSelected ? "Added" : "Add to compare"}</span>
                        </button>

                        <span className="mb-3 block h-[8px] w-[13px] rounded-full bg-[#ff1f2d]" />

                        <button
                          onClick={() =>
                            setOpenEnquiryId(
                              openEnquiryId === plan.id ? null : plan.id
                            )
                          }
                          className="mb-3 h-[40px] w-[140px] rounded-[10px] bg-[#dfe5eb] text-[14px] font-medium text-[#273449] transition hover:bg-[#cfd6dd]"
                        >
                          Enquire Now
                        </button>

                        <button
                          onClick={() =>
                            navigate("/car-survey", {
                              state: {
                                plan,
                                formData,
                              },
                            })
                          }
                          className="h-[40px] w-[140px] rounded-[10px] bg-gradient-to-r from-[#2c85c8] to-[#3147a9] text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#0d6efd] hover:from-[#0d6efd] hover:to-[#0d6efd]"
                        >
                          Buy
                        </button>
                      </div>
                    </div>

                    <EnquiryDropdown
                      isOpen={openEnquiryId === plan.id}
                      onClose={() => setOpenEnquiryId(null)}
                      planName={plan.name}
                      onSubmit={(data) => {
                        console.log("Car enquiry:", {
                          ...data,
                          plan,
                          formData,
                        });
                      }}
                    />

                    <button className="flex h-[30px] w-full items-center justify-center gap-1 border-t border-[#dfe8f4] bg-[#edf3fa] text-[14px] font-semibold text-[#3044a1] hover:text-[#ef9807]">
                      More detail <span className="text-[13px]">›</span>
                    </button>
                  </div>
                );
              })}
            </div>

            <aside className="overflow-hidden rounded-[4px] bg-[#f7f7f7]">
              <div className="border-b border-[#e1e1e1] px-6 py-4 text-center">
                <h3 className="text-[24px] font-medium uppercase text-[#111]">
                  Excellent
                </h3>
                <div className="mt-2 text-[34px] leading-none text-[#f28c28]">
                  ★★★★★
                </div>
                <p className="mt-3 text-[18px] text-[#222]">
                  4.83 <span className="text-[#9a9a9a]">Average</span>
                </p>
                <p className="text-[18px] text-black">251 Reviews</p>
              </div>

              <div className="max-h-[420px] space-y-4 overflow-y-auto px-3 py-4">
                <div className="rounded bg-white p-4 shadow-sm">
                  <h4 className="truncate text-[14px] font-semibold text-[#222]">
                    Muhammad N...
                  </h4>
                  <div className="mt-2 text-[22px] leading-none text-[#f28c28]">
                    ★★★★★
                  </div>
                  <p className="mt-3 text-[14px] text-[#333]">Behatreen.</p>
                  <p className="mt-4 text-right text-[12px] text-[#8e8e8e]">
                    2 years ago
                  </p>
                </div>

                <div className="rounded bg-white p-4 shadow-sm">
                  <h4 className="truncate text-[14px] font-semibold text-[#222]">
                    Hasan Raza
                  </h4>
                  <div className="mt-2 text-[22px] leading-none text-[#f28c28]">
                    ★★★★★
                  </div>
                  <p className="mt-3 text-[14px] text-[#333]">Good service</p>
                  <p className="mt-4 text-right text-[12px] text-[#8e8e8e]">
                    2 years ago
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ComparePlans
        isOpen={showCompareModal}
        onClose={() => setShowCompareModal(false)}
        selectedPlans={selectedComparePlans}
      />

      {selectedComparePlans.length > 0 && (
        <ComparePopup
          selectedPlans={selectedComparePlans}
          onRemove={handleRemoveComparedPlan}
          onCompareAll={() => setShowCompareModal(true)}
          onClearAll={handleClearComparedPlans}
        />
      )}

      <Footer />
    </>
  );
}

export default CarPlans;