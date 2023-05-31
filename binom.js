// https://stackoverflow.com/a/15302448
export default function binom(n, k) {
  if (k === 0) return 1;
  return (n * binom(n - 1, k - 1)) / k;
}

// https://cp-algorithms.com/combinatorics/binomial-coefficients.html#improved-implementation
// export default function binom(n, k) {
//   let res = 1;
//   for (let i = 1; i <= k; ++i) {
//     res = (res * (n - k + i)) / i;
//   }
//   return res;
// }
