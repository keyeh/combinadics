# Combinadics - Combinatorial number system for Javascript and Swift

This library is available in both JavaScript and Swift versions, providing encoding and decoding functions based on the [combinatorial number system](https://en.wikipedia.org/wiki/Combinatorial_number_system) also known as combinadics. It allows you to encode an nCk combination (an array of numbers) into an integer and vice-versa.

The combinatorial number system is a compact integer representation of a combination, making it useful in algorithms. It allows for memory-efficient storage and retrieval of combinatorial objects, reducing space requirements in applications that handle large sets of combinations. Hashing and Indexing can then be implemented, for example when the combination is associated with some data.

## Online Demo

The `decode(N, k)` function is available at: https://planetcalc.com/8592/

## JavaScript Version

To use the JavaScript version of the "combinadics" library, you can simply include the `js/combinadics.js` file.

## Swift Version

The Swift version of the "combinadics" library is located in `swift/combinadics.swift`

## Usage

Once you have integrated the "combinadics" library into your project, you can start using the encode and decode functions.

### Encoding

The encode function allows you to encode a combination of elements into a single integer value using the combinatorial number system.

```js
// Picking 5 elements ( nCk where k=5 )
encode([4, 3, 2, 1, 0]); // returns 0
encode([5, 3, 2, 1, 0]); // returns 1
encode([5, 4, 2, 1, 0]); // returns 2
encode([5, 4, 3, 1, 0]); // returns 3
encode([5, 4, 3, 2, 0]); // returns 4
encode([5, 4, 3, 2, 1]); // returns 5
encode([6, 3, 2, 1, 0]); // returns 6
```

### Decoding

The decode function allows you to decode an integer and get a combination, represented as an integer array sorted in descending order.

```js
let k = 5;
decode(0, k); // returns [4, 3, 2, 1, 0]
decode(1, k); // returns [5, 3, 2, 1, 0]
decode(2, k); // returns [5, 4, 2, 1, 0]
decode(3, k); // returns [5, 4, 3, 1, 0]
decode(4, k); // returns [5, 4, 3, 2, 0]
decode(5, k); // returns [5, 4, 3, 2, 1]
decode(6, k); // returns [6, 3, 2, 1, 0]
```

# License

The "combinadics" library is released under the MIT License.
