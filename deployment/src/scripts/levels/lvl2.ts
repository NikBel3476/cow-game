const lvl2: Readonly<ILevel> = {
    mapObjects: {
        staticFields: {
            "Pillar": [
                [1, 1], [12, 1], [20, 1],
                [12, 6], [15, 6], [17, 6], [20, 6],
                [1, 14], [20, 14]
            ],
            "FenceH": [
                [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1]
            ]
        },
        goblet: {
            coordinates: { x: 16, y: 3 }
        }
    },
    cows: [
        {
            coordinates: { x: 5, y: 3 },
            direction: "Right",
            color: "Grey"
        }
    ],
    arrows: {
        "Red": {
            "Up": 1,
            "Right": 1,
            "Down": 1
        }
    }
}