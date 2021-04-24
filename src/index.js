import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { applyMiddleware, createStore } from "redux";
import { allReducers } from "./redux/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  h1, h2, h3, h4, p {
    padding: 0;
    margin: 0;
  }
  ul, li {
    list-style:none;
    margin: 0;
    padding: 0;
  }
  #root {
    height: 100%;
  }
`;

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
