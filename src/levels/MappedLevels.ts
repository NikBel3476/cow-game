import { ILevel } from "./ILevel";
import * as lvl1 from './lvl1.json';
import * as lvl2 from './lvl2.json';
import * as lvl3 from './lvl3.json';
import * as lvl4 from './lvl4.json';
import * as lvl5 from './lvl5.json';

export const MAPPED_LEVELS = {
    1: lvl1 as ILevel,
    2: lvl2 as ILevel,
    3: lvl3 as ILevel,
    4: lvl4 as ILevel,
    5: lvl5 as ILevel
}
