const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
let Object = {};
Object.turns = (2 ** disksNumber) - 1;
Object.seconds = Math.floor((Object.turns * 3600) / turnsSpeed);
return Object
};
