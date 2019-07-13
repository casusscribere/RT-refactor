/**Author: Argagarg
 * Source: https://github.com/Argagarg/RT2sheet
 * About: This module exposes the functions which perform the basic RT 2.0 tests
 **/
import {Check} from "./check.js";

export function makecheck(attribute, modifier){
        var check = new Check(attribute, modifier);
        check.bindmodifier();
        check.calcdegreesofsuccess();
        return check;
}