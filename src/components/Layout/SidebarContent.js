import PropTypes from "prop-types";
import React, { useEffect, useRef, useCallback } from "react";
import FeatherIcon from "feather-icons-react";
import SimpleBar from "simplebar-react";
import MetisMenu from "metismenujs";

//Import images
import giftBox from "../../assets/images/giftbox.png";

import { Link } from "react-router-dom";

const SidebarContent = (props) => {
  const ref = useRef();

  const activateParentDropdown = useCallback(item => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = window.location.pathname;

    const initMenu = () => {
      new MetisMenu("#side-menu");
      let matchingMenuItem = null;
      const ul = document.getElementById("side-menu");
      const items = ul.getElementsByTagName("a");
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
      }
    };
    initMenu();
  }, [activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
  });

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }
  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{"Menu"} </li>
            <li>
              <Link to="/dashboard" className="">
                <FeatherIcon icon="home" />
                <span>{"Dashboard"}</span>
              </Link>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <FeatherIcon icon="grid" />
                <span>{"Apps"}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/#">{"Calendar"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Chat"}</Link>
                </li>
                <li>
                  <Link to="/#" className="has-arrow">
                    <span>{"Email"}</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/#">{"Inbox"}</Link>
                    </li>
                    <li>
                      <Link to="/#">{"Read Email"} </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/#" className="has-arrow">
                    <span>{"Invoices"}</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/#">{"Invoice List"}</Link>
                    </li>
                    <li>
                      <Link to="/#">{"Invoice Detail"}</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/#" className="has-arrow ">
                    <span>{"Contacts"}</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/#">{"User Grid"}</Link>
                    </li>
                    <li>
                      <Link to="/#">{"User List"}</Link>
                    </li>
                    <li>
                      <Link to="/#">{"Profile"}</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow">
                <FeatherIcon icon="users" />
                <span>{"Authentication"}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">{"Login"}</Link>
                </li>
                <li>
                  <Link to="#">{"Register"}</Link>
                </li>
                <li>
                  <Link to="#">{"Recover Password"}</Link>
                </li>
                <li>
                  <Link to="#">{"Lock Screen"}</Link>
                </li>
                <li>
                  <Link to="#">{"Confirm Mail"}</Link>
                </li>
                <li>
                  <Link to="#">{"Email Verification"}</Link>
                </li>
                <li>
                  <Link to="#">{"Two Step Verification"}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow ">
                <FeatherIcon icon="file-text" />
                <span>{"Pages"}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/#">{"Starter Page"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Maintenance"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Coming Soon"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Timeline"}</Link>
                </li>
                <li>
                  <Link to="/#">{"FAQs"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Pricing"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Error 404"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Error 500"}</Link>
                </li>
              </ul>
            </li>

            <li className="menu-title">{"Elements"}</li>

            <li>
              <Link to="/#" className="has-arrow ">
                <FeatherIcon icon="briefcase" />
                <span>{"Components"}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/#">{"Alerts"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Buttons"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Cards"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Carousel"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Dropdowns"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Grid"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Images"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Modals"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Drawer"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Progress Bars"}</Link>
                </li>
                <li>
                  <Link to="/#">{"Tabs & Accordions"}</Link>
                </li>
                <li>
                  <Link to="#">{"Typography"}</Link>
                </li>
                <li>
                  <Link to="#">{"Video"}</Link>
                </li>
                <li>
                  <Link to="#">{"General"}</Link>
                </li>
                <li>
                  <Link to="#">{"Colors"}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow ">
                <FeatherIcon icon="gift" />
                <span>{"Extended"}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">{"Lightbox"}</Link>
                </li>
                <li>
                  <Link to="#">{"Range Slider"}</Link>
                </li>
                <li>
                  <Link to="#">{"Sweet Alert"}</Link>
                </li>
                <li>
                  <Link to="#">{"Session Timeout"}</Link>
                </li>
                <li>
                  <Link to="#">{"Rating"}</Link>
                </li>
                <li>
                  <Link to="#">{"Notifications"}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="">
                <FeatherIcon icon="box" />
                <span className="badge rounded-pill bg-soft-danger text-danger float-end">
                  7
                </span>
                <span>{"Forms"}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">{"Basic Elements"}</Link>
                </li>
                <li>
                  <Link to="#">{"Validation"}</Link>
                </li>
                <li>
                  <Link to="#">{"Advanced Plugins"}</Link>
                </li>
                <li>
                  <Link to="#">{"Editors"}</Link>
                </li>
                <li>
                  <Link to="#">{"File Upload"} </Link>
                </li>
                <li>
                  <Link to="#">{"Form Wizard"}</Link>
                </li>
                <li>
                  <Link to="#">{"Form Mask"}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow ">
                <FeatherIcon icon="sliders" />
                <span>{"Tables"}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">{"Bootstrap Basic"}</Link>
                </li>
                <li>
                  <Link to="#">{"DataTables"}</Link>
                </li>
                <li>
                  <Link to="#">{"Responsive"}</Link>
                </li>
                <li>
                  <Link to="#">{"Editable"}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow ">
                <FeatherIcon icon="pie-chart" />
                <span>{"Charts"}</span>
              </Link>

              <ul className="sub-menu">
                <li>
                  <Link to="#">{"Apexcharts"}</Link>
                </li>
                <li>
                  <Link to="#">{"Echarts"}</Link>
                </li>
                <li>
                  <Link to="#">{"Chartjs"}</Link>
                </li>
                <li>
                  <Link to="#">{"Sparkline"}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow ">
                <FeatherIcon icon="cpu" />
                <span>{"Icons"}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">{"Boxicons"}</Link>
                </li>
                <li>
                  <Link to="#">{"Material Design"}</Link>
                </li>
                <li>
                  <Link to="#">{"Dripicons"}</Link>
                </li>
                <li>
                  <Link to="#">{"Font awesome"}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow ">
                <FeatherIcon icon="map" />
                <span>{"Maps"}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">{"Google"}</Link>
                </li>
                <li>
                  <Link to="#">{"Vector"}</Link>
                </li>
                <li>
                  <Link to="#">{"Leaflet"}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow ">
                <FeatherIcon icon="share-2" />
                <span>{"Multi Level"}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/#">{"Level 1.1"}</Link>
                </li>
                <li>
                  <Link to="/#" className="has-arrow">
                    {"Level 1.2"}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/#">{"Level 2.1"}</Link>
                    </li>
                    <li>
                      <Link to="/#">{"Level 2.2"}</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <div className="card sidebar-alert border-0 text-center mx-4 mb-0 mt-5">
            <div className="card-body">
              <img src={giftBox} alt="" />
              <div className="mt-4">
                <h5 className="alertcard-title font-size-16">
                  Unlimited Access
                </h5>
                <p className="font-size-13">
                  Upgrade your plan from a Free trial, to select ‘Business
                  Plan’.
                </p>
                <a href="#!" className="btn btn-primary mt-2">
                  Upgrade Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default SidebarContent;
