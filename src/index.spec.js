import { createArray, fillArrayWithRandomNumbers } from "./index.js";

describe("testcreateArray", () => {
  it("createdArrayHasCorrectSize", () => {
    expect(createArray(3).length).toBe(3);
  });
  it("при создании масива с отрацательным размером создается пустой массив", () => {
    expect(createArray(-1).length).toBe(0);
  });
  it("createdArrayWithSizeZero", () => {
    expect(createArray(0).length).toBe(0);
  });
});

describe("testfillArrayWithRandomNumbers", () => {});
