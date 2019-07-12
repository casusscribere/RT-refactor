class Check{
    constructor(attribute,  modifier) {
        this.attribute  = attribute;
        this.modifier   = modifier;
        this.roll       = randomInteger(100);
    }

    //methods
    reroll(){
        this.roll = randomInteger(100);
    }

    calcdegreesofsuccess(){
        let threshold = this.attribute+this.modifier;
        let dos = 0;
        if(this.roll < threshold) dos = Math.floor(threshold/10) - Math.floor(this.roll/10) + 1;
        else dos = Math.floor(threshold/10) - Math.floor(this.roll/10) - 1;
        this.dos = dos;
    }

    //getters
    get attribute(){
        return this._attribute;
    }
    get modifier(){
        return this._modifier;
    }
    get roll(){
        return this._roll;
    }
    get dos(){
        return this._dos;
    }

    //setters
    set attribute(value) {
        if (typeof value === 'undefined' || Number.isInteger(parseInt(value))==false) throw "invalid attribute";
        else if(parseInt(value)< 0 || parseInt(value)> 200) throw "attribute out of range";
        else this._attribute = parseInt(value);
      }
    set modifier(value) {
        if (typeof value === 'undefined' || Number.isInteger(parseInt(value))==false) throw "invalid modifier";
        if(parseInt(value)< -200 || parseInt(value)> 200) throw "modifier out of range";
        else this._modifier = parseInt(value);
      }
    set roll(value){
        if (typeof value === 'undefined' || Number.isInteger(parseInt(value))==false) throw "invalid roll";
        else if(parseInt(value)<= 1 || parseInt(value)> 100) throw "roll out of range";
        else this._roll = parseInt(value);
    }
    set dos(value){
        if (typeof value === 'undefined' || Number.isInteger(parseInt(value))==false) throw "invalid dos";
        else if(parseInt(value)< -20 || parseInt(value)> 20) throw "dos out of range";
        else this._dos = parseInt(value);
    }
}