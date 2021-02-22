const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
      
    
    // Фильтруем элементы массива, оставляем только подмассивы
      const filtered = arr.filter(function(x){
          return Array.isArray(x)
      });

      if  (filtered.length == 0 ) {
          // Если массив после фильтрации стал пустым - значит мы дошли до дна массива
          // Начинаем отсчет рекурсивных вызовов функции с единицы
          return 1
      } else {
          //Рекурсивно вызываем функцию, передаем отфильтрованный массив в нее
         // поднимаем все элементы массива на 1 уровень с помощью комманды flat
          const counter = this.calculateDepth( filtered.flat(1) );

          return 1 + counter;
      }
  }
}
          
      
  
  
