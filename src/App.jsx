import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from "./components/Home";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register.jsx';
import NewsDetail from './components/NewsDetail';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/:title" element={<NewsDetail />} />
            {/* <Route exact path="/signup" component={SignUp} /> */}
        </Routes>
    );
};

export default App;
