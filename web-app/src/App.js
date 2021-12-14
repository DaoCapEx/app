import React from "react"

import {
  BrowserRouter,
  Routes,
  Route, 
  Navigate
} from "react-router-dom";


import Layout from "./components/Layout"

// MyDao pages
import RegisterDAO from "./pages/MyDao/RegisterDao";
import BasicInfo from "./pages/MyDao/BasicInfo";
import Proposals from "./pages/MyDao/Proposals";
import AddressBook from "./pages/MyDao/AddressBook";

// non-auth pages. 
import ConnectWallet from './pages/Authentication/ConnectWallet';


// Import scss
import "./assets/scss/theme.scss"
import "./assets/scss/preloader.scss"


const App = (props) => {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
        
        { /** MyDAO routes */}

          <Route
            path="/mydao/register-dao"
            element={<Layout component={<RegisterDAO/>} />}
          />

           <Route
            path="/mydao/:dao-slug/address-book"
            element={<Layout component={<AddressBook/>} />}
          />

          <Route
            path="/mydao/:dao-slug/proposals"
            element={<Layout component={<Proposals/>} />}
          />

           <Route
            path="/mydao/:dao-slug/basic-info"
            element={<Layout component={<BasicInfo/>} />}
          />

          { /** Non auth routes */}
          <Route
            path="/connect-wallet"
            element={<ConnectWallet/>}
          />

          {/** Redirect */}
          <Route path="*" element={<Navigate to ="/connect-wallet" />}/>
          </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}


export default App;