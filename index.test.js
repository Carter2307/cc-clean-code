const yams = require("./index");

describe("Yams", () => {
  it.each([
    { input: [[1, 1, 1, 2, 2]], output: 30 },
    { input: [[1, 4, 1, 1, 2]], output: 30 },
    { input: [[2, 4, 2, 1, 2]], output: 30 },
    { input: [[1, 4, 4, 1, 1]], output: 30 },
    { input: [[1, 4, 4, 1, 1], [5, 5, 5, 5, 5]], output: 80 },
  ])("Should return $output when given $input", ({ input, output }) => {
    expect(yams(input)).toBe(output);
  });
});
