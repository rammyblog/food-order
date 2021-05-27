import { Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { PrivateRoute } from "./components/containers/PrivateRoute";
import Home from "./components/Home";
import Profile from "./components/Profile";

const BaseRouter = () => {
  return (
    <>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Home} />
      <PrivateRoute exact path="/profile/" component={Profile} />
    </>
  );
};

export default BaseRouter;
