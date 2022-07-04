function factors(a, arr = [], b = 2) {
    if (b > Math.sqrt(a)) {
      arr.push(a);
      return arr;
    } else if (a % b == 0) {
      arr.push(b);
      factors(a / b, arr, b);
    } else {
      factors(a, arr, ++b);
    }
    return arr.join("*");
  }
   
  console.log(factors(6));