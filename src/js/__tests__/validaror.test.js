import { Validator } from "../validator";

test("text Validator false", () => {
  const validator = new Validator();
  const result = validator.validateUsername("Vladislav.kostrov_2024");

  expect(result).toBe(false);
});

test("text Validator true", () => {
  const validator = new Validator();
  const result = validator.validateUsername("Vladislav_24-kostrov");

  expect(result).toBe(true);
});
