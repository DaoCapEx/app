import React from "react"

import {
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";

import Dashboard from "./pages/Dashboard/index";

// layouts Format
import Layout from "./components/Layout"

// Import scss
import "./assets/scss/theme.scss"
import "./assets/scss/preloader.scss"


const App = (props) => {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout component={<Dashboard/>} />}
          />
          </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}


export default App;