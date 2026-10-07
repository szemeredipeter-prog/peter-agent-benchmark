import { describe, expect, it } from "vitest";

import { readConfig } from "../src/config";

describe("readConfig", () => {
  it("uses baseline defaults", () => {
    expect(readConfig({})).toEqual({
      environment: "development",
      port: 3000,
    });
  });

  it("reads supplied values", () => {
    expect(readConfig({ NODE_ENV: "test", PORT: "4100" })).toEqual({
      environment: "test",
      port: 4100,
    });
  });
});
