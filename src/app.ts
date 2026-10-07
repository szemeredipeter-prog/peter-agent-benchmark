export const APP_VERSION = "1.0.0";

export interface Application {
  name: string;
  version: string;
}

export function createApplication(): Application {
  return {
    name: "peter-agent-benchmark",
    version: APP_VERSION,
  };
}
