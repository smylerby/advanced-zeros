module.exports = function getZerosCount(number, base) {

  let count = number;
  let Dig = base;
  let a, c, d = 0;

  for (let i = 2; i <= base; i++) {
      c = 0;
      d = number;

      if (Dig % i == 0) {
      a = 0;

      while (Dig % i == 0) {
        a++;
        Dig = Math.floor(Dig/i);
      }

      while (d/i > 0) {
        c = c + Math.floor(d/i);
        d = Math.floor(d/i);
      }
      count = Math.floor(Math.min(count, c/a));
    }
  }
  return count;
}