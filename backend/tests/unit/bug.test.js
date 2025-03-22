const validateBugInput = require("../../utils/validateBugInput");

test("validateBugInput should return true for valid input", () => {
  const validInput = { title: "Test Bug", description: "This is a test bug" };
  expect(validateBugInput(validInput)).toBe(true);
});

test("validateBugInput should return false for invalid input", () => {
  const invalidInput = { title: "", description: "This is a test bug" };
  expect(validateBugInput(invalidInput)).toBe(false);
});