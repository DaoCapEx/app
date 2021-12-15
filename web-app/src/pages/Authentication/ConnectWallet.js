import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Container, Alert } from "reactstrap"
import { Link } from "react-router-dom"
import MetaMaskOnboarding from '@metamask/onboarding'
import logoLargeSvg from "../../assets/images/logos/logo-svg-transparent/11.svg"
import { isMetaMaskInstalled, getAccounts } from '../../utils/ethereum';

const ConnectWallet = props => {

  const [isMetaMaskWalletInstalled, setIsMetaMaskWalletInstalled] = useState(true)
  const [error, setError] = useState(null)
  const [connectButtonEnabled, setConnectButtonEnabled] = useState(true);

  useEffect(() => {
    setIsMetaMaskWalletInstalled(isMetaMaskInstalled());
  }, [])

  useEffect(() => {
    if (isMetaMaskWalletInstalled) {
      const fetchAccounts = async () => {
        // then check if the user is logged in. 
        const accounts = await getEthAccounts();
        console.log(accounts);
      };

      fetchAccounts();
    }
  }, [isMetaMaskWalletInstalled])

  const connectWalletBtnClick = async (e) => {

    e.preventDefault();
    setConnectButtonEnabled(false);

    if (isMetaMaskWalletInstalled) {
      const accounts = await getEthAccounts();
      console.log(accounts);
    } else {
      const forwarderOrigin = window.location.hostname === 'localhost'
        ? 'http://localhost:2008'
        : undefined
      const onboarding = new MetaMaskOnboarding({ forwarderOrigin })
      onboarding.startOnboarding()
    }

    setConnectButtonEnabled(true);
  }

  const getEthAccounts = async () => {
    try {
      return await getAccounts();
    } catch (e) {
      console.error(e);
      setError("Cannot connect to your wallet. "+e.message+" Please try again")
    }
  }

  return (
    <React.Fragment>
      <div className="auth-page">
        <Container fluid className="p-0 flex space-around">

          <div className="auth-full-page-content d-flex p-sm-5 p-4 maxw-400" style={{ "justifyContent": "space-around" }}>
            <div>
              <div className="d-flex flex-column h-100">
                <div className="text-center">
                  <Link to="/" className="d-block auth-logo">
                    <img src={logoLargeSvg} alt="" height="300" />
                  </Link>
                </div>
                <div className="auth-content my-auto">
                  <div className="text-center">
                    <h5 className="mb-0">Login or Register</h5>
                    <p className="text-muted mt-2">Connect Metamask Wallet with Dao Capital Exchange</p>
                  </div>
                  <form
                    className="custom-form mt-4 pt-2"

                  >
                    {error && <Alert color="danger text-center">{error}</Alert>}

                    <div className="mb-3">
                      <button disabled={!connectButtonEnabled} className="btn btn-primary w-100 waves-effect waves-light" onClick={connectWalletBtnClick}>
                        {isMetaMaskWalletInstalled && "Connect MetaMask Wallet"}
                        {!isMetaMaskWalletInstalled && "Install MetaMask Wallet"}
                      </button>
                    </div>
                  </form>


                </div>
                <div className="mt-4 mt-md-5 text-center">
                  <p className="mb-0">{new Date().getFullYear()} © Dao Capital Exchange.</p>
                </div>
              </div>
            </div>
          </div>

        </Container>
      </div>
    </React.Fragment>
  )
}



ConnectWallet.propTypes = {
  history: PropTypes.object,
}

export default ConnectWallet
