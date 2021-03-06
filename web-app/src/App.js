import React, { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/index.js';

// MyDao pages
import RegisterDAO from './pages/MyDao/RegisterDao.js';
import BasicInfo from './pages/MyDao/BasicInfo.js';
import Proposals from './pages/MyDao/Proposals.js';
import AddressBook from './pages/MyDao/AddressBook.js';

// non-auth pages.
import ConnectWallet from './pages/Authentication/ConnectWallet.js';

// utils
import WalletProviders from './utils/wallet-providers/index.js';

//compomnents
import AlertModal from './components/Modals/AlertModal.js';

// Import scss
import './assets/scss/theme.scss';
import './assets/scss/preloader.scss';

const App = () => {
    useEffect(() => {}, []);

    const [showAccountChangeModal, setShowAccountChangeModal] = useState(false);

    for (const key in WalletProviders) {
        WalletProviders[key].onAccountChanged(() => {
            setShowAccountChangeModal(true);
        });
    }

    return (
        <React.Fragment>
            {/** Modals */}

            {showAccountChangeModal && (
                <AlertModal
                    title="Your Ethereum accounts have changed."
                    body="Your accounts have changed in your MetaMask wallet. We need to reload the page to continue."
                    primaryButtonText="Reload Page"
                    onClose={() => {
                        window.location.reload();
                        setShowAccountChangeModal(false);
                    }}
                />
            )}

            <BrowserRouter>
                <Routes>
                    {/** MyDAO routes */}

                    <Route
                        path="/mydao/register-dao"
                        element={<Layout component={<RegisterDAO />} />}
                    />

                    <Route
                        path="/mydao/:dao-slug/address-book"
                        element={<Layout component={<AddressBook />} />}
                    />

                    <Route
                        path="/mydao/:dao-slug/proposals"
                        element={<Layout component={<Proposals />} />}
                    />

                    <Route
                        path="/mydao/:dao-slug/basic-info"
                        element={<Layout component={<BasicInfo />} />}
                    />

                    {/** Non auth routes */}
                    <Route path="/connect-wallet" element={<ConnectWallet />} />

                    {/** Redirect */}
                    <Route
                        path="*"
                        element={<Navigate to="/connect-wallet" />}
                    />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;
