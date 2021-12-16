import React from 'react';
import SidebarContent from './SidebarContent';

const Sidebar = () => {
    return (
        <React.Fragment>
            <div className="vertical-menu">
                <div data-simplebar className="h-100">
                    <SidebarContent />
                </div>
            </div>
        </React.Fragment>
    );
};

Sidebar.propTypes = {};

export default Sidebar;
