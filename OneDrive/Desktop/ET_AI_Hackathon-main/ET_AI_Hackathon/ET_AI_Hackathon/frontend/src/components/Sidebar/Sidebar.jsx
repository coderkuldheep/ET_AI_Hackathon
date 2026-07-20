import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
    color: isActive ? "#60a5fa" : "white",
    textDecoration: "none",
    padding: "12px 16px",
    borderRadius: "8px",
    background: isActive ? "#1f2937" : "transparent",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: 500,
    transition: "0.2s ease",
});

export default function Sidebar() {
    return (
        <div
            style={{
                width: "250px",
                minHeight: "100vh",
                background: "#111827",
                color: "white",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box",
            }}
        >
            <h2
                style={{
                    marginBottom: "30px",
                    textAlign: "center",
                    color: "#3b82f6",
                }}
            >
                IndustrialMind AI
            </h2>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                }}
            >
                <NavLink to="/dashboard" style={linkStyle}>
                    <span>📊</span>
                    <span>Dashboard</span>
                </NavLink>

                <NavLink to="/machines" style={linkStyle}>
                    <span>🏭</span>
                    <span>Machines</span>
                </NavLink>

                <NavLink to="/prediction" style={linkStyle}>
                    <span>🤖</span>
                    <span>AI Prediction</span>
                </NavLink>

                <NavLink to="/digital-twin" style={linkStyle}>
                    <span>🌐</span>
                    <span>Digital Twin</span>
                </NavLink>
            </div>

            <div
                style={{
                    marginTop: "auto",
                    fontSize: "12px",
                    color: "#9ca3af",
                    textAlign: "center",
                    paddingTop: "20px",
                }}
            >
                Industry 4.0 Digital Twin
            </div>
        </div>
    );
}