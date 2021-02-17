const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {



  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if(Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  }
  let summary = date.getMonth();
  if (summary <= 1 || summary === 11){
    return 'winter'
  }
  if (summary >= 2 && summary <= 4){
    return 'spring'
  }
  if (summary >= 5 && summary <= 7){
    return 'summer'
  }
  if (summary >= 8 && summary <= 10){
    return 'autumn'
  }

};