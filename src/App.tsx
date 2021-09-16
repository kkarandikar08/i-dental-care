import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Layout from "./UI/Layout/Layout";
import Authentication from "./componenets/Authentication/Authentication";

const App =() => {
  return (
      <Switch>
          <Route path="/login">
              <Authentication/>
          </Route>
          <Route path="/">
              <Layout/>
          </Route>
      </Switch>
  );
}

export default App;
