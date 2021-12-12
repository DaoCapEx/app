import React from "react"
import PropTypes from "prop-types"
import {
  Route,
} from "react-router-dom";

const RouteMiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  return (<Route
    {...rest}
    element={<Layout>
      <Component />
    </Layout>}
  >
  </Route>)
}

RouteMiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
}

export default RouteMiddleware;
