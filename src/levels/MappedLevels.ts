import { ILevel } from "../Interfaces";
import * as lvl1 from './lvl1.json';
import * as lvl2 from './lvl2.json';
import * as lvl3 from './lvl3.json';
import * as lvl4 from './lvl4.json';

export const MAPPED_LEVELS = {
    1: lvl1,
    2: lvl2,
    3: lvl3,
    4: lvl4 as ILevel
}
