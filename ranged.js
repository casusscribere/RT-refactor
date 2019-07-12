var rangedkNamespace = rangedNamespace || {};

class Check{
    constructor(attribute,  modifier) {
        this.attribute = attribute;
        this.modifier  = modifier;
    }

    get attribute(){
        return this._attribute;
    }
    get modifier(){
        return this._modifier;
    }
    set attribute(attribute) {
        if(parseInt(attribute)< 0 || parseInt(attribute)> 200) throw "invalid attribute";
        else this._attribute = parseInt(attribute);
      }
    set attribute(modifier) {
        if(parseInt(modifier)< -200 || parseInt(attribute)> 200) throw "invalid modifier";
        else this._modifier = parseInt(modifier);
      }
    
}

class Attack extends Check{
    constructor(attribute, modifier, range, shotsel){
        super(attribute, modifier);
        this._range = range;
        this._shotsel = shotsel;
    }
}

class Character{
    constructor(token, talents) {
    }
}

class Weapon{
    constructor(single, semi, full, numdice, dice, dmg, pen, special, quality, wpnname, type, ammo, mod1, mod2, mod3, effects, wpncat) {
    }
}