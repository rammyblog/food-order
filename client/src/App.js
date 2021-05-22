import "./App.css";
import { Link } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";

function App() {
  return (
    <Router>
      <BaseRouter />
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </Router>
  );
}

export default App;
