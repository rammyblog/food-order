import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import thunk from "redux-thunk";
import monsterReducer from "./redux/monsterReducer";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux"; // providing your React App with redux

const middleWare = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  monsterReducer,
  {},
  composeEnhancers(applyMiddleware(...middleWare))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
