export default function PredictionGauge({

    score

}) {

    let color = "#00d26a";

    if (score < 80)

        color = "#ffb300";

    if (score < 60)

        color = "#ff4444";

    return (

        <div className="gauge">

            <svg

                width="150"

                height="150"

            >

                <circle

                    cx="75"

                    cy="75"

                    r="60"

                    stroke="#ddd"

                    strokeWidth="12"

                    fill="none"

                />

                <circle

                    cx="75"

                    cy="75"

                    r="60"

                    stroke={color}

                    strokeWidth="12"

                    fill="none"

                    strokeDasharray="377"

                    strokeDashoffset={377 - (377 * score) / 100}

                    transform="rotate(-90 75 75)"

                />

                <text

                    x="75"

                    y="82"

                    textAnchor="middle"

                    fontSize="24"

                    fill={color}

                >

                    {score}

                </text>

            </svg>

        </div>

    );

}