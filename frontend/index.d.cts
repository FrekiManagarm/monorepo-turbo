import type { ServerBuild } from "@remix-run/node";

declare module "@biume/frontend" {
  export function getPublicDir(): string;
  export function getServerBuild(): Promise<ServerBuild>;
  export function startDevServer(app: any): Promise<void>;
}
