import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import Post from "./pages/Post";
import Home from "./pages/Home";

import "./index.css";

const { REACT_APP_STEPZEN_API_KEY, REACT_APP_STEPZEN_URI } = process.env;

const client = new ApolloClient({
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
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:postId" component={Post} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
