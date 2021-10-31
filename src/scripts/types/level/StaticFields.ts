type StaticFields = {
    [k in keyof typeof CONF.ImgPath]?: [number, number][]
};