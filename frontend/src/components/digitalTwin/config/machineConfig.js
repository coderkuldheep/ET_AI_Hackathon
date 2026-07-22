export const MACHINE_CONFIG = {

    pump: {

        id: 0,

        name: "Industrial Pump",

        model: "pump",

        position: [-18, 0, 0],

        rotation: [0, Math.PI / 2, 0],

        scale: 3.5,

        labelPosition: [0, 8, 0],

        camera: {
            position: [-12, 8, 12],
            target: [-18, 2, 0]
        }

    },

    conveyor: {

        id: 1,

        name: "Conveyor System",

        model: "conveyor",

        position: [0, 0, 0],

        rotation: [0, Math.PI / 2, 0],

        scale: 3,

        labelPosition: [0, 7, 0],

        camera: {
            position: [0, 8, 14],
            target: [0, 2, 0]
        }

    },

    pumpjack: {

        id: 2,

        name: "Pump Jack",

        model: "pumpjack",

        position: [18, 0, 0],

        rotation: [0, Math.PI / 2, 0],

        scale: 4,

        labelPosition: [0, 10, 0],

        camera: {
            position: [12, 10, 15],
            target: [18, 3, 0]
        }

    }

};