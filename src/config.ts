export interface AppConfig {
  environment: string;
  port: number;
}

export type EnvironmentSource = Readonly<Record<string, string | undefined>>;

export function readConfig(source: EnvironmentSource = process.env): AppConfig {
  return {
    environment: source.NODE_ENV ?? "development",
    port: Number(source.PORT ?? "3000"),
  };
}
