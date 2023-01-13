import { join } from "path";
import { ensureWidevine as ensureWidevineRaw } from "./widevine";
import { open } from "@gluon-framework/gluon";

// taken from gluon directly
const ranJsDir = !process.argv[1]
  ? __dirname
  : process.argv[1].endsWith(".js")
  ? dirname(process.argv[1])
  : process.argv[1];

export const ensureWidevine = async ({ forceBrowser, forceEngine } = {}) => {
  // this function doesnt exist
  //const browserData = await Gluon.getBrowserData({ forceBrowser, forceEngine });
  const browserData = {
    browserType: "chromium",
    dataPath: join(ranJsDir, "gluon_data", "chromium"),
  };
  if (!browserData) return;

  if (browserData.browserType !== "firefox")
    await ensureWidevineRaw(browserData.dataPath);
};

export async function openWithWv(url, opts) {
  await ensureWidevine(opts);
  return open(url, opts);
}
