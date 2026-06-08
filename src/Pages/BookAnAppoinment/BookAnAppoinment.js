import "./BookAnAppoinment.css";
import TeethPic from "./../../images/Teeth.png";
import { useNavigate } from "react-router-dom";

function BookAnAppointment() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // add the redirect here to home apge
    navigate("/");
  }

  return (
    <div className="booking-page">
      <div className="booking-container">
        <div className="booking-form-section">
          <h1 className="booking-title">Book an Appointment</h1>
          <p className="booking-subtitle">
            Choose a convenient time for your visit and the teeth that will be
            operated on
          </p>

          <div className="booking-card">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Destan"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="destan@example.com"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="555 (679) 9011"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Select teeth</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="1,2,3 etc."
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Preferred Time</label>
                <input type="time" className="form-control" required />
              </div>

              <div className="col-md-6">
                <label className="form-label">Preferred Date</label>
                <input type="date" className="form-control" required />
              </div>

              <div>
                <button type="submit" className="btn booking-btn w-100">
                  Request Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="booking-image-section">
          <img src={TeethPic} alt="Dental clinic" className="teeth-image" />
        </div>
      </div>
    </div>
  );
}
export default BookAnAppointment;
