/**Author: Argagarg
 * Source: https://github.com/Argagarg/RT2sheet
 * About: This script serves as a wrapper for the 40k scripts: it captures the basic commands from macros/charsheets and calls the requisite 40k entry points
 **/
import {makecheck, makeskillcheck} from "./fortyk.js";
import {pcprep} from "./pcprep.js";
var listener = listener || (function() {
    

    function handleInput(msg_orig) {

        var msg = _.clone(msg_orig),
            args, cmds, ids = [],
            ignoreSelected = false,
            pageRestriction = [],
            modlist = {
                flip: [],
                on: [],
                off: [],
                set: {},
                order: []
            };
        try {
            if (msg.type !== "api") return;
            args = msg.content;
            let cmdName = args.split(' ').shift();
            if(cmdName !== "!40k") return;
            args = trimString(args).replace(/\s/g, '');
            args = args.split("-");
            args.shift();
            let cmdMode = trimString(args.shift())
            let token = args.shift();
            switch (cmdMode) {
                case 'check':
                    if(args.length < 2) throw "too few arguments for !40k -check";
                    else{
                        let output = makecheck(args);
                        pcprep(output, token,'normal', msg);
                        log(output);
                    }
                break;
                case 'skill':
                    if(args.length < 2) throw "too few arguments for !40k -skill";
                    else{
                        let output = makeskillcheck(args);
                        pcprep(output, token,'normal', msg);
                        log(output);
                    }
                break;
            }
        } catch (e) {
            let who = (getObj('player', msg_orig.playerid) || {
                get: () => 'API'
            }).get('_displayname');
            sendChat('40kScript', `/w "${who}" ` +
                `<div style="border:1px solid black; background-color: #ffeeee; padding: .2em; border-radius:.4em;" >` +
                `<div>There was an error while trying to run your command:</div>` +
                `<div style="margin: .1em 1em 1em 1em;"><code>${msg_orig.content}</code></div>` +
                `<div>Please <a class="showtip tipsy" title="kirk lundblade's site" style="color:blue; text-decoration: underline;" href="http://kirklundblade.com">send me this information</a> so I can make sure this doesn't happen again (triple click for easy select in most browsers.):</div>` +
                `<div style="font-size: .6em; line-height: 1em;margin:.1em .1em .1em 1em; padding: .1em .3em; color: #666666; border: 1px solid #999999; border-radius: .2em; background-color: white;">` +
                JSON.stringify({
                    msg: msg_orig,
                    stack: e.stack
                }) +
                `</div>` +
                `</div>`
            );
        }
    }

    function registerEventHandlers() {
        on('chat:message', handleInput);
    };

    function trimString(src) {
        return src.replace(/^\s+|\s+$/g, '');
    };

    return {
        RegisterEventHandlers: registerEventHandlers,
        handleInput: handleInput
    };
}());

on("ready", function () {
    'use strict';

    //TokenMod.CheckInstall();
    listener.RegisterEventHandlers();
});
