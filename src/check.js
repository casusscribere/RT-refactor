/**Author: Argagarg
 * Source: https://github.com/Argagarg/RT2sheet
 * About: This module characterizes the basic 40k check
 **/
export class Check{
    constructor(attribute,  modifier, name='generic check') {
        this.attribute  = attribute;
        this.modifier   = modifier;
        this.roll       = randomInteger(100);
        this.name       = name;
        this.diff       = modifier;
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

    bindmodifier(){
        if (this.modifier > 60) this.modifier = 60;
        else if (this.modifier <-60) this.modifier = -60;
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
    get name(){
        return this._name;
    }
    get diff(){
        return this._diff;
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
    set name(value){
        this._name = value;
    }
    set diff(value){
        if(value==0)
        {
            this._diff="Challenging"
        } else if (value == 30){
            this._diff="Easy"
        } else if (value == 20){
            this._diff="Routine"
        } else if (value == 10){
            this._diff="Ordinary"
        } else if (value == -10){
            this._diff="Difficult"
        } else if (value == -20){
            this._diff="Hard"
        } else if (value == -30){
            this._diff="Very Hard"
        } else if (value == -40){
            this._diff="Arduous"
        } else if (value == -50){
            this._diff="Punishing"
        } else if (value == -60){
            this._diff="Hellish"
        }
        else{
            this._diff='Other';
        }
    }
}
