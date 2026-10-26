import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/our-company/AboutUs";
import Leadership from "./pages/our-company/Leadership";
import CertificationsAndRecognitions from "./pages/our-company/CertificationsAndRecognitions";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/company/about-us" element={<AboutUs />} />
          <Route path="/company/leadership" element={<Leadership />} />
          <Route
            path="/company/certifications-recognitions"
            element={<CertificationsAndRecognitions />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
