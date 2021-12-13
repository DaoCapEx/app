import PropTypes from "prop-types"
import React from "react"

import { Container } from "reactstrap"
import { Link } from "react-router-dom"

import logoLargeSvg from "../../assets/images/logos/logo-svg-transparent/11.svg"

const ConnectWallet = props => {

  return (
    <React.Fragment>
      <div className="auth-page">
        <Container fluid className="p-0">

              <div className="auth-full-page-content d-flex p-sm-5 p-4" style={{"justifyContent": "space-around"}}>
                <div>
                  <div className="d-flex flex-column h-100">
                    <div className="mb-4 mb-md-5 text-center">
                      <Link to="/" className="d-block auth-logo">
                      <img src={logoLargeSvg} alt="" height="300"/>
                      </Link>
                    </div>
                    <div className="auth-content my-auto">
                      <div className="text-center">
                        <h5 className="mb-0">Login or Register</h5>
                        <p className="text-muted mt-2">Connect wallet with Dao Capital Exchange</p>
                      </div>
                      <form
                        className="custom-form mt-4 pt-2"
                       
                      >
                        {/* {<Alert color="danger">{"Sample Error"}</Alert>} */}
                        
                        <div className="mb-3">
                          <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Connect Wallet</button>
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
