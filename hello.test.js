const hello = require("./hello");

it('hello should return the correct value', () => {
  expect(hello("Test")).toBe("Hello, Test")
})
