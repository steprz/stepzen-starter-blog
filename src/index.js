import React from "react";
import "./index.css";
import "./App.css";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
const { REACT_APP_STEPZEN_API_KEY, REACT_APP_STEPZEN_URI } = process.env;

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    credentials: "same-origin",
    headers: {
      Authorization: `Apikey ${REACT_APP_STEPZEN_API_KEY}`,
    },
    uri: REACT_APP_STEPZEN_URI,
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
