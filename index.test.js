const yams = require("./index");

describe("Test description", () => {
  it.each([
    { input: [[1, 1, 1, 2, 2]], output: 30 },
  ])("Should return $output when given $input", ({ input, output }) => {
    expect(template(input)).toBe(output);
  });
});
