import "./ServiceSelection.css";
import { Link } from "react-router-dom";

function ServiceSelection() {
  return (
    <div className="service-page">
      <h1 className="service-title">Select a Service</h1>
      <p className="service-subtitle">
        Select the service you would like to get done
      </p>

      <div className="service-card">
        <div className="mb-3">
          <label className="form-label">Service</label>
          <select className="form-select service-select">
            <option value="">Select a service...</option>
            <option value="preventetive-care">Preventive Care</option>
            <option value="cosmetic-procedures">Cosmetic Procedures</option>
            <option value="restorative-treatments">
              Restorative Treatments
            </option>
            <option value="emergency-care">Emergency Care</option>
          </select>
          <div className="mb-4">
            <label className="form-label">Additonal Notes</label>
            <textarea
              className="form-control service-textarea"
              placeholder="Any specific concerns or requests?"
              rows={5}
            />
          </div>
        </div>
        <Link to="/book-an-appointment">
          <button className="btn service-btn w-100">Select Service</button>
        </Link>
      </div>
    </div>
  );
}
export default ServiceSelection;
