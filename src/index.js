import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { createStore } from "redux";
import { allReducers } from "./redux/reducers";

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
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
