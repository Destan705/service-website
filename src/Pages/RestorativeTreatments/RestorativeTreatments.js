import "./RestorativeTreatments.css";
import { Link } from "react-router-dom";
function RestorativeTreatments() {
  return (
    <div className="restorative-page">
      <div className="restorative-container">
        <Link to="/services" className="back-btn">
          ← Back to Home
        </Link>
        <div className="restorative-card">
          <h3 className="restorative-card-title">Teeth Whitening</h3>
          <p className="restorative-card-desc">
            Professional bleaching treatments to lift deep stains and brighten
            your smile.
          </p>
          <div className="restorative-card-footer">
            <span className="restorative-duration">
              Duration: <strong>60-90 minutes</strong>
            </span>
            <span className="restorative-investment">
              Investment:
              <span className="restorative-price">From $450 per tooth</span>
            </span>
          </div>
        </div>

        <div className="restorative-card">
          <h3 className="restorative-card-title">Crowns</h3>
          <p className="restorative-card-desc">
            A procedure to remove infected or inflamed pulp (nerves and blood
            vessels) from inside the tooth to save it from extraction.
          </p>
          <div className="restorative-card-footer">
            <span className="restorative-duration">
              Duration: <strong>2-3 visits</strong>
            </span>
            <span className="restorative-investment">
              Investment:
              <span className="restorative-price">From $ 2,500 per tooth</span>
            </span>
          </div>
        </div>

        <div className="restorative-card">
          <h3 className="restorative-card-title">Dental Bridges</h3>
          <p className="restorative-card-desc">
            Fixed, artificial teeth anchored to neighboring natural teeth to
            fill the gap left by one or more missing teeth.
          </p>
          <div className="restorative-card-footer">
            <span className="restorative-duration">
              Duration: <strong>2-3 visits</strong>
            </span>
            <span className="restorative-investment">
              Investment:
              <span className="restorative-price">From $5000</span>
            </span>
          </div>
        </div>

        <div className="restorative-card">
          <h3 className="restorative-card-title">Dental Implants & Dentures</h3>
          <p className="restorative-card-desc">
            Used to replace multiple missing teeth or entire arches, preserving
            your bite, speech, and facial structure.
          </p>
          <div className="restorative-card-footer">
            <span className="restorative-duration">
              Duration: <strong>4 to 8 visits</strong>
            </span>
            <span className="restorative-investment">
              Investment:
              <span className="restorative-price">From $3,500</span>
            </span>
          </div>
        </div>

        <div className="restorative-card">
          <h3 className="restorative-card-title">Root Canals</h3>
          <p className="restorative-card-desc">
            A procedure to remove infected or inflamed pulp (nerves and blood
            vessels) from inside the tooth to save it from extraction.
          </p>
          <div className="restorative-card-footer">
            <span className="restorative-duration">
              Duration: <strong>1-2 visits</strong>
            </span>
            <span className="restorative-investment">
              Investment:
              <span className="restorative-price">From $600</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestorativeTreatments;
