interface ILevel {
    readonly mapObjects: {
        readonly staticFields?: StaticFields,
        readonly mobileFields?: {
            [k in EntityName]?: [number, number][]
        },
        readonly mapArrows?: {
            [k in ArrowColor]?: MapArrow[]
        },
        readonly goblet: {
            coordinates: { x: number, y: number }
        }
    },
    readonly cows: ICow[],
    arrows: {
        [k in ArrowColor]?: {
            [k in Direction]?: number
        }
    }
}