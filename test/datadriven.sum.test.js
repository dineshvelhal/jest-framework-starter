const math = require("../app/math");


// parent test suite
describe(`${__APP_NAME__} - Main Suite`, () => { // __APP_NAME__ value is set in the jest.config.js under the Globals section

  describe("Data Driven Test", () => {

    // Pass the data values as array of array to the test
    test.each([
      [1, 2, 3],
      [100, 200, 300]
    ])('%d + %d = %d', (a, b, total) => {
      expect(math.sum(a, b)).toBe(total);
    });

  });

  // Pass the data values as array of array to the test suite
  describe.each([
    [10, 20, 30, -10],
    [20, 20, 40, 0]
  ])("Data Driven test Suite [a = %d, b = %d, sum = %d, difference = %d]", (a, b, total, difference) => {

    test(`${a} + ${b} = ${total}`, () => {
      expect(math.sum(a, b)).toBe(total);
    });

    test(`${a} - ${b} = ${difference}`, () => {
      expect(math.difference(a, b)).toBe(difference);
    });

  });

});