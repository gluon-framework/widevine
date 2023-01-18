import { OpenOptions, open } from "@gluon-framework/gluon";

export function ensureWidevine(
  opts?: Pick<OpenOptions, "forceBrowser" | "forceEngine">
): Promise<void>;

export const openWithWidevine: typeof open;
