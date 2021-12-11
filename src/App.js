import React from "react"

import { BrowserRouter as Router } from "react-router-dom"

// Import Routes all
import { userRoutes } from "./routes/allRoutes"

// Import all middleware
import Authmiddleware from "./routes/middleware/Authmiddleware"

// layouts Format
import VerticalLayout from "./components/VerticalLayout/"

// Import scss
import "./assets/scss/theme.scss"
import "./assets/scss/preloader.scss"


const App = props => {

  return (
    <React.Fragment>
      <Router>
          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={VerticalLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}
      </Router>
    </React.Fragment>
  )
}


export default App;