import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";

// views
import Dashboard from "views/admin/Dashboard.js";
import Settings from "views/admin/Settings.js";

export default function Admin() {
  const location = useLocation(); // Get the current route
  
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Conditionally render HeaderStats */}
        {location.pathname === "/admin/dashboard" && <HeaderStats />}
        <div className="px-1 md:px-1 mx-auto w-full m-6">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/settings" exact component={Settings} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </div>
    </>
  );
}
