const math = require("../app/math");

// parent test suite
describe("MATH - Main Suite", () => {

  // innner test suite
  describe("Math Operations", () => {

    // test
    test("1 + 2 equals 3", () => {
      expect(math.sum(1, 2)).toBe(3);
    });

    // test
    test("1 - 2 equals -1", () => {
      expect(math.difference(1, 2)).toBe(-1);
    });

  });

  // inner test suite
  describe("Advanced Math Operations", () => {

    // test
    test("1 * 2 equals 2", () => {
      expect(math.product(1, 2)).toBe(2);
    });

    // test
    test("1 / 2 equals 0.5", () => {
      expect(math.division(1, 2)).toBe(0.5);
    });

  });

});