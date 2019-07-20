import React from "react";
import "./css/tailwind.css";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";
import GuestRoute from "./components/GuestRoute";
import AuthRoute from "./components/AuthRoute";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <div className="bg-gray-300 h-screen">
          <GuestRoute path="/login" component={Login} />
          <GuestRoute path="/register" component={Register} />
          <AuthRoute path="/profile" component={Profile} />
        </div>
      </Layout>
    </Router>
  );
}

export default App;
