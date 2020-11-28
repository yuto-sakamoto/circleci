const timezoneOffsetHours = require("./getTimezoneOffsetHours");
test('getTimezoneOffsetHours return -9', () => {
  expect(timezoneOffsetHours()).toBe(-9);
});