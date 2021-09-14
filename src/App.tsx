import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from "./UI/Layout/Layout";
import Authentication from "./componenets/Authentication/Authentication";

const App =() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
  return (
      <Router>
        {/*<Layout/>*/}
        <Authentication/>
      </Router>
  );
}

export default App;
