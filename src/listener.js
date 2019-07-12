/**Author: Argagarg
 * Source: https://github.com/Argagarg/RT2sheet
 * About: This script serves as a wrapper for the 40k scripts: it captures the !skill40k, !ranged40k, !melee40k, and !psy40k commands
 **/

var listener = listener || (function () {

    handleInput = function (msg_orig) {

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
            var msgTxt = msg.content;
            var player_obj = getObj("player", msg.playerid);

            if (msg.type !== "api") return;
            args = msg.content;
            let cmdName = args.split(' ').shift();
            if(cmdName !== "!40k") return;
            args = args.split("-");
            args.shift();
            cmdMode = this.trimString(args.shift())
            log(args);
            switch (cmdMode) {
                case 'check':
                    log("entered check");
                    if(args.length < 2) throw "invalid number of parameters for 40k Check";
                    else{
                        let output = fortykNamespace.check(args[0], args[1]);
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
                `<div>Please <a class="showtip tipsy" title="The Aaron's profile on Roll20." style="color:blue; text-decoration: underline;" href="https://app.roll20.net/users/104025/the-aaron">send me this information</a> so I can make sure this doesn't happen again (triple click for easy select in most browsers.):</div>` +
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

    registerEventHandlers = function () {
        on('chat:message', handleInput);
    };

    trimString = function (src) {
        return src.replace(/^\s+|\s+$/g, '');
    };

    return {
        RegisterEventHandlers: registerEventHandlers
    };
}());









on("ready", function () {
    'use strict';

    //TokenMod.CheckInstall();
    listener.RegisterEventHandlers();
});