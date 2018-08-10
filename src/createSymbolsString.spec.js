import { createSymbolsString } from "./moveFilesInArray.js";

describe("testcreateSymbolsString", () => {
  it("creates string with correct lenght", () => {
    expect(createSymbolsString(3).length).toBe(3);
  });
  it("creates string with correct string", () => {
    expect(createSymbolsString(3, "*")).toBe("***");
  });
  it("default symbol shoud be asterisk", () => {
    expect(createSymbolsString(2)).toBe("**");
  });
});
