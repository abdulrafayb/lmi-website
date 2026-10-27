import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/our-company/AboutUs";
import Leadership from "./pages/our-company/Leadership";
import CertificationsAndRecognitions from "./pages/our-company/CertificationsAndRecognitions";
import IndustriesOverview from "./pages/industries/Overview";
import Automotive from "./pages/industries/Automotive";
import ConstructionAndEngineering from "./pages/industries/ConstructionAndEngineering";
import ManufacturingAndIndustrial from "./pages/industries/ManufacturingAndIndustrial";
import ChemicalsAndPetrochemicals from "./pages/industries/ChemicalsAndPetrochemicals";
import OilGasAndEnergy from "./pages/industries/OilGasAndEnergy";
import ServicesOverview from "./pages/services/Overview";
import RoadFreightTransportation from "./pages/services/RoadFreightTransportation";
import PetroleumTransportation from "./pages/services/PetroleumTransportation";
import ChemicalAndLiquidCargoTransportation from "./pages/services/ChemicalAndLiquidCargoTransportation";
import DryCargoTransportation from "./pages/services/DryCargoTransportation";
import ContainerizedTransportation from "./pages/services/ContainerizedTransportation";
import FullTruckload from "./pages/services/FullTruckload";
import FlatbedTransportation from "./pages/services/FlatbedTransportation";
import HeavyAndProjectCargo from "./pages/services/HeavyAndProjectCargo";

import FleetAndEquipment from "./pages/fleet-and-visiblity/FleetAndEquipment";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route
            path="/fleet-visibility/fleet-equipment"
            element={<FleetAndEquipment />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/company/about-us" element={<AboutUs />} />
          <Route path="/company/leadership" element={<Leadership />} />
          <Route
            path="/company/certifications-recognitions"
            element={<CertificationsAndRecognitions />}
          />
          <Route path="/industries" element={<IndustriesOverview />} />
          <Route path="/industries/automotive" element={<Automotive />} />
          <Route
            path="/industries/construction-engineering"
            element={<ConstructionAndEngineering />}
          />
          <Route
            path="/industries/manufacturing-industrial"
            element={<ManufacturingAndIndustrial />}
          />
          <Route
            path="/industries/chemicals-petrochemicals"
            element={<ChemicalsAndPetrochemicals />}
          />
          <Route
            path="/industries/oil-gas-energy"
            element={<OilGasAndEnergy />}
          />
          <Route path="/services" element={<ServicesOverview />} />
          <Route
            path="/services/road-freight-transportation"
            element={<RoadFreightTransportation />}
          />
          <Route
            path="/services/petroleum-transportation"
            element={<PetroleumTransportation />}
          />
          <Route
            path="/services/chemical-liquid-cargo-transportation"
            element={<ChemicalAndLiquidCargoTransportation />}
          />
          <Route
            path="/services/dry-cargo-transportation"
            element={<DryCargoTransportation />}
          />
          <Route
            path="/services/containerized-transportation"
            element={<ContainerizedTransportation />}
          />
          <Route
            path="/services/full-truckload-ftl"
            element={<FullTruckload />}
          />
          <Route
            path="/services/flatbed-transportation"
            element={<FlatbedTransportation />}
          />
          <Route
            path="/services/heavy-project-cargo"
            element={<HeavyAndProjectCargo />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
