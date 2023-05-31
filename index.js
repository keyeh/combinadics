import binom from "./binom";

// https://www.farside.org.uk/201311/encoding_n_choose_k

export function encode(choices) {
  choices = choices.sort((a, b) => b - a);

  let k = choices.length;

  let result = 0;
  for (let choice of choices) {
    result += binom(choice, k--);
  }
  return result;
}

export function decode(N, k) {
  let choice = k - 1;
  while (binom(choice, k) < N) {
    choice++;
  }

  let result = [];
  for (; choice >= 0; choice--) {
    if (binom(choice, k) <= N) {
      N -= binom(choice, k--);
      result.push(choice);
    }
  }
  return result;
}
