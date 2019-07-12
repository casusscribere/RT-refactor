class Attack extends Check{
    constructor(attribute, modifier, range, atktype){
        super(attribute, modifier);
        this.range = range;
        this.atktype = atktype;
    }

    get range(){
        return this._range;
    }
    get atktype(){
        return this._atktype;
    }
    set range(value) {
        if (typeof value === 'undefined' || Number.isInteger(parseInt(value))==false) throw "invalid range";
        else if(parseInt(value)< 0 || parseInt(value)> 5) throw "range out of range";
        else this._range = parseInt(value);
      }
    set atktype(value) {
        if (typeof value === 'undefined' || Number.isInteger(parseInt(value))==false) throw "invalid atk type";
        else if(parseInt(value)< 0 || parseInt(value)> 15) throw "atk type out of range";
        else this._atktype = parseInt(value);
      }
}