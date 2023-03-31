import { Settings } from "../../models/settings/types";
import { sleep } from "../sleep";

const dummyData: Settings = {
  foo: {
    width: 200,
    height: 100,
    color: "red",
  },
};

export const settingsRepo = {
  async fetch(): Promise<Settings> {
    await sleep(5000);
    return dummyData;
  },
};
