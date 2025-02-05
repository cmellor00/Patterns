/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number") {
    return NaN;
  } else if (n < 0) {
    return undefined;
  } else if (n === 0) {
    return 1;
  }

  let total = 1;

  for (let i = 1; i <= n; i++) {
    total = total * i;
  }
  return total
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof n !== "number") {
    return null;
  } else if (n <= 0) {
    return [];
  }

  let number = [];
  for (let i = 1; i <= n; i++) {
    number.push(i);
  }

  return number;
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  if (strings.length === 0) {
    return "";
  }

  let longestString = "";

  for (const str of strings) {
    if (str.length > longestString.length) {
      longestString = str;
    }
  }
  return longestString;
}


/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  let number = 0;
  if (attendance.length === 0) {
    return 0;
  }

  for (const student of attendance) {
    if (student === true) {
      number += 1;
    }

  }
  return number;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof dna !== "string") {
    return null;
  }

  let complement = [];

  for (const str of dna) {
    if (str === "T") {
      complement.push("A");
    } else if (str === "A") {
      complement.push("T");
    } else if (str === "C") {
      complement.push("G");
    } else if (str === "G") {
      complement.push("C");
    }
  }
  return complement.join("");
}
