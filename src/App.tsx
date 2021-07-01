import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from "./UI/Layout/Layout";

const App =() => {
  return (
      <Router>
        <Layout/>
      </Router>
  );
}

export default App;