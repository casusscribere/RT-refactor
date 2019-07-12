class Weapon{
    constructor(single, semi, full, numdice, dice, dmg, pen, wpnattrs, quality, wpnname, dmgtype, ammo, mod1, mod2, mod3, effects, wpncat) {
        this.availablemods = {
            "na": false,
            "auxilliary": false,
            "backpack": false,
            "compact": false,
            "grip": false,
            "deactivated": false,
            "expanded": false,
            "exterminator": false,
            "selector": false,
            "fluid": false,
            "melee": false,
            "stock": false,
            "mono": false,
            "motion": false,
            "omni": false,
            "photo": false,
            "pistol": false,
            "preysense": false,
            "quick": false,
            "reddot": false,
            "reinforced": false,
            "sacred": false,
            "silencer": false,
            "suspensors": false,
            "targeter": false,
            "telescopic": false,
            "tox": false,
            "tripod": false,
            "truesilver": false,
            "weaving": false,
            "warpleech": false,
            "vox": false,
            "stabilitydampener": false,         //custom mods
            "extendedbarrel": false,
            "driverscope": false,
            "ultralight": false,
            "extendeddrivermagazine": false,
            "impeller": false,
            "drivergrip": false,
            "bulkbuild": false,
        };
        this.availableammo = {
            "default": true,
            "abyssal": false,
            "amputator": false,
            "bleeder": false,
            "concussion": false,
            "dumdum": false,
            "expander": false,
            "explosive": false,
            "hotshot": false,
            "incindiary": false,
            "inferno": false,
            "manstopper": false,
            "nitidus": false,
            "purgatus": false,
            "purity": false,
            "psybolts": false,
            "psyflame": false,
            "sanctified": false,
            "scrambler": false,
            "shard": false,
            "shock": false,
            "silver": false,
            "tempest": false,
            "thermal": false,
            "tox": false,
            "inferno": false,           //custom ammo
            "overload": -1,
            "cryo": -1,
            "chemical": -1,
            "shredder": -1,
            "tungsten": false,
            "hammerhead": -1,
            "phasic": false,
            "polonium": -1,
            "flux": false
        };
        this.availablewpnattrs = {
            "Accurate": false,
            "Balanced": false,
            "Blast": -1,
            "Concussive": -1,
            "Corrosive": false,
            "Crippling": -1,
            "Daemonbane": false,
            "Defensive": false,
            "Felling": -1,
            "Flame": false,
            "Flexible": false,
            "Force": false,
            "Graviton": false,
            "Hallucinogenic": -1,
            "Haywire": -1,
            "HaywireMod": 0,
            "Inaccurate": false,
            "Indirect": -1,
            "Lance": false,
            "Maximal": false,
            "Melta": false,
            "Overheats": false,
            "PowerField": false,
            "Primitive": -1,
            "Proven": -1,
            "RazorSharp": false,
            "Recharge": false,
            "Reliable": false,
            "Sanctified": false,
            "Scatter": false,
            "Shocking": false,
            "Smoke": -1,
            "Snare": -1,
            "Spray": false,
            "Storm": false,
            "Tainted": false,
            "Tearing": false,
            "Toxic": -1,
            "Twin-Linked": false,
            "Unbalanced": false,
            "Unreliable": false,
            "Unwieldy": false,
            "Vengeful": 10,         //Daemon wpn attributes
            "Voidchill": false,
            "Howling": false,
            "Wounding": -1,
            "Vicious": false,
            "Accursed": false,
            "Bloodlust": false,
            "Thirsting": false,
            "Null": false,
            "Fury": false,
            "Skulltaker": false,
            "Illusory": false,
            "MindEater": false,
            "Spellbound": false,
            "WarpFlame": false,
            "SorcerousForce": -1,
            "Bile-Quenched": false,
            "Enfeebling": false,
            "PlagueCarrier": false,
            "StreamofCorruption": -1,
            "PestilentStench": -1,
            "Envenomed": -1,
            "Lashing": -1,
            "Swiftness": -1,
            "Sophorific Musk": false,
            "Enticing": false,
            "Vulgar": false,
            "Jealous": false,
            "Prideful": false,
            "Vindictive": false,
            "Overbearing": false,
            "Thrown": false,        //Wpn can be thrown as ranged atk
            "Multiplier": -1,    //Multiplier to attribute damage
            "Precision": -1,        //+X damage per DoS
            "Weighty": -1,          //requires SB(X) to fire
            "Intangible": false,    //doesn't add attribute to melee damage
            "Imposing": false,
            "Compact": false,
            "Steady": false,
            "Potent": false,
            "SwirlingEnergy": false,
            "IncalculablePrecision": false,
            "Indestructible": false,
            "Ramshackle": false,
            "PeerlessElegance": false,
            "InnovativeDesign": false,
            "RemnantoftheEndless": false,
            "DeathsDreamFragment": false,
            "Surly": false,
            "Cruel": false,
            "Patient": false,
            "Unpredictable": false,
            "Respendent": false,
            "Vanishing": false,
            "Trusty": false,
            "Zealous": false,
            "Dogged": false,
            "Lucky": false
        };
        this.firerate = [single, semi, full];
        this.numdice = numdice;
        this.dmg = dmg;
        this.pen = pen;
        this.wpnattrs = wpnattrs;
        this.quality = quality;
        this.wpnname = wpnname;
        this.dmgtype = dmgtype;
        this.ammo = ammo;
        this.mods = [mod1, mod2, mod3];
        this.effects = effects;
        this.wpncat = wpncat;
    }


    get firerate(){
        return this._firerate;
    }
    get numdice(){
        return this._numdice;
    }
    get dmg(){
        return this._dmg;
    }
    get pen(){
        return this._pen;
    }
    get wpnattrs(){
        return this._wpnattrs;
    }
    get quality(){
        return this._quality;
    }
    get wpnname(){
        return this._wpnname;
    }
    get dmgtype(){
        return this._dmgtype;
    }
    get ammo(){
        return this._ammo;
    }
    get mods(){
        return this._mods;
    }
    get effects(){
        return this._effects;
    }
    get wpncat(){
        return this._wpncat;
    }


    set firerate(value){
        if(value[0] !== 'S' && value[0] !== 'M' && value[0] !== '-') throw "invalid single-shot RoF";
        if((value[1] > 10 || value[1] < 1) && Number.isInteger(value[1]) || (typeof value[1] !== 'string' && value[1] !== '-')) throw "semi-auto RoF out of range or invalid";
        if((value[2] > 10 || value[2] < 1) && Number.isInteger(value[2]) || (typeof value[2] !== 'string' && value[2] !== '-')) throw "full-auto RoF out of range or invalid";
        else this._firerate = value;
    }
    set numdice(value) {
        if (typeof value === 'undefined' || Number.isInteger(parseInt(value))==false) throw "invalid num dice";
        else if(parseInt(value)< 0 || parseInt(value)> 20) throw "num dice out of range";
        else this._numdice = parseInt(value);
    }
    set dmg(value) {
        if (typeof value === 'undefined' || Number.isInteger(parseInt(value))==false) throw "invalid dmg";
        else if(parseInt(value)< 0 || parseInt(value)> 20) throw "dmg out of range";
        else this._dmg = parseInt(value);
    }
    set pen(value) {
        if (typeof value === 'undefined' || Number.isInteger(parseInt(value))==false) throw "invalid pen";
        else if(parseInt(value)< 0 || parseInt(value)> 20) throw "pen out of range";
        else this._pen = parseInt(value);
    }
    set wpnattrs(value) {
        let i, j, sub, cur = 0;
        for (i = 0, j = value.length; i < j; i++) {
            value[i] = value[i].replace(/^\s+|\s+$/g, '');    //remove whitespace
            sub = value[i].match(/\d/);                              //find any numbers in parentheses
            value[i] = value[i].replace(/\(([^)]+)\)/g, '');  //remove parentheses and anything inside
            cur = value[i];                                          
            if(sub != null){                                                //if there was a number in parentheses, set the array location equal to that number, otherwise set it as true
                availablewpnattrs[cur] = sub;
            } else {
                availablewpnattrs[cur] = true;  
            }
        }
        this._wpnattrs = availablewpnattrs.filter(function(currentvalue, index, arr){
            return (currentvalue[index]===true || (Number.isInteger(currentvalue[index]) && currentvalue[index]>-1 && currentvalue[index]<50));
        });
    }
    set quality(value) {
        if (typeof value === 'undefined' || typeof value != 'string' ) throw "invalid quality";
        else if (value !== 'poor' && value !== 'normal' && value !== 'good' && value !=='best') throw "invalid quality";
        else this._quality = value;
    }
    set wpnname(value) {
        if (typeof value === 'undefined' || typeof value != 'string' ) throw "invalid weapon name";
        else this._wpnname = value;
    }
    set dmgtype(value){
        if (typeof value === 'undefined' || typeof value != 'string' ) throw "invalid dmg type";
        else if (value !== 'Energy' && value !== 'E' && value !== 'Explosive' && value !=='X' && value !== 'Impact' && value !=='I' && value !== 'Rending' && value !=='R') throw "invalid dmg type";
        else this._dmgtype = value;        
    }
    set ammo(value) {
        let activeammo = availableammo[value];
        if (typeof value === 'undefined' || typeof value != 'string' || activeammo ===null || activeammp === '') throw "invalid ammo";
        else {
            this._ammo = value;
            availableammo[value]= true;
        }
    }
    set mods(value) {
        //TODO mod filtering
        if(false) {}
        else {
            availablemods[value[0]] = true;
            availablemods[value[1]] = true;
            availablemods[value[2]] = true;
            this._mods = value;
        }
    }
    set effects(value) {
        if (typeof value === 'undefined' || typeof value != 'string' ) throw "invalid effect string";
        else this._effects = value;
    }
    set wpncat(value) {
        if (typeof value === 'undefined' || typeof value != 'string' ) throw "invalid dmg type";
        else if (value !== 'pistol' && value !== 'basic' && value !== 'heavy' && value !=='sniper' && value !== 'melee' && value !=='melee1h' && value !== 'melee2h') throw "invalid weapon category";
        else this._wpncat = value; 
    }
}