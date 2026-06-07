import "./OurTeam.css";
import JackieBlackwood from "../../images/JackieBlackWood.png";
import SarahMitchell from "../../images/SarahMitchell.png";
import MichealRodrigez from "../../images/MichealRodrigez.png";
function OurTeam() {
  return (
    <div className="team-page">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="team-card">
              <img
                src={JackieBlackwood}
                alt="Jackie Blackwood"
                className="team-img"
              />
              <h3 className="team-name">JackieBlackwood</h3>
              <p className="team-role">Lead Dentist</p>
              <p className="team-credentials"> DDS, 15 years experience</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="team-card">
              <img
                src={SarahMitchell}
                alt="Sarah Mitchell"
                className="team-img"
              />
              <h3 className="team-name">SarahMitchell</h3>
              <p className="team-role">Cosmetic Specialist</p>
              <p className="team-credentials"> DDS, Cosmetic Dentistry Cert.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="team-card">
              <img
                src={MichealRodrigez}
                alt="Micheal Rodrigez"
                className="team-img"
              />
              <h3 className="team-name">MichealRodrigez</h3>
              <p className="team-role">Orthodontist</p>
              <p className="team-credentials"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurTeam;
