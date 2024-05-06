// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//false
test('adds 9 + 10 to equal 21', () => {
  expect(9 + 10).toBe(21);
});

//false
test('adds 9 and 10 equal to each other', () => {
  expect(9 == 10).toBe(true);
});

//true
test('adds 10 and 10 equal to each other', () => {
  expect(10 == 10).toBe(true);
});

//true
test('21 is greater than 100 when doing string comparison', () => {
  expect("21" > "100").toBe(true);
});