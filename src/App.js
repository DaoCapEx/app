import React from "react"

import {
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";


import Layout from "./components/Layout"

import Dashboard from "./pages/Dashboard/index";
import ConnectWallet from './pages/Authentication/ConnectWallet';


// Import scss
import "./assets/scss/theme.scss"
import "./assets/scss/preloader.scss"


const App = (props) => {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
        
        { /** Auth routes */}

          <Route
            path="/mydao"
            element={<Layout component={<Dashboard/>} />}
          />


          { /** Non auth routes */}
          <Route
            path="/connect"
            element={<ConnectWallet/>}
          />
          </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}


export default App;