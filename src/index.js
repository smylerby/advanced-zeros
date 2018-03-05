module.exports = function getZerosCount(number, base) {

    let nulls = number;
    let s_s = base;

    for (let i = 2; i <= base; i++) {
        if (s_s % i == 0) {
            let divisor = 0;
            while (s_s % i == 0) {
                divisor++;
                s_s = Math.floor(s_s/i);
            }

            let rest = 0;
            let rest_of_fac = number;

            while (rest_of_fac/i > 0) {
                rest += Math.floor(rest_of_fac/i);
                rest_of_fac = Math.floor(rest_of_fac/i);
            }
            nulls = Math.floor(Math.min(nulls, rest/divisor));
        }
    }
    return nulls;
}