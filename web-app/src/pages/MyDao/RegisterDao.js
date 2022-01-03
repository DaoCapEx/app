import React from 'react';
import { Container } from 'reactstrap';

import Breadcrumbs from '../../components/Breadcrumb/Breadcrumb.js';

const RegisterDAO = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title="MyDAO" breadcrumbItem="Register DAO" />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default RegisterDAO;
