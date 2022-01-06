import React from 'react';
import { Container } from 'reactstrap';

import Breadcrumbs from '../../components/Breadcrumb/Breadcrumb.js';

const AddressBook = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title="MyDAO" breadcrumbItem="Address Book" />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default AddressBook;
