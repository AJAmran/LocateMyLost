import envConfig from "@/config/envConfig";
import { delay } from "@/utils/delay";

export const getRecentPost = async () => {
  console.log("baseapi", envConfig.baseApi);
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=7`
  );

  await delay(5000);
  return res.json();
};
