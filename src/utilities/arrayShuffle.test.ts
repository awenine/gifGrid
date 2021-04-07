import { arrayShuffleRight } from "./arrayShuffle";

const testArray = ['a','b','c','d','e'];

test("returns a shuffled array", () => {
  expect(arrayShuffleRight(testArray)).toEqual(['e','a','b','c','d']);
});