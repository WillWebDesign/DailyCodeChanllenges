const cons = (a, b) => {
  const pair = (f) => {
    return f(a, b);
  }

  return pair;
}

const car = (cons) => {
  return cons((a, _b) => {
    return a;
  });
}

const cdr = (cons) => {
  return cons((_a, b) => {
    return b;
  });
}

console.log(car(cons(3, 4)));
console.log(cdr(cons(3, 4)));
