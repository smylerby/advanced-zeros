module.exports = function getZerosCount(number, base) {

  let nulls = number;
  let ss = base;
  let a, c, d = 0;

  for (let i = 2; i <= base; i++) {
      c = 0;
      d = number;

      if (ss % i == 0) {
      a = 0;

      while (ss % i == 0) {
        a++;
        ss = Math.floor(ss/i);
      }

      while (d/i > 0) {
        c += Math.floor(d/i);
        d = Math.floor(d/i);
      }
      nulls = Math.floor(Math.min(nulls, c/a));
    }
  }
  return nulls;
}