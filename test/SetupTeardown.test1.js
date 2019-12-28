beforeAll(() => {
  console.log("---- beforeAll");
});

afterAll(() => {
  console.log("---- afterAll");
});

beforeEach(() => {
  console.log("---- beforeEach");
});

afterEach(() => {
  console.log("---- afterEach");
});

describe("describe", () => {
  it("test2", () => {
    console.log("test2");
  });
});