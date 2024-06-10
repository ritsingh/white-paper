import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import AnimeCursor from "./components/AnimeCursor";
import ScrollToTop from "./components/ScrollToTop";
import Carrier from "./pages/Carrier";
import Shipper from "./pages/Shipper";
import Esang from "./pages/Esang";
import BusinessOverview from "./pages/BusinessOverview";
function App() {
  return (
    <div className="bg-black from-slate-900 via-purple-900 to-slate-900">
      <AnimeCursor />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrier" element={<Carrier />} />
        <Route path="/shipper" element={<Shipper />} />
        <Route path="/esang" element={<Esang />} />
        <Route path="/business-overview" element={<BusinessOverview />} />
      </Routes>
    </div>
  );
}

export default App;
