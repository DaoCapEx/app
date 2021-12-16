import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

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
