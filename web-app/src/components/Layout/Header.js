import PropTypes from 'prop-types'
import React, { useState } from "react"

import { Link } from "react-router-dom"

//Import Icons
import FeatherIcon from "feather-icons-react";

// Reactstrap
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap"

// Import menuDropdown
import NotificationDropdown from "../TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../TopbarDropdown/ProfileMenu"


// import images
import logoSvg from "../../assets/images/logos/logo-svg/6.svg"
import logoLargeSvg from "../../assets/images/logos/logo-svg-transparent/11.svg"
import github from "../../assets/images/brands/github.png"
import bitbucket from "../../assets/images/brands/bitbucket.png"
import dribbble from "../../assets/images/brands/dribbble.png"
import dropbox from "../../assets/images/brands/dropbox.png"
import mail_chimp from "../../assets/images/brands/mail_chimp.png"
import slack from "../../assets/images/brands/slack.png"



const Header = props => {
  const [search, setsearch] = useState(false)
  const [socialDrp, setsocialDrp] = useState(false)
  const [isClick, setClick] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleTopDrawer = () => {
    setOpen(!open)
  }


  /*** Sidebar menu icon and default menu set */
  function tToggle() {
    var body = document.body;
    setClick(!isClick);
    if (isClick === true) {
      body.classList.add("sidebar-enable");
      document.body.setAttribute('data-sidebar-size', 'sm');
    } else {
      body.classList.remove("sidebar-enable");
      document.body.setAttribute('data-sidebar-size', 'lg');
    }
  }

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">

          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logoSvg} alt="" height="45" style={{
                    marginLeft: "-10px",
                    borderRadius: "5px"
                  }} />
                </span>
                <span className="logo-lg">
                  <img src={logoLargeSvg} alt="" height="200" style={
                    {
                      position: "absolute",
                      top: "10",
                      marginTop: "-60px",
                      marginLeft: "-35px"
                    }
                  } />
                </span>
              </Link>

            </div>

           

            <button
              onClick={() => {
                tToggle()
              }}
              type="button" className="btn btn-sm px-3 font-size-16 header-item" id="vertical-menu-btn">
              <i className="fa fa-fw fa-bars"></i>
            </button>

            <Dropdown
              className="d-none d-lg-inline-block ms-1"
              isOpen={socialDrp}
              toggle={() => {
                setsocialDrp(!socialDrp)
              }}
            >
              <DropdownToggle
                className="btn header-item noti-icon "
                tag="button"
              >
                <FeatherIcon
                  icon="grid"
                  className="icon-lg"
                />
                 <img src={github} alt="Github" />
                        <span>MyDAO</span>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg dropdown-menu-start">
                <div className="p-2">
                  <Row className="g-0">
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={github} alt="Github" />
                        <span>My DAO</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={bitbucket} alt="bitbucket" />
                        <span>Payments</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={dribbble} alt="dribbble" />
                        <span>Contracts</span>
                      </Link>
                    </Col>
                  </Row>

                  <Row className="g-0">
                    
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={mail_chimp} alt="mail_chimp" />
                        <span>DAO Exchange</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={dropbox} alt="dropbox" />
                        <span>Court</span>
                      </Link>
                    </Col>
                    <Col>
                      <Link className="dropdown-icon-item" to="#">
                        <img src={slack} alt="slack" />
                        <span>Slack</span>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </DropdownMenu>
            </Dropdown>

            
          </div>

          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button type="button" className="btn header-item" id="page-header-search-dropdown"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FeatherIcon
                  icon="search"
                  className="icon-lg"
                />
              </button>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown">

                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search ..." aria-label="Search Result" />

                      <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
          <div className="d-flex">
          <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input type="text" className="form-control" placeholder="Search..." />
                <button className="btn btn-soft-link" type="button"><i className="bx bx-search align-middle text-black-50"></i></button>
              </div>
            </form>
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                onClick={() => {
                  setsearch(!search)
                }}
                type="button"
                className="btn header-item noti-icon "
                id="page-header-search-dropdown"
              >
                <i className="mdi mdi-magnify" />
              </button>
              <div
                className={
                  search
                    ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                    : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                }
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          

            <NotificationDropdown />
            <div
              onClick={toggleTopDrawer} disabled={open}
              className="dropdown d-inline-block"
            >
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle "
              >
                <FeatherIcon
                  icon="settings"
                  className="icon-lg"
                />
              </button>
            </div>
            <ProfileMenu />

          </div>

        </div>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
  changelayoutMode: PropTypes.func,
  layoutMode: PropTypes.any,
}

export default Header
