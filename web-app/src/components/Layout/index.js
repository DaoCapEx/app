import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Sidebar from './Sidebar.js';

const Layout = props => {
    return (
        <React.Fragment>
            <div id="preloader">
                <div id="status">
                    <div className="spinner-chase">
                        <div className="chase-dot" />
                        <div className="chase-dot" />
                        <div className="chase-dot" />
                        <div className="chase-dot" />
                        <div className="chase-dot" />
                        <div className="chase-dot" />
                    </div>
                </div>
            </div>

            <div id="layout-wrapper">
                <Header />
                <Sidebar />
                <div className="main-content">{props.component}</div>
                <Footer />
            </div>
        </React.Fragment>
    );
};

Layout.propTypes = {
    component: PropTypes.elementType,
};

export default Layout;
