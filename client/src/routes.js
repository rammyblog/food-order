import { Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { PrivateRoute } from "./components/containers/PrivateRoute";
import MissingPage from "./components/error/404";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SingleOrder from "./components/SingleOrder";

const BaseRouter = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/" component={Home} />
    <PrivateRoute exact path="/profile/" component={Profile} />
    <PrivateRoute exact path="/order/:id" component={SingleOrder} />
    <Route component={MissingPage} />
  </Switch>
);

export default BaseRouter;
