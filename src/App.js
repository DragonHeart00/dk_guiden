import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Footer from "./components/footer/Footer";
import { ThemeContext } from "./Context/theme";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact/Contact";
import RegistrationForm from "./components/register/RegisterForm";
import ConfirmScreen from "./components/confirm/ConfirmScreen";

function App() {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
      <div className={`${themename} app`}>
        <Router>
          <div className="App">
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ydelsere" element={<Service />} />
              <Route path="/om-os" element={<About />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/confirm" element={<ConfirmScreen />} />
              <Route path="/opret-virksomhed" element={<RegistrationForm />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </div>
  );
}

export default App;
