import "./DiagnosisCard.css";

export default function DiagnosisCard({ diagnosis }) {

    if (!diagnosis) return null;

    return (

        <div className="diagnosis-card">

            <div className="diagnosis-header">

                🤖 AI Diagnosis

            </div>

            <div className="diagnosis-grid">

                <div>

                    <span>Failure Type</span>

                    <strong>

                        {diagnosis.failureType}

                    </strong>

                </div>

                <div>

                    <span>Severity</span>

                    <strong className={diagnosis.severity.toLowerCase()}>

                        {diagnosis.severity}

                    </strong>

                </div>

                <div>

                    <span>Confidence</span>

                    <strong>

                        {diagnosis.confidence}%

                    </strong>

                </div>

                <div>

                    <span>Health Score</span>

                    <strong>

                        {diagnosis.healthScore}

                    </strong>

                </div>

                <div>

                    <span>Estimated Downtime</span>

                    <strong>

                        {diagnosis.estimatedDowntime}

                    </strong>

                </div>

                <div>

                    <span>Repair Cost</span>

                    <strong>

                        ₹{diagnosis.estimatedRepairCost.toLocaleString()}

                    </strong>

                </div>

            </div>

            <div className="recommendation-box">

                <h4>

                    Recommendation

                </h4>

                <p>

                    {diagnosis.recommendation}

                </p>

            </div>

        </div>

    );

}