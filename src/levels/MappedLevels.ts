import { ILevel } from "./ILevel";
import * as lvl1 from './json/lvl1.json';
import * as lvl2 from './json/lvl2.json';
import * as lvl3 from './json/lvl3.json';
import * as lvl4 from './json/lvl4.json';
import * as lvl5 from './json/lvl5.json';
import * as lvl6 from './json/lvl6.json';
import * as lvl13 from './json/lvl13.json';

export const MAPPED_LEVELS = {
    1: lvl1 as ILevel,
    2: lvl2 as ILevel,
    3: lvl3 as ILevel,
    4: lvl4 as ILevel,
    5: lvl5 as ILevel,
    6: lvl6 as ILevel,
    13: lvl13 as ILevel
}
