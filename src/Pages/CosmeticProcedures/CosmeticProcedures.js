import "./CosmeticProcedures.css";
import { Link } from "react-router-dom";
function CosmeticProcedures() {
  return (
    <div className="cosmetic-page">
      <div className="cosmetic-container">
        <Link to="/services" className="back-btn">
          ← Back to Home
        </Link>
        <div className="cosmetic-card">
          <h3 className="cosmetic-card-title">Teeth Whitening</h3>
          <p className="cosmetic-card-desc">
            Professional bleaching treatments to lift deep stains and brighten
            your smile.
          </p>
          <div className="cosmetic-card-footer">
            <span className="cosmetic-duration">
              Duration: <strong>60-90 minutes</strong>
            </span>
            <span className="cosmetic-investment">
              Investment:
              <span className="cosmetic-price">From $350</span>
            </span>
          </div>
        </div>

        <div className="cosmetic-card">
          <h3 className="cosmetic-card-title">Porcelain Veneers</h3>
          <p className="cosmetic-card-desc">
            Thin, custom-made shells bonded to the front of teeth to change
            their shape or color.
          </p>
          <div className="cosmetic-card-footer">
            <span className="cosmetic-duration">
              Duration: <strong>2-3 visits</strong>
            </span>
            <span className="cosmetic-investment">
              Investment:
              <span className="cosmetic-price">From $1,200 per tooth</span>
            </span>
          </div>
        </div>

        <div className="cosmetic-card">
          <h3 className="cosmetic-card-title">Dental Bonding</h3>
          <p className="cosmetic-card-desc">
            Tooth-colored resin applied to quickly repair minor chips, cracks,
            or gaps.
          </p>
          <div className="cosmetic-card-footer">
            <span className="cosmetic-duration">
              Duration: <strong>30-60 minutes</strong>
            </span>
            <span className="cosmetic-investment">
              Investment:
              <span className="cosmetic-price">From $300 per tooth</span>
            </span>
          </div>
        </div>

        <div className="cosmetic-card">
          <h3 className="cosmetic-card-title">Invisalign / Clear Aligners</h3>
          <p className="cosmetic-card-desc">
            Clear, removable trays used to discreetly straighten misaligned
            teeth.
          </p>
          <div className="cosmetic-card-footer">
            <span className="cosmetic-duration">
              Duration: <strong>12-18 months</strong>
            </span>
            <span className="cosmetic-investment">
              Investment:
              <span className="cosmetic-price">From $3,500</span>
            </span>
          </div>
        </div>

        <div className="cosmetic-card">
          <h3 className="cosmetic-card-title">Gum Contouring</h3>
          <p className="cosmetic-card-desc">
            Laser surgery used to reshape an uneven gum line or fix a "gummy"
            smile.
          </p>
          <div className="cosmetic-card-footer">
            <span className="cosmetic-duration">
              Duration: <strong>1-2 hours</strong>
            </span>
            <span className="cosmetic-investment">
              Investment:
              <span className="cosmetic-price">From $600</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CosmeticProcedures;
