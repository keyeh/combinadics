import { encode, decode, binom } from "./combinadics";

test("binomial coefficients", () => {
  expect(binom(52, 5)).toStrictEqual(2598960);
});

// nCk
const n = 52;
const k = 5;

// Validated against https://planetcalc.com/8592/
const someTestCases = {
  0: [4, 3, 2, 1, 0],
  1: [5, 3, 2, 1, 0],
  2: [5, 4, 2, 1, 0],
  3: [5, 4, 3, 1, 0],
  4: [5, 4, 3, 2, 0],
  69: [8, 5, 4, 3, 1],
  4321: [15, 14, 13, 8, 3],
  1234567: [45, 25, 10, 9, 2],
  2598959: [51, 50, 49, 48, 47],
};

describe("encode", () => {
  for (let [N, a] of Object.entries(someTestCases)) {
    test(`${JSON.stringify(a)} -> ${N}`, () => {
      expect(encode(a)).toBe(parseInt(N));
    });
  }
});

describe("decode", () => {
  for (let [N, a] of Object.entries(someTestCases)) {
    test(`${N} -> ${JSON.stringify(a)}`, () => {
      expect(decode(parseInt(N), k)).toStrictEqual(a);
    });
  }
});

// Uncomment this to test all 52C5
// test("Encode decode for all nCk", () => {
//   for (let i = 0; i < binom(n, c); i++) {
//     expect(encode(decode(i, c))).toStrictEqual(i);
//   }
// });
