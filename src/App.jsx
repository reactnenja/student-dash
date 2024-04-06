import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboards from "./pages/Dashboards";
import Login from "./pages/Login";
import NavbarRight from "./components/navbar/NavbarRight";
import UserTable from "./components/table/Table";
import AddingUser from "./components/addinguser/AddingUser";

const App = () => {
  return (
    <Router>
      <NavbarRight />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboards" element={<Dashboards />} />
        <Route path="/table" element={<UserTable />} />
        <Route path="/adduser" element={<AddingUser />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
