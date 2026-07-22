import { useState } from "react";

export default function InfoPanel({ machine }) {

    const [collapsed, setCollapsed] = useState(false);

    const panelStyle = {
        position: "absolute",
        top: 20,
        right: 20,
        width: collapsed ? "220px" : "340px",
        background: "#111827",
        color: "white",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
        overflow: "hidden",
        zIndex: 999
    };

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        background: "#1f2937",
        cursor: "pointer"
    };

    const bodyStyle = {
        padding: "20px"
    };

    return (
        <div style={panelStyle}>

            <div
                style={headerStyle}
                onClick={() => setCollapsed(!collapsed)}
            >
                <h3 style={{ margin: 0 }}>
                    🏭 Machine Details
                </h3>

                <button
                    style={{
                        background: "#2563eb",
                        color: "white",
                        border: "none",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        cursor: "pointer"
                    }}
                >
                    {collapsed ? "Expand" : "Minimize"}
                </button>
            </div>

            {!collapsed && (

                <div style={bodyStyle}>

                    {!machine ? (

                        <>
                            <p>Select a machine from the Digital Twin.</p>
                        </>

                    ) : (

                        <>

                            <h2>{machine.machine}</h2>

                            <hr />

                            <p>
                                <strong>Health:</strong>{" "}
                                {machine.prediction?.healthScore ?? "--"}%
                            </p>

                            <p>
                                <strong>Risk:</strong>{" "}
                                {machine.prediction?.risk}
                            </p>

                            <p>
                                <strong>Failure Probability:</strong>{" "}
                                {Math.round(
                                    (machine.prediction?.failureProbability ?? 0) * 100
                                )}%
                            </p>

                            <p>
                                <strong>Remaining Days:</strong>{" "}
                                {machine.prediction?.remainingDays}
                            </p>

                            <hr />

                            <h3>Live Sensors</h3>

                            <p>
                                🌡 Temperature :
                                {" "}
                                {machine.sensor?.temperature} °C
                            </p>

                            <p>
                                ⚙ Pressure :
                                {" "}
                                {machine.sensor?.pressure}
                            </p>

                            <p>
                                📈 Vibration :
                                {" "}
                                {machine.sensor?.vibration}
                            </p>

                            <p>
                                ⚡ Power :
                                {" "}
                                {machine.sensor?.power}
                            </p>

                            <hr />

                            <h3>AI Recommendation</h3>

                            <p>
                                {machine.prediction?.recommendation}
                            </p>

                        </>

                    )}

                </div>

            )}

        </div>
    );
}