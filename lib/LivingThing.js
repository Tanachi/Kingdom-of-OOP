export default class LivingThing{
  constructor(name,uniCellular,trueNucleus,anaerobic,asexual,mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name(){
    return this._name;
  }

  set name(val){
    if( typeof(val) === 'string' ){
      this._name = val;
    }else{
      throw new TypeError('LivingThing.name must be a string');
    }
  }
  get uniCellular(){
    return this._uniCellular;
  }

  set uniCellular(val){
    if( typeof(val) === 'boolean' ){
      this._uniCellular = val;
    }else{
      throw new TypeError('LivingThing.uniCellular must be a boolean');
    }
  }

  get multiCellular(){
    return !this._uniCellular;
  }

  set multiCellular(val){
    if( typeof(val) === 'boolean' ){
      if(val === true){
       this._uniCellular = false;
      }
      else{
       this._uniCellular = true;
      }
    }else{
      throw new TypeError('LivingThing.mulitCellular must be a boolean');
    }
  }
}