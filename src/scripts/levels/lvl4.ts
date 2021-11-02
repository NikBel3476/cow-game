const lvl4: Readonly<ILevel> = {
    mapObjects: {
        staticFields: {
            "Pillar": [
                [1, 1], [11, 1], [20, 1],
                [1, 14], [10, 14], [20, 14]
            ],
            "FenceH": [
                [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1],
                [12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [17, 1], [18, 1], [19, 1],
                [2, 14], [3, 14], [4, 14], [5, 14], [6, 14], [7, 14], [8, 14], [9, 14],
                [11, 14], [12, 14], [13, 14], [14, 14], [15, 14], [16, 14], [17, 14], [18, 14], [19, 14],
            ],
            "FenceV": [
                [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10], [1, 11], [1, 12], [1, 13],
                [20, 2], [20, 3], [20, 4], [20, 5], [20, 6], [20, 7], [20, 8], [20, 9], [20, 10], [20, 11], [20, 12], [20, 13],
                [11, 2], [11, 3], [11, 4], [11, 5], [11, 6],
                [10, 9], [10, 10], [10, 11], [10, 12], [10, 13]
            ],
            "SlideRight": [
                [9, 8]
            ],
            "SlideLeft": [
                [13, 8]
            ],
            "Block": [
                [11, 7], [10, 8], [12, 8]
            ]
        },
        mobileFields: {
            "HayBale": [
                {
                    coordinates: { x: 11, y: 10 }
                }
            ]
        },
        mapArrows: {
            "Red": [
                {
                    coordinates: { x: 11, y: 9 },
                    direction: "Right"
                }
            ]
        },
        goblet: {
            coordinates: { x: 16, y: 3 }
        }
    },
    cows: [
            {
                coordinates: { x: 5, y: 8 },
                direction: "Right",
                color: "Grey"
            }
    ],
    arrows: {
        "Red": {
            "Up": 1,
            "Right": 1
        }
    }
};