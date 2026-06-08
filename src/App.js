import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cleaning from "./Pages/Cleaning/Cleaning";
import ServiceSelection from "./Pages/ServiceSelection/ServiceSelection";
import BookAnAppointment from "./Pages/BookAnAppoinment/BookAnAppoinment";
import Services from "./Pages/Services/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import { Smile } from "lucide-react";
import PreventiveCare from "./Pages/PreventiveCare/PreventiveCare";
import CosmeticProcedures from "./Pages/CosmeticProcedures/CosmeticProcedures";
import RestorativeTreatments from "./Pages/RestorativeTreatments/RestorativeTreatments";
import EmergencyCare from "./Pages/EmergencyCare/EmergencyCare";
import ContactUs from "./Pages/ContactUs/ContactUs";
import OurTeam from "./Pages/OurTeam/OurTeam";
function App() {
  return (
    <BrowserRouter>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#f5f5dc" }}
      >
        <div className="container-fluid px-4">
          <div
            className="navbar-brand d-flex 
                      align-items-center gap-2"
          >
            <span>
              <Smile color="#0D9488" size={32} />
            </span>
            <span className="brand-name">Bright Smiles Dental</span>
          </div>
          <ul
            className="navbar-nav ms-auto d-flex
                       flex-row align-items-center 
                       gap-4"
          >
            <li className="nav-item">
              <Link to="/" className="nav-link fw-bold">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/services" className="nav-link fw-bold">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/our-team" className="nav-link fw-bold">
                Our Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service-selection" className="nav-link fw-bold">
                Book Now
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact-us" className="nav-link fw-bold">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cleaning" element={<Cleaning />} />
        <Route path="/service-selection" element={<ServiceSelection />} />
        <Route path="/book-an-appointment" element={<BookAnAppointment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/preventive-care" element={<PreventiveCare />} />
        <Route path="/cosmetic-procedures" element={<CosmeticProcedures />} />
        <Route path="/restorative-care" element={<RestorativeTreatments />} />
        <Route path="/emergency-care" element={<EmergencyCare />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>
      <footer className="made-by-footer">
        <p>Made by Destan Cakar</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;

/*
Create the Cleaning page that has a form to book the cleaning and some tips and tricks aobut keeping your mouth and teeth clean

Create the root canal page that has a a foprm to book the root cananl, and some info about how to prevent root canals and what they are

Remove the booking form from the main home page

TIP: Put different fields in boht forms (So it looks different for the screen shots20006
)
 <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#f5f5dc" }}
      >
        <Link to="/">Home</Link>
        <Link to="/root-canal">Book Root Canal</Link>
        <Link to="/cleaning">Cleaning Page</Link>
      </nav>
*/
