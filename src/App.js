import React from "react"

import {
  BrowserRouter,
  Routes,
} from "react-router-dom";

// Import Routes all
import routes from "./routes/allRoutes"



// Import all middleware
import RouteMiddleware from "./routes/middleware/RouteMiddleware"

// layouts Format
import VerticalLayout from "./components/VerticalLayout/"

// Import scss
import "./assets/scss/theme.scss"
import "./assets/scss/preloader.scss"


const App = (props) => {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {routes.map((route, idx) => {
            console.log("route")
            return (
            <RouteMiddleware
              path={route.path}
              layout={VerticalLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />)
          })}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}


export default App;