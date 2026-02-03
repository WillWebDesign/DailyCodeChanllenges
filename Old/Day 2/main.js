const arr = [1, 2, 3, 4, 5];

const productRes = (arr) => {
  const resultArr = [];
  arr.forEach((_el, index) => {
    const arrCopy = [...arr];
    arrCopy.splice(index, 1);
    resultArr.push(arrCopy.reduce((a, b) => a * b));
  });
  return resultArr;
}

console.log(productRes(arr))
