import envConfig from "@/config/envConfig";

export const getRecentPost = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=7`
  );

  return res.json();
};
