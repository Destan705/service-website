import "./PreventiveCare.css";
import { Link } from "react-router-dom";
function PreventiveCare() {
  return (
    <div className="preventive-page">
      <div className="preventive-container">
        <Link to="/services" className="back-btn">
          ← Back to Home
        </Link>
        <div className="preventive-card">
          <h3 className="preventive-card-title">Routine Exams & Cleanings</h3>
          <p className="preventive-card-desc">
            {" "}
            Bi-annual visits allow your dentist to scale away hardened tartar,
            check for early signs of cavities, and perform oral cancer
            screenings.
          </p>
          <div className="preventive-card-footer">
            <span className="preventive-duration">
              Duration: <strong>60-90 minutes</strong>
            </span>
            <span className="preventive-investment">
              Investment:
              <span className="preventive-price">From $150</span>
            </span>
          </div>
        </div>

        <div className="preventive-card">
          <h3 className="preventive-card-title">Digital X-rays</h3>
          <p className="preventive-card-desc">
            Used periodically to identify hidden decay between teeth, bone loss,
            and issues below the gum line.
          </p>
          <div className="preventive-card-footer">
            <span className="preventive-duration">
              Duration: <strong>15-20 minutes</strong>
            </span>
            <span className="preventive-investment">
              Investment:
              <span className="preventive-price">From 150 per image</span>
            </span>
          </div>
        </div>

        <div className="preventive-card">
          <h3 className="preventive-card-title">Fluoride Treatments</h3>
          <p className="preventive-card-desc">
            Professional varnish applications that strengthen your tooth enamel
            and make teeth more resistant to decay.
          </p>
          <div className="preventive-card-footer">
            <span className="preventive-duration">
              Duration: <strong>30-60 minutes</strong>
            </span>
            <span className="preventive-investment">
              Investment:
              <span className="preventive-price">From $50 per session</span>
            </span>
          </div>
        </div>

        <div className="preventive-card">
          <h3 className="preventive-card-title">Dental Sealants</h3>
          <p className="preventive-card-desc">
            Thin, protective coatings painted onto the chewing surfaces of back
            molars (commonly in children) to block out food and bacteria.
          </p>
          <div className="preventive-card-footer">
            <span className="preventive-duration">
              Duration: <strong>20-30 minutes</strong>
            </span>
            <span className="preventive-investment">
              Investment:
              <span className="preventive-price">From $60 per tooth</span>
            </span>
          </div>
        </div>

        <div className="preventive-card">
          <h3 className="preventive-card-title">Custom Nightguards</h3>
          <p className="preventive-card-desc">
            Devices worn to protect your teeth and jaw from damage caused by
            clenching or grinding (bruxism).
          </p>
          <div className="preventive-card-footer">
            <span className="preventive-duration">
              Duration: <strong>3 weeks</strong>
            </span>
            <span className="preventive-investment">
              Investment:
              <span className="preventive-price">From $800</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PreventiveCare;
