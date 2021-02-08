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



[
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2]
]

if (x === '^^'){
  acc += 1;
}