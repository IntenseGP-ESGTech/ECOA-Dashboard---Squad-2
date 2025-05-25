import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.png";
import Flip from "../src/componentes/flip";
import Login from "../src/screens/login/Login";
import Dashboard from "../src/screens/dashboard";
import BusinessAnalytics from "../src/screens/business_analytics";
import TeamManagement from "../src/screens/team_management";
import ProjectStatus from "../src/screens/project_status";
import DashboardGraphs from "../src/screens/dashboard_graphs";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="app-background">
      <div className="app-content">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div className="Container">
                  <div className="logo-container">
                    <img src={logo} className="logo" alt="logo" />
                    <p className="title">
                      Acesse sua conta e junte-se a uma comunidade que transforma
                      inovação em impacto.
                    </p>
                  </div>
                  <Flip setIsAuthenticated={setIsAuthenticated} />
                </div>
              }
            />

            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Login setIsAuthenticated={setIsAuthenticated} />
                )
              }
            />

            <Route
              path="/dashboard"
              element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
              }
            />

            <Route
              path="/business-analytics"
              element={
                isAuthenticated ? <BusinessAnalytics /> : <Navigate to="/login" replace />
              }
            />

            <Route
              path="/team-management"
              element={
                isAuthenticated ? <TeamManagement /> : <Navigate to="/login" replace />
              }
            />

            <Route
              path="/project-status"
              element={
                isAuthenticated ? <ProjectStatus /> : <Navigate to="/login" replace />
              }
            />
            
            <Route
              path="/dashboard-graphs"
              element={
                isAuthenticated ? <DashboardGraphs /> : <Navigate to="/login" replace />
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
