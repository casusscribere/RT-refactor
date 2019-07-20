/**Author: Argagarg
 * Source: https://github.com/Argagarg/RT2sheet
 * About: This module characterizes the 40k skill check
 **/
import {Talents} from "./talents.js";
import {Check} from "./check.js";
export class Skillcheck extends Check{
    constructor(attribute,  modifier, name, talentstr) {
        super(attribute, modifier, name);
        this.talents        = new Talents(talentstr);
        this.prebindqueue   = [];
        this.postqueue      = [];
    }

    applytalents(){
        this.talents.active.forEach(function(element){
            if(element.triggers.includes('prebind'))    this.prebindqueue.push(element);
            if(element.triggers.includes('post'))       this.postqueue.push(element);
        },this);
        log(this.prebindqueue);
        log(this.postqueue);
    }

    bindmodifier(){
        //each queue is going to require specific exposed properties
        let modifier = this.modifier;
        let skillname = this.name;
        if(this.prebindqueue.length > 0){
            this.prebindqueue.forEach(function(element){
                if(eval(element.evalcondition)) {
                    log("applying the talent(prebind):");
                    log(element);
                    eval(element.evaleffect);
                }
            });
        }
        this.modifier = modifier;
        super.bindmodifier();
    }
}
