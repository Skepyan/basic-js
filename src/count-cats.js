module.exports = function countCats(array) {
  const result = array.reduce((acc, x) => {
    if (Array.isArray(x)){
      acc += countCats(x);
    } else if (x === '^^'){
      acc += 1;
    }

    return acc;
    }, 0);

    return result;
};
