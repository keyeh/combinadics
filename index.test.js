import { encode, decode } from "./index";
import binom from "./binom";

test("binom", () => {
  expect(binom(52, 5)).toStrictEqual(2598960);
});

// Validated against https://planetcalc.com/8592/
const someTestCases = {
  0: [4, 3, 2, 1, 0],
  1: [5, 3, 2, 1, 0],
  2: [5, 4, 2, 1, 0],
  3: [5, 4, 3, 1, 0],
  4: [5, 4, 3, 2, 0],
  69: [8, 5, 4, 3, 1],
};

describe("encode", () => {
  for (let [n, a] of Object.entries(someTestCases)) {
    test(`encode ${JSON.stringify(a)} to ${n}`, () => {
      expect(encode(a)).toBe(parseInt(n));
    });
  }
});

describe("decode", () => {
  for (let [n, a] of Object.entries(someTestCases)) {
    test(`decode ${n} to ${JSON.stringify(a)}`, () => {
      expect(decode(parseInt(n), 5)).toStrictEqual(a);
    });
  }
});

// test("All encode decode", () => {
//   for (let i = 0; i < binom(52, 5); i++) {
//     expect(encode(decode(i, 5))).toStrictEqual(i);
//   }
// });

// test("All encode decode", () => {
//   for (let i = 1000000; i < 2500000; i++) {
//     expect(encode(decode(i, 5))).toStrictEqual(i);
//   }
// });
