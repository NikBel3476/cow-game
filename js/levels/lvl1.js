const lvl1 = Object.freeze({
    /* fields: [
        ["Pillar", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "Pillar"],
        ["FenceV", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        ["FenceV", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        ["FenceV", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        ["FenceV", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        ["FenceV", null, null, null, null, null, null, null, null, null, "FenceV", null, null, null, null, null, null, null, null],
        ["FenceV", null, null, null, null, null, null, null, null, null, "FenceV", null, null, null, null, null, null, null, null],
        ["FenceV", null, null, null, null, null, null, null, null, null, "FenceV", null, null, null, null, null, null, null, null],
        ["FenceV", null, null, null, null, null, null, null, null, null, "FenceV", null, null, null, null, null, null, null, null],
        ["FenceV", null, null, null, null, null, null, null, null, null, "FenceV", null, null, null, null, null, null, null, null],
        ["FenceV", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        ["FenceV", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        ["FenceV", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        ["Pillar", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "FenceH", "Pillar"],
    ], */
    mapObjects: {
        fixedFields: Object.freeze({
            "Pillar": [
                [1, 1],
                [20, 1],
                [1, 14],
                [20, 14]
            ],
            "FenceH": [
                [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1],
                [11, 1], [12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [17, 1], [18, 1], [19, 1],
                [2, 14], [3, 14], [4, 14], [5, 14], [6, 14], [7, 14], [8, 14], [9, 14], [10, 14],
                [11, 14], [12, 14], [13, 14], [14, 14], [15, 14], [16, 14], [17, 14], [18, 14], [19, 14],
            ],
            "FenceV": [
                [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10], [1, 11], [1, 12], [1, 13],
                [20, 2], [20, 3], [20, 4], [20, 5], [20, 6], [20, 7], [20, 8], [20, 9], [20, 10], [20, 11], [20, 12], [20, 13],
                [11, 6], [11, 7], [11, 8], [11, 9], [11, 10]
            ]
        }),
        mobileFields: Object.freeze({

        }),
        mapArrows: Object.freeze({
            "ArrowRedUp": [
                { x: 7, y: 8, direction: "up"}
            ],
            "ArrowRedRight": [
                {x: 7, y: 3, direction: "right"}
            ]
        }),
        goblet: Object.freeze({
            x: 16, y: 3
        })
    },
    gameObjects: Object.freeze({
        "MainCow": [
            { 
                coordinates: { x: 5, y: 8 },
                direction: "right",
                type: "main"
            }
        ]
    }),
    arrows: Object.freeze({
        "RedUp": 1,
        "RedRight": 1
    })
});