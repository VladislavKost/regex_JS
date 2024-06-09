import { clearPhoneNumbers } from "../phoneCleaner";

test("clear Russian 1 phone number", () => {
  const finalNumber = "+79270000000";
  const startNumber = "8 (927) 000-00-00";
  const result = clearPhoneNumbers(startNumber);

  expect(result).toBe(finalNumber);
});

test("clear Russian 2 phone number", () => {
  const finalNumber = "+79600000000";
  const startNumber = "+7 960 000 00 00";
  const result = clearPhoneNumbers(startNumber);

  expect(result).toBe(finalNumber);
});

test("clear Chinese phone number", () => {
  const finalNumber = "+860000000000";
  const startNumber = "+86 000 000 0000 ";
  const result = clearPhoneNumbers(startNumber);

  expect(result).toBe(finalNumber);
});
