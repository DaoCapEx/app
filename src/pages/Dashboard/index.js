import React from 'react';
import {
    Container,
} from "reactstrap";

import Breadcrumbs from "../../components/Breadcrumb/Breadcrumb";

const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title="Dashboard" breadcrumbItem="Dashboard" />
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Dashboard;