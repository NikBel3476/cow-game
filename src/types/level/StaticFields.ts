import { EntityName } from "../EntityName";

export type StaticFields = {
    [k in EntityName]?: [number, number][]
};
