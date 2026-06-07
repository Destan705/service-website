import "./Services.css";
import { Link } from "react-router-dom";
import { Smile, Sparkles, Shield, AlertCircle } from "lucide-react";
function Services() {
  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">
        Modern dentistry with a personal touch. We provide comprehensive dental
        care for the whole family in a comfortable, welcoming environment.
      </p>
      <div className="container-fluid px-4">
        <div className="row g-3 justify-content-center">
          <div className="col-md-3">
            <div className="col-md-auto">
              <div className="service-card">
                <Link to="/preventive-care" className="card-link">
                  <Smile color="#0D9488" size={32} />
                  <h3 className="service-card-title">Dental Fillings</h3>
                  <p className="service-card-p">
                    Used to treat cavities or minor chips by cleaning out decay
                    and filling the space with composite resin or amalgam.
                  </p>
                  <span className="service-price">From $120</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="col-md-auto">
              <div className="service-card">
                <Link to="/cosmetic-procedures" className="card-link">
                  <Sparkles color="#0D9488" size={32} />
                  <h3 className="service-card-title">Cosmetic Procedures</h3>
                  <p className="service-card-p">
                    These elective treatments focus on improving the aesthetic
                    appearance of your smile. Common services include
                    professional teeth whitening, porcelain veneers, and dental
                    bonding.
                  </p>
                  <span className="service-price">From $350</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="col-md-auto">
              <div className="service-card">
                <Link to="/restorative-care" className="card-link">
                  <Shield color="#0D9488" size={32} />
                  <h3 className="service-card-title">Restorative Treatments</h3>
                  <p className="service-card-p">
                    When damage or decay occurs, dentists use restorative
                    procedures to repair and save your natural teeth. This
                    includes dental fillings for cavities, root canals, and
                    placing crowns, bridges, or dentures.
                  </p>
                  <span className="service-price">From $200</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="col-md-auto">
              <div className="service-card">
                <Link to="/emergency-care" className="card-link">
                  <AlertCircle color="#0D9488" size={32} />
                  <h3 className="service-card-title">Emergency Care</h3>
                  <p className="service-card-p">
                    Dentists provide urgent triage and treatment for sudden oral
                    health issues like severe toothaches, knocked-out teeth, or
                    mouth trauma to alleviate pain and save teeth.
                  </p>
                  <span className="service-price">From $95</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
