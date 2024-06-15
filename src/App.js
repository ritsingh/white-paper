import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Carrier from "./pages/Carrier";
import Shipper from "./pages/Shipper";
import Esang from "./pages/Esang";
import BusinessOverview from "./pages/BusinessOverview";
function App() {
  return (
    <div className="bg-black from-slate-900 via-purple-900 to-slate-900 pb-24">
      <img
        src="./logo.svg"
        alt="image 1"
        className="header-logo p-10"
      />
      <img
        src="./side-float.png"
        alt="image 1"
        className="side-float"
      />
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/carrier" element={<Carrier />} />
          <Route exact path="/shipper" element={<Shipper />} />
          <Route exact path="/esang" element={<Esang />} />
          <Route exact path="/business-overview" element={<BusinessOverview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
