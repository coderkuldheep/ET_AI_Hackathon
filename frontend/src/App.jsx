import { Routes, Route, Navigate } from "react-router-dom";

import Login from "@/pages/Login/Login";
import Dashboard from "@/pages/Dashboard/Dashboard";

import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";

import Machines from "@/pages/Machines/Machines";

import MachineDetails from "@/pages/Machines/MachineDetails";

import PredictionDashboard from "@/pages/Prediction/PredictionDashboard";

import DigitalTwinPage from "./pages/DigitalTwin/DigitalTwinPage";

// Temporary Pages

const DigitalTwin = () => <h1>Digital Twin</h1>;

const Reports = () => <h1>Reports</h1>;

const Analytics = () => <h1>Analytics</h1>;

function App() {
    return (
        <Routes>

            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route element={<ProtectedRoute />}>

                <Route element={<DashboardLayout />}>

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/machines"
                        element={<Machines />}
                    />

                    <Route
                        path="/machines/:id"
                        element={<MachineDetails />}
                    />

                    <Route
                        path="/digital-twin"
                        element={<DigitalTwin />}
                    />

                    <Route
                        path="/reports"
                        element={<Reports />}
                    />

                    <Route
                        path="/analytics"
                        element={<Analytics />}
                    />
                    
                    <Route
                        path="/prediction"
                        element={<PredictionDashboard />}
                    />
                    
                    <Route
                        path="/digital-twin"
                        element={<DigitalTwinPage />}
                    />


                </Route>

            </Route>

        </Routes>
    );
}

export default App;