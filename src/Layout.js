import React from "react";
import HelloWorld from "./HelloWorld";
import Post from "./Post";
import Home from "./Home";
import Header from "./components/header";
import Footer from "./components/footer";
import { Switch, Route } from "react-router-dom";

const Layout = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Post} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
