import "./DigitalTwinPage.css";

import { useState } from "react";

import DigitalTwinScene from "../../components/digitalTwin/DigitalTwinScene";
import InfoPanel from "../../components/digitalTwin/overlays/InfoPanel";

export default function DigitalTwinPage() {

    const [selectedMachine, setSelectedMachine] = useState(null);

    return (

        <div className="digital-twin-page">

            <DigitalTwinScene
                selectedMachine={selectedMachine}
                setSelectedMachine={setSelectedMachine}
            />

            <InfoPanel
                machine={selectedMachine}
            />

        </div>

    );

}