import { Bar } from "../../models/bar/types";
import { sleep } from "../sleep";

const dummyData: Bar = {
  width: 300,
  height: 150,
  color: "#aaccff",
};

export const barRepo = {
  async fetch(): Promise<Bar> {
    await sleep(3000);
    return dummyData;
  },
};
