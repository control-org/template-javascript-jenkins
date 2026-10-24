class Greeter {
  greet(name = "World") {
    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("Name must be a non-empty string");
    }
    return `Hello, ${name}!`;
  }
}

module.exports = Greeter;
