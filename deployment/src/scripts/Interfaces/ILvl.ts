interface ILevel {
    readonly mapObjects: {
        readonly staticFields: StaticFields,
        readonly mobileFields?: {
            [k in EntityName]?: [number, number][]
        },
        readonly mapArrows?: {
            Red?: MapArrow[],
            Blue?: MapArrow[]
        },
        readonly goblet: {
            coordinates: { x: number, y: number }
        }
    },
    readonly cows: ICow[],
    arrows: {
        Red: {
            [k in Direction]?: number
        },
        Blue?: {
            [k in Direction]?: number
        }
    }
}