import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/layout/layout.jsx"; // import Layout
import Tempo from "./components/pages/Tempo.jsx";
import FAQ from "./components/pages/FAQ.jsx";
import Corporate from "./components/pages/Corporate.jsx";
import Contact from "./components/pages/Contact.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your layout route */}
        <Route path="/" element={<Layout />}>
          {/* Define nested routes that will be rendered inside the Layout's Outlet */}
          <Route path="/" element={<Home />} />
          <Route path="/tempo-traveller" element={<Tempo/>} />
          <Route path="/corporate" element={<Corporate/>} />
          <Route path="/faqs" element={<FAQ/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;