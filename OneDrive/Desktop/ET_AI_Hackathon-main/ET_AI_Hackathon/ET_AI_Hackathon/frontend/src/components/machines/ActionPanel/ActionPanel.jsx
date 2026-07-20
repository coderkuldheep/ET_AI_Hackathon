import { useNavigate } from "react-router-dom";

export default function ActionPanel({ machine }) {

    const navigate = useNavigate();

    return (

        <div className="action-card">

            <button
                className="action-btn"
                onClick={() => {

                    alert("AI Assistant integration will be implemented in Phase 3.");

                }}
            >
                🤖 Open AI Assistant
            </button>

            <button
                className="action-btn"
                onClick={() => {

                    navigate("/digital-twin");

                }}
            >
                🛰 Launch Digital Twin
            </button>

        </div>

    );

}