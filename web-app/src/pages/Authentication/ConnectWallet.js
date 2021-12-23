import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import logoLargeSvg from '../../assets/images/logos/logo-svg-transparent/11.svg';
import Wallets from '../../utils/wallet-providers/index';
import Cookie from '../../utils/cookie';
import { WalletProviderNotFoundError } from '../../utils/errors';

const ConnectWallet = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isWalletInstalled, setIsWalletInstalled] = useState({});

    useEffect(async () => {
        const _isWalletInstalled = {};
        for (const key in Wallets) {
            _isWalletInstalled[key] = await Wallets[key].isWalletInstalled();
        }

        setIsWalletInstalled(_isWalletInstalled);

        if (Cookie.isUserTokenSet()) {
            // redirect to dashboard
            navigate('/mydao/register-dao');
        }
    }, []);

    const connectWalletBtnClick = async walletType => {
        if (!Wallets[walletType]) {
            throw new WalletProviderNotFoundError(
                `${walletType} is not supported`
            );
        }

        setIsLoading(true);

        if (isWalletInstalled[walletType]) {
            const account = await Wallets[walletType].getAccount();

            if (!account) {
                setError(
                    'Cannot connect to your wallet. Please try again'
                );
            }

            // now, register this user.
        } else {
            await Wallets[walletType].installWallet();
        }

        setIsLoading(false);
    };

    return (
        <React.Fragment>
            <div className="auth-page">
                <Container fluid className="p-0 flex space-around">
                    <div
                        className="auth-full-page-content d-flex p-sm-5 p-4 maxw-400"
                        style={{ justifyContent: 'space-around' }}
                    >
                        <div>
                            <div className="d-flex flex-column h-100">
                                <div className="text-center">
                                    <Link to="/" className="d-block auth-logo">
                                        <img
                                            src={logoLargeSvg}
                                            alt=""
                                            height="100"
                                        />
                                    </Link>
                                </div>
                                <div className="auth-content my-auto">
                                    <div className="text-center">
                                        <h5 className="mb-0">
                                            Login or Register
                                        </h5>
                                        <p className="text-muted mt-2">
                                            Connect Metamask Wallet with Dao
                                            Capital Exchange
                                        </p>
                                    </div>
                                    <form className="custom-form mt-4 pt-2">
                                        {error && (
                                            <Alert color="danger text-center">
                                                {error}
                                            </Alert>
                                        )}

                                        <div className="mb-3">
                                            <button
                                                disabled={isLoading}
                                                className="btn btn-primary w-100 waves-effect waves-light"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    connectWalletBtnClick(
                                                        'MetaMask'
                                                    );
                                                }}
                                            >
                                                {isWalletInstalled[
                                                    'MetaMask'
                                                ] && 'Connect MetaMask Wallet'}
                                                {!isWalletInstalled[
                                                    'MetaMask'
                                                ] && 'Install MetaMask Wallet'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="mt-4 mt-md-5 text-center">
                                    <p className="mb-0">
                                        {new Date().getFullYear()} © Dao Capital
                                        Exchange.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

ConnectWallet.propTypes = {};

export default ConnectWallet;
