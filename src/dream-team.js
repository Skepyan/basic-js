const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 let teamName = '';
 if (Array.isArray(members) === false){
   return false;
 }else{
   let emptyArray = [];
   emptyArray = members.reduce(function(acc, current){
     if(typeof(current) === 'string'){
      emptyArray.push(current.trim()[0].toUpperCase());
      if(current.length !== 0)
       return emptyArray   ;
     }
   },"");
   if (emptyArray.length > 0)
   teamName = emptyArray.sort().join('')
   return teamName;
   }
 
};