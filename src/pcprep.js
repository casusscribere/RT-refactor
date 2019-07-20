/**Author: Argagarg
 * Source: https://github.com/Argagarg/RT2sheet
 * About: This module builds the strings which are passed to powerCards. Change this to adjust how the data produced from the various checks is displayed by PC.
 **/
import {Check} from "./check.js";
import {Skillcheck} from "./skill.js";

export function pcprep(check, token, mode = null, msg = null){


    //Chose output mode
    if(mode != null && mode=='normal'){
        mode='';
    } else if(mode != null && mode=='secret'){
        mode='--whisper|self,gm';
    } else if(mode != null && mode=='hidden'){
        mode='--whisper|gm';
        if(msg != null && msg.who!=''){
            sendChat(msg.who, '/w ' + msg.who + ' sent a secret '+skillname+' roll to the GM.');  
        }
    } else{
        mode='';
    }

    //Form output message based on result
    let checkstr = '';
    if(check.dos > 0) {
        checkstr = '<span style="color:green">' + token + ' succeeds by <B>' + check.dos + ' degree(s)</B>.</span> ';
    }
    else {
        checkstr = '<span style="color:red">' + token + ' fails by <B>' + Math.abs(check.dos) + ' degree(s)</B></span>. ';
    }

    //each queue is going to require specific exposed properties
    let qualstr = '';
    let skillname = check.name;
    log("the name for comparison is:");
    log(skillname);
    if(check.postqueue && check.postqueue.length > 0){
        check.postqueue.forEach(function(element){
            if(eval(element.evalcondition)) {
                log("applying the talent(post):");
                log(element);
                qualstr = qualstr + " --"+element.name+" | "+element.description;
            }
        });
    }



    let player_obj = getObj("player", msg.playerid);
    msg.content="!power {{ "+mode+" --format|skill --titlefontshadow|none --name|"+token+" --leftsub|"+check.name+" Check --rightsub| "+check.diff+" Diff. --Roll:|[! "+check.roll+" !] vs [! "+(check.modifier+check.attribute)+" !]  --Result:|"+checkstr+qualstr+" }}";
    msg.who = msg.who.replace(" (GM)", "");
    msg.content = msg.content.replace(/<br\/>\n/g, ' ').replace(/({{(.*?)}})/g, " $2 ");
    PowerCard.Process(msg, player_obj);
}