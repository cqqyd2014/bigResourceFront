import React from 'react'
import { Route, Switch } from 'react-router'


import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'
import Loadable from "react-loadable";

const Home = Loadable({
  loader: () => import("../components/Home"),
  loading: ()=><div>Loading</div>
});

const Hello = Loadable({
  loader: () => import("../components/Hello"),
  loading: ()=><div>Loading</div>
});


const Counter = Loadable({
  loader: () => import("../components/Counter"),
  loading: ()=><div>Loading</div>
});

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/counter" component={Counter} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
