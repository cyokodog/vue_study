import { sleep } from "./sleep";

export const fetchData = async <T>(data: any, timer: number) => {
  await sleep(timer);
  return data as T;
};
