import React from 'react';
import { Container } from 'reactstrap';

import Breadcrumbs from '../../components/Breadcrumb/Breadcrumb.js';

const BasicInfo = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title="MyDAO" breadcrumbItem="Basic Info" />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default BasicInfo;
