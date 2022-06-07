let arr = [10, 15, 3, 7];
let k = 20;

const res = (arr, k, index) => {
  const current = arr[index];
  const sumArr = arr.map((el) => el + current);
  return sumArr.includes(k) ? true : index === arr.length - 1 ? false : res(arr, k, index + 1);
}

const result = res(arr, k, 0);
console.log(result);
