import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import NewsDetail from "./components/NewsDetail";
import { AuthProvider } from "./components/Auth";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/dashboard/:title" element={<NewsDetail />} />
          {/* <Route exact path="/signup" component={SignUp} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};
export default App;
