import PropTypes from "prop-types";
import React from "react";
import SidebarContent from "./SidebarContent";

const Sidebar = props => {

  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
        <SidebarContent />
        </div>
      </div>
    </React.Fragment>
  )
}

Sidebar.propTypes = {
  type: PropTypes.string,
}

export default Sidebar
