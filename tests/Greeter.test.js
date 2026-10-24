const Greeter = require("../src/Greeter");

describe("Greeter", () => {
  let greeter;

  beforeEach(() => {
    greeter = new Greeter();
  });

  test("should return hello message with default name", () => {
    expect(greeter.greet()).toBe("Hello, World!");
  });

  test("should return hello message with given name", () => {
    expect(greeter.greet("John")).toBe("Hello, John!");
  });

  test("should throw an error for empty string", () => {
    expect(() => greeter.greet("")).toThrow("Name must be a non-empty string");
  });
});
