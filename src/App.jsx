import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Header/Slider";
import InsuranceProvidersSection from "./components/InsuranceProvider";
import WhySmartchoice from "./components/WhySmartChoice";
import HealthSection from "./components/HealthSection";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import FAQs from "./components/FAQsSection";
import Car from "./components/CarSection/Car";
import { faqsData } from "./components/data/smartchoice-menu-data";
import HealthInsurancePage from "./components/HealthInsurance/Health";
import CarPlans from "./components/CarSection/AfterForm";
import HealthPlans from "./components/HealthInsurance/HealthPlans";
import CarSurveyForm from "./components/CarSection/CarSurveyForm";
import HealthBuy from "./components/HealthInsurance/HealthBuy";
import HealthReview from "./components/HealthInsurance/HealthReview";
import HealthPayment from "./components/HealthInsurance/HealthPayment";
import HealthDone from "./components/HealthInsurance/HealthDone";

function HomePage() {
  return (
    <>
      <Slider />
      <Navbar />
      <Hero />
      <InsuranceProvidersSection />
      <WhySmartchoice />
      <HealthSection />
      <FAQs faqsData={faqsData} />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/car" element={<Car />} />
      <Route path="/car-insurance" element={<Car />} />
      <Route path="/car/comprehensive-insurance" element={<Car />} />

      <Route path="/health" element={<HealthInsurancePage />} />
      <Route path="/health-insurance" element={<HealthInsurancePage />} />
      <Route
        path="/health/individual-health-insurance"
        element={<HealthInsurancePage />}
      />

      <Route path="/car-plans" element={<CarPlans />} />
      <Route path="/car-survey" element={<CarSurveyForm />} />
      <Route path="/health-plans" element={<HealthPlans />} />
      <Route path="/health-buy" element={<HealthBuy />} />
      <Route path="/health-review" element={<HealthReview />} />
      <Route path="/health-payment" element={<HealthPayment />} />
      <Route path="/health-done" element={<HealthDone />} />
    </Routes>
  );
}

export default App;