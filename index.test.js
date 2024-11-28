const yams = require("./index");

describe("Yams", () => {
  it.each([
    { input: [[1, 1, 1, 2, 2]], output: 30 },
    { input: [[1, 4, 1, 1, 2]], output: 30 },
  ])("Should return $output when given $input", ({ input, output }) => {
    expect(yams(input)).toBe(output);
  });
});
