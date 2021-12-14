import React from 'react';
import {
    Container,
} from "reactstrap";

import Breadcrumbs from "../../components/Breadcrumb/Breadcrumb";

const Proposals = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title="MyDAO" breadcrumbItem="Proposals" />
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Proposals;