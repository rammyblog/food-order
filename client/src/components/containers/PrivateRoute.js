import { Route, Redirect } from "react-router-dom";
import checkAuth from "../../helpers/checkAuth";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);
