const math = require("../app/math");

describe("Math Operations 1", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(math.sum(1, 2)).toBe(3);
  });

  test("subtracts 1 - 2 to equal -1", () => {
    expect(math.difference(1, 2)).toBe(-1);
  });
});

describe("Math Operations 2", () => {
  //   test("multiplies 1 * 2 to equal 2", () => {
  //     expect(math.product(1, 2)).toBe(2);
  //   });

  test("Divides 1 / 2 to equal 0.5", () => {
    expect(math.division(1, 2)).toBe(0.5);
  });
});