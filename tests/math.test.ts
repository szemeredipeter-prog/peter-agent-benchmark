import { describe, expect, it } from "vitest";

import { add, multiply, subtract } from "../src/math";

describe("math operations", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("subtracts the second number from the first", () => {
    expect(subtract(7, 4)).toBe(3);
  });

  it("multiplies two numbers", () => {
    expect(multiply(3, 5)).toBe(15);
  });
});
