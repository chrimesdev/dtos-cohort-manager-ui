import {
  formatNhsNumber,
  formatDate,
  formatCompactDate,
  formatPhoneNumber,
} from "./utils";

describe("formatNhsNumber", () => {
  it("should format the NHS number as XXX XXX XXXX", () => {
    const input = "1234567890";
    const expectedOutput = "123 456 7890";
    expect(formatNhsNumber(input)).toBe(expectedOutput);
  });

  it("should return the input if it is not a valid NHS number", () => {
    const input = "12345";
    const expectedOutput = "12345";
    expect(formatNhsNumber(input)).toBe(expectedOutput);
  });
});

describe("formatDate", () => {
  it("should format the date as 26 February 1993", () => {
    const input = "1993-02-26T11:53:01.243";
    const expectedOutput = "26 February 1993";
    expect(formatDate(input)).toBe(expectedOutput);
  });
});

describe("formatCompactDate", () => {
  it("should format the date as 26 February 1993", () => {
    const input = "19930226";
    const expectedOutput = "26 February 1993";
    expect(formatCompactDate(input)).toBe(expectedOutput);
  });
});

describe("formatPhoneNumber", () => {
  it("should format the phone number as XXXXX XXX XXX", () => {
    const input = "01619999999";
    const expectedOutput = "01619 999 999";
    expect(formatPhoneNumber(input)).toBe(expectedOutput);
  });

  it("should return the input if it is not a valid phone number", () => {
    const input = "12345";
    const expectedOutput = "12345";
    expect(formatPhoneNumber(input)).toBe(expectedOutput);
  });
});
