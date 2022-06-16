const arr = [1, 2, 0];

const findPositiveInteger = (arr) => {
  arr.sort((a, b) => a - b);

  let ans = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ans) ans++;
  }
  return ans;
}

const res = findPositiveInteger(arr);

console.log(res);
