import React from 'react';
// import { Route, IndexRoute } from 'react-router';
import { Route } from 'react-router-dom';
import { PageHome, PageAbout } from 'page';
import { RoutesConfig } from 'config';


// const getRouteByName = (name) => {
//   return RoutesConfig
//     .filter(route => route.name === name)[0];
// }

// create routes obj
const routesObj = {};

// push RouteConfigs to routes obj
// any route obj in RouteConfigs
// automatically available in routes obj
// i.e. routes: { home: homeRouteObj, about: aboutRouteObj }
RoutesConfig.map(route => (
  routesObj[route.name] = route
));

const Routes = () => (
  <div>
    <Route exact path={routesObj.home.path} component={PageHome} />
    <Route exact path={routesObj.about.path} component={PageAbout} />
  </div>
);

export default Routes;
