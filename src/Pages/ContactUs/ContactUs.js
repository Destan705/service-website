import "./ContactUs.css";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Smile } from "lucide-react";
import { Link } from "react-router-dom";
import ContactUsPic from "./../../images/ContactUs.png";

function ContactUs() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h1 className="contact-title">Visit Our Clinic</h1>
          <p className="contact-subtitle">
            We're conveniently located in the heart of downtown. Free parking
            available.
          </p>

          <div className="contact-item">
            <MapPin color="#0D9488" size={24} />
            <div>
              <p className="contact-label">Address</p>
              <p className="contact-text">192 Dental Avenue, Suite 225</p>
              <p className="contact-text">San Francisco, CA 65203</p>
            </div>
          </div>

          <div className="contact-item">
            <Phone color="#0D9488" size={24} />
            <div>
              <p className="contact-label">Phone</p>
              <p className="contact-text">(111) 786-6105</p>
            </div>
          </div>

          <div className="contact-item">
            <Mail color="#0D9488" size={24} />
            <div>
              <p className="contact-label">Email</p>
              <p className="contact-text">hello@brightsmilesdental.com</p>
            </div>
          </div>

          <div className="contact-item">
            <Clock color="#0D9488" size={24} />
            <div>
              <p className="contact-label">Hours</p>
              <p className="contact-text">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="contact-text">Saturday: 9:00 AM - 5:00 PM</p>
              <p className="contact-text">Sunday: 8:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
        <div className="contact-image">
          <img
            src={ContactUsPic}
            alt=""
            className="contact-us-pic"
            style={{ width: "500px", height: "500px" }}
          />
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <Smile color="#0D9488" size={24} />
              <span>BrightSmile Dental</span>
            </div>
            <p className="footer-tagline">
              Quality dental care for the whole family since 2010.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Services</h4>
            <Link to="/preventive-care">General Dentistry</Link>
            <Link to="/cosmetic-procedures">Cosmetic Dentistry</Link>
            <Link to="/restorative-care">Restorative Care</Link>
            <Link to="/emergency-care">Family Dentistry</Link>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <Link to="/services">Services</Link>
            <Link to="/our-team">Our Team</Link>
            <Link to="/book-an-appointment">Book Appointment</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <p>(555) 123-4567</p>
            <p>hello@brightsmile.dental</p>
            <p>123 Dental Avenue</p>
            <p>San Francisco, CA 94102</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 BrightSmile Dental. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
/* 
import ClinicPic from "../../images/ClinicPic.png";
 <div className="contact-image">
          <img src={ClinicPic} alt="Clinic" className="clinic-img" />
        </div> */
