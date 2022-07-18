let str = 'mississippi';

const ASCII_ARR = new Array(256);

let searchMaxCharacterRepeatWithASCII = (str) => {
  let internalCount = [];
  let max = 0, maxChar = '';

  for (let i=0; i< ASCII_ARR.length; i++){
    internalCount[i] = 0;
  }

  for (let i = 0; i < str.length; i++) {
    internalCount[str.charCodeAt(i)]++;
  }

  for (let i = 0; i < internalCount.length; i++) {
    if (internalCount[i] > max) {
      max = internalCount[i];
      maxChar = String.fromCharCode(i);
    }
  }
  return maxChar;
}

let searchMaxCharacterRepeatIterative = (str) => {
  let internalCount = [], max = -1, result = '';
  const strLength = str.length;

  for (let i=0; i< ASCII_ARR.length; i++){
    internalCount[i] = 0;
  }

  for(let i= 0; i< strLength; i++) {
    internalCount[str[i].charCodeAt(0)] += +1;
  }

  for(let i= 0; i< strLength; i++) {
    if(max < internalCount[str[i].charCodeAt(0)]){
      max = internalCount[str[i].charCodeAt(0)]
      result = str[i]
    }
  }

  return result;
}

let comparatorArr = [];

let searchMaxCharacterRepeatWithSplit = (str) => {
  let max = 0, result;
  let arr = str.split('');

  arr.forEach(char => {
    let arrOfChar = str.split(char)
    if(arrOfChar.length > max) {
      max = arrOfChar.length;
      result = char;
    }
  })
  return result
}

let searchMaxCharacterRepeatWithReduce = (str) => {
  let arrStr=  str.split(''), res;
  let process = arrStr.reduce((a,c) => {
    a[c] = a[c] ? a[c] + 1: 1;
    a.max = a.max < a[c] ? a[c]: a.max;
    return a;
  }, {max: 0});
  for(const key in process) {
    if(key!=='max') {
      if(process[key] === process['max']) {
        res = key;
        break;
      }
    }
  }
  return res
}


let responses = {
  'searchMaxCharacterRepeatIterative': searchMaxCharacterRepeatIterative(str),
  'searchMaxCharacterRepeatWithASCII': searchMaxCharacterRepeatWithASCII(str),
  'searchMaxCharacterRepeatWithSplit': searchMaxCharacterRepeatWithSplit(str),
  'searchMaxCharacterRepeatWithReduce': searchMaxCharacterRepeatWithReduce(str)
}

console.table(responses);
