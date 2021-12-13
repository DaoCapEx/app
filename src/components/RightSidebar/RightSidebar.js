import React from "react";

//SimpleBar
import SimpleBar from "simplebar-react";
import { Link } from "react-router-dom";

const RightSidebar = ({ onClose }) => {
  
  return (
    <React.Fragment>
      <div className="right-bar">
        <SimpleBar style={{ height: "900px" }}>
          <div data-simplebar className="h-100">
            <div className="rightbar-title d-flex align-items-center bg-dark p-3">
              <h5 className="m-0 me-2 text-white">Theme Customizer</h5>
              <Link
                to="#"
                onClick={onClose}
                className="right-bar-toggle ms-auto"
              >
                <i className="mdi mdi-close noti-icon"></i>
              </Link>
            </div>

            <hr className="m-0" />

          </div>
        </SimpleBar>
      </div>
      <div className="rightbar-overlay" />
    </React.Fragment>
  );
};

export default RightSidebar;
