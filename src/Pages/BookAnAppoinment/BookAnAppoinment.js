import "./BookAnAppoinment.css";
import TeethPic from "./../../images/Teeth.png";
function BookAnAppointment() {
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
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Destan"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="destan@example.com"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="555 (679) 9011"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Select teeth</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="1,2,3 etc."
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Preferred Time</label>
                <input type="time" className="form-control" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Preferred Date</label>
                <input type="date" className="form-control" />
              </div>

              <div>
                <button className="btn booking-btn w-100">
                  Request Appointment
                </button>
              </div>
            </div>
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
