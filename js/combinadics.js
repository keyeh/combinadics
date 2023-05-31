// JavaScript implementation of https://www.farside.org.uk/201311/encoding_n_choose_k
//
// We are using "var" to be similar to swift.

export function encode(choices) {
  let sortedChoices = choices.sort((a, b) => b - a);
  var k = choices.length;
  var result = 0;
  for (const choice of sortedChoices) {
    result += binom(choice, k);
    k -= 1;
  }
  return result;
}

export function decode(N, k) {
  var choice = k - 1;
  while (binom(choice, k) < N) {
    choice++;
  }

  var result = [];
  var _N = N;
  var _K = k;
  while (choice >= 0) {
    if (binom(choice, _K) <= _N) {
      _N -= binom(choice, _K);
      _K -= 1;
      result.push(choice);
    }
    choice -= 1;
  }
  return result;
}

//
// Binomial coefficients
//
// https://stackoverflow.com/a/15302448
export function binom(n, k) {
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
