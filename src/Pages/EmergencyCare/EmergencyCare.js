import "./EmergencyCare.css";
import { Link } from "react-router-dom";
function EmergencyCare() {
  return (
    <div className="emergency-page">
      <div className="emergency-container">
        <Link to="/services" className="back-btn">
          ← Back to Home
        </Link>
        <div className="emergency-card">
          <h3 className="emergency-card-title">
            Knocked-Out or Dislodged Teeth
          </h3>
          <p className="emergency-card-desc">
            A permanent tooth is completely knocked out or pushed partially out
            of its socket by an impact.
          </p>
          <div className="emergency-card-footer">
            <span className="emergency-duration">
              Duration: <strong>60-90 minutes</strong>
            </span>
            <span className="emergency-investment">
              Investment:
              <span className="emergency-price">From $950 per tooth</span>
            </span>
          </div>
        </div>

        <div className="emergency-card">
          <h3 className="emergency-card-title">
            Severe Bleeding and Soft Tissue Injury
          </h3>
          <p className="emergency-card-desc">
            Deep cuts, tears, or lacerations to your tongue, lips, or inner
            cheeks that result in uncontrolled, active bleeding.
          </p>
          <div className="emergency-card-footer">
            <span className="emergency-duration">
              Duration: <strong>120-150 minutes</strong>
            </span>
            <span className="emergency-investment">
              Investment:
              <span className="emergency-price">From $500 </span>
            </span>
          </div>
        </div>

        <div className="emergency-card">
          <h3 className="emergency-card-title">
            Dental Abscess or Facial Swelling
          </h3>
          <p className="emergency-card-desc">
            A painful, pimple-like bump on your gums or significant swelling in
            your face, cheeks, or jaw.
          </p>
          <div className="emergency-card-footer">
            <span className="emergency-duration">
              Duration: <strong>2-3 visits</strong>
            </span>
            <span className="emergency-investment">
              Investment:
              <span className="emergency-price">From $5000</span>
            </span>
          </div>
        </div>

        <div className="emergency-card">
          <h3 className="emergency-card-title">
            Cracked, Fractured, or Broken Teeth
          </h3>
          <p className="emergency-card-desc">
            A deep fracture, a broken tooth, or a chipped tooth that exposes the
            inner nerve, causing sharp, excruciating pain or extreme
            sensitivity.
          </p>
          <div className="emergency-card-footer">
            <span className="emergency-duration">
              Duration: <strong>15 to 20 minutes</strong>
            </span>
            <span className="emergency-investment">
              Investment:
              <span className="emergency-price">From $800</span>
            </span>
          </div>
        </div>

        <div className="emergency-card">
          <h3 className="emergency-card-title">Severe, Persistent Toothache</h3>
          <p className="emergency-card-desc">
            Excruciating, throbbing, or persistent pain that prevents you from
            sleeping, eating, or concentrating.
          </p>
          <div className="emergency-card-footer">
            <span className="emergency-duration">
              Duration: <strong>30-45 minutes</strong>
            </span>
            <span className="emergency-investment">
              Investment:
              <span className="emergency-price">From $600</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmergencyCare;
