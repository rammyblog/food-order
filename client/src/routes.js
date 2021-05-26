import { Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { PrivateRoute } from "./components/containers/PrivateRoute";
import Profile from "./components/Profile";

const BaseRouter = () => {
  return (
    <>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/profile/" component={Profile} />
    </>
  );
};

export default BaseRouter;
