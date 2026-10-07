import { describe, expect, it } from "vitest";

import { APP_VERSION, createApplication } from "../src/app";

describe("createApplication", () => {
  it("creates the baseline application description", () => {
    expect(createApplication()).toEqual({
      name: "peter-agent-benchmark",
      version: APP_VERSION,
    });
  });
});
