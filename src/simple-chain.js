const CustomError = require("../extensions/custom-error");

 
const chainMaker = {
  array:[],
  getLength() {
    return this.array.length;
    
  },
  addLink(value) {
    if(value === undefined){
      this.array.push(' ');
      return chainMaker
    }else {
    value = String(value);
    this.array.push(value);
    return chainMaker;
  }
  },
  removeLink(position) {
    
    if(Number.isNaN(position) || position >= this.array.length || position <= 0){
      this.array = [];
      throw new Error('error');
    }
    this.array.splice(position -1, 1);
    
    return chainMaker
    
  },
  reverseChain() {
    this.array.reverse();
    return chainMaker;
  },
  finishChain() {
    for (let i = 0; i < this.array.length; i++){
      this.array[i] = '( '+ this.array[i] + ' )';
      if (i !== this.array.length -1){
        this.array[i] = this.array[i] + '~~';
      }
    }
    let result = this.array.join('');
    this.array = [];
    return result

  }
};

module.exports = chainMaker;
