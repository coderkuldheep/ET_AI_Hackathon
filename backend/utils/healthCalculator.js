export function calculateMachineHealth(sensor) {

    let score = 100;

    // Temperature

    if (sensor.temperature >= 90) {

        score -= 40;

    } else if (sensor.temperature >= 80) {

        score -= 25;

    } else if (sensor.temperature >= 70) {

        score -= 10;

    }

    // Vibration

    if (sensor.vibration >= 1) {

        score -= 40;

    } else if (sensor.vibration >= 0.8) {

        score -= 25;

    } else if (sensor.vibration >= 0.5) {

        score -= 10;

    }

    // Pressure

    if (sensor.pressure < 3) {

        score -= 30;
    
    }
    else if(sensor.pressure < 4){
    
        score -= 15;
    
    }
    else if(sensor.pressure > 7){
    
        score -= 20;
    
    }

    // Clamp score

    if (score < 0) score = 0;

    let risk = "LOW";
    let recommendation = "Continue Normal Operation";
    let remainingDays = 60;

    if (score < 80) {

        risk = "MEDIUM";
        recommendation = "Inspect Machine Components";
        remainingDays = 30;

    }

    if (score < 60) {

        risk = "HIGH";
        recommendation = "Schedule Maintenance";
        remainingDays = 14;

    }

    if (score < 30) {

        risk = "CRITICAL";
        recommendation = "Stop Machine Immediately";
        remainingDays = 3;

    }

    return {

        healthScore: score,

        risk,

        remainingDays,

        failureProbability: Number(((100 - score) / 100).toFixed(2)),

        recommendation

    };

}