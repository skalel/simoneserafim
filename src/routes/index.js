import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Procedures from "../pages/Procedures";
import Testimonials from "../pages/Testimonials";
import AboutMe from "../pages/AboutMe";
import NotFound from "../pages/NotFound";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Homepage} />
    <Route path="/procedimentos" exact component={Procedures} />
    <Route path="/depoimentos" exact component={Testimonials} />
    <Route path="/sobre-mim" exact component={AboutMe} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
