import type { ServerBuild } from "@remix-run/node";

export function getPublicDir(): string;
export function getServerBuild(): Promise<ServerBuild>;
export function startDevServer(app: any): Promise<void>;
