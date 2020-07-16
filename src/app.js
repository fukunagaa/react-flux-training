import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Settings from "./components/Settings";

const app = document.getElementById("app");

ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/favorites/:article" component={Favorites}></Route>
      <Route path="/settings/:mode(main|extra)" component={Settings}></Route>
    </Layout>
  </Router>,
  app
);
