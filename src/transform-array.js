const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)){
  throw new Error('Not implemented');
  }

  let array = [];
  for (i = 0; i < arr.length; i++){
    if(i === 0){
      if (arr[i] === '--discard-prev' || arr[i] === '--double-prev'){
        continue;
      }
    }
    if(i === arr.length -1){
      if (arr[i] === '--discard-next' || arr[i] === '--double-next'){
        continue
      }
    }
   

    if (arr[i] === '--discard-next'){
      i = i+ 1;
    } else if (arr[i] === '--discard-prev'){
      if ((arr[i -2] !== '--discard-next')){
      array.pop();
      }
    } else if (arr[i] === '--double-next'){
      array.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev'){
      if(arr[i -2] !== '--discard-next'){
      array.push(arr[i - 1])
      }
    }else{
      array.push(arr[i])
    }
  
  
  }
  return array;
};
