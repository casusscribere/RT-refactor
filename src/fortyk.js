/**Author: Argagarg
 * Source: https://github.com/Argagarg/RT2sheet
 * About: This module exposes the functions which perform the common RT 2.0 tests. Change this to change or extend how the basic character sheet and macro functions interact with this codebase
 **/
import {Check} from "./check.js";
import {Skillcheck} from "./skill.js";

export function makecheck(args){
        let check = new Check(...args);
        check.bindmodifier();
        check.calcdegreesofsuccess();
        return check;
}

export function makeskillcheck(args){
        let check = new Skillcheck(...args);
        check.applytalents();
        check.bindmodifier();
        check.calcdegreesofsuccess();
        return check;        
}