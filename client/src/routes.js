import { Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const BaseRouter = () => {
  return (
    <>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </>
  );
};

export default BaseRouter;
