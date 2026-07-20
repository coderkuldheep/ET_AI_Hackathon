import Sidebar from "@/components/Sidebar/Sidebar";
import Topbar from "@/components/Topbar/Topbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <Sidebar />

            <div
                style={{
                    flex: 1,
                    background: "#081726",
                    color: "white",
                    padding: "20px",
                }}
            >
                <Topbar />

                <h1>Dashboard Layout Loaded</h1>

                <Outlet />
            </div>
        </div>
    );
}