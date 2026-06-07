import { Link } from "react-router-dom";
import HomePagePic from "./../../images/HomePagePic.png";
import "./Home.css";
function Home() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-lg-6">
            <h1 className="hero-title">Your smile deserves expert care</h1>
            <p className="hero-subtitle">
              Modern dentistry with a personal touch. We provide comprehensive
              dental care for the whole family in a comfortable, welcoming
              environment.
            </p>
            <div className="d-flex gap-3">
              <Link to="/service-selection">
                <button
                  className="btn btn-success 
                                 px-4 py-2"
                >
                  Schedule Appointment
                </button>
              </Link>
              <Link to="/services">
                <button
                  className="btn btn-outline-secondary 
                                 px-4 py-2"
                >
                  View Services
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={HomePagePic} alt="Dental clinic" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
