export function analyzeMachine(sensor) {

    let health = 100;

    // Temperature

    if (sensor.temperature > 40)
        health -= (sensor.temperature - 40) * 0.8;

    // Pressure

    if (sensor.pressure > 5)
        health -= (sensor.pressure - 5) * 10;

    // Vibration

    if (sensor.vibration > 0.4)
        health -= (sensor.vibration - 0.4) * 55;

    // Power

    if (sensor.power > 4)
        health -= (sensor.power - 4) * 8;

    health = Math.max(0, Math.min(100, Math.round(health)));

    //-------------------------------------------------

    let risk = "LOW";

    if (health < 80)
        risk = "MEDIUM";

    if (health < 55)
        risk = "HIGH";

    if (health < 30)
        risk = "CRITICAL";

    //-------------------------------------------------

    let severity = "Excellent";

    if (health < 90)
        severity = "Low";

    if (health < 75)
        severity = "Medium";

    if (health < 55)
        severity = "High";

    if (health < 30)
        severity = "Critical";

    //-------------------------------------------------

    let failureType = "Normal Operation";

    const abnormal = [];

    if (sensor.temperature > 70)
        abnormal.push("temperature");

    if (sensor.pressure > 6)
        abnormal.push("pressure");

    if (sensor.vibration > 0.8)
        abnormal.push("vibration");

    if (sensor.power > 5)
        abnormal.push("power");

    if (abnormal.length > 1) {

        failureType = "Multiple Component Failure";

    }

    else if (abnormal.includes("temperature")) {

        failureType = "Motor Overheating";

    }

    else if (abnormal.includes("pressure")) {

        failureType = "Hydraulic Leakage";

    }

    else if (abnormal.includes("vibration")) {

        failureType = "Bearing Wear";

    }

    else if (abnormal.includes("power")) {

        failureType = "Electrical Fault";

    }

    //-------------------------------------------------

    let confidence = Math.min(
        99,
        Math.max(
            60,
            Math.round(100 - health + abnormal.length * 5)
        )
    );

    //-------------------------------------------------

    let remainingDays = 90;

    if (health < 90)
        remainingDays = 60;

    if (health < 75)
        remainingDays = 45;

    if (health < 55)
        remainingDays = 20;

    if (health < 30)
        remainingDays = 5;

    //-------------------------------------------------

    let repairCost = 0;

    let downtime = "0 Hours";

    let recommendation =
        "Continue normal operation.";

    switch (severity) {

        case "Low":

            repairCost = 3000;
            downtime = "2 Hours";
            recommendation =
                "Schedule routine inspection.";

            break;

        case "Medium":

            repairCost = 12000;
            downtime = "6 Hours";
            recommendation =
                "Inspect machine within 7 days.";

            break;

        case "High":

            repairCost = 35000;
            downtime = "18 Hours";
            recommendation =
                "Immediate maintenance recommended.";

            break;

        case "Critical":

            repairCost = 100000;
            downtime = "48 Hours";
            recommendation =
                "Shutdown immediately and replace damaged components.";

            break;

    }

    return {

        healthScore: health,

        risk,

        severity,

        failureType,

        confidence,

        remainingDays,

        failureProbability:
            Number(((100 - health) / 100).toFixed(2)),

        estimatedRepairCost: repairCost,

        estimatedDowntime: downtime,

        recommendation

    };

}