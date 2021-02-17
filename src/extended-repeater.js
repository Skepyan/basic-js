const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let final = []


  if(typeof options == 'undefined'){
    return str
  }
  if (typeof options.repeatTimes === 'undefined'){
    options.repeatTimes = 1;
  }
  
  if (typeof options.additionRepeatTimes === 'undefined'){
    options.additionRepeatTimes = 1;
  }

  if (typeof options.separator === 'undefined'){
    options.separator = "+";
  }
  if (typeof options.additionSeparator == 'undefined'){
    options.additionSeparator = '|'
  }

  if (typeof options.addition !== "string" && typeof options.addition !== 'undefined'){
    options.addition = String(options.addition);
  } 
  if (typeof str !== "string"){
    str = String(str);
  }
  for (let i =0; i < options.repeatTimes; i++){
  let sub = [];
    for (let y= 0; y < options.additionRepeatTimes; y++){
    sub.push(options.addition);
    }
   let x = sub.join(options.additionSeparator)
    let z = str + x;
    final.push(z)
  }
  return final.join(options.separator)
};
