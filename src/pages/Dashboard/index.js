import React from 'react';
import {
    Container,
} from "reactstrap";

import Breadcrumbs from "../../components/Common/Breadcrumb";

const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Dashboard" breadcrumbItem="Dashboard" />
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Dashboard;