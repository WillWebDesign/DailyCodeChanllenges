// import { fountainActivation } from "./main";
const fountainActivation = require('./main.js');

test('it count number of fountains needed', () => {
  const locations = [2, 1, 1, 2, 1];
  expect(
    fountainActivation(locations)
  ).toBe(2);
})
