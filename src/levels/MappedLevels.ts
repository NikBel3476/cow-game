import { ILevel } from "./ILevel";
import * as lvl1 from './json/lvl1.json';
import * as lvl2 from './json/lvl2.json';
import * as lvl3 from './json/lvl3.json';
import * as lvl4 from './json/lvl4.json';
import * as lvl5 from './json/lvl5.json';
import * as lvl6 from './json/lvl6.json';
import * as lvl8 from './json/lvl8.json';
import * as lvl13 from './json/lvl13.json';

export const MAPPED_LEVELS: ILevel[] = [
    lvl1 as ILevel,
    lvl2 as ILevel,
    lvl3 as ILevel,
    lvl4 as ILevel,
    lvl5 as ILevel,
    lvl6 as ILevel,
    lvl8 as ILevel,
    lvl13 as ILevel
];
