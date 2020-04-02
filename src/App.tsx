import React from "react";
import Layout from "./Layout";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Layout>
  );
};

export default App;
