"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const registerUser = async () => {
  try {
    const {data} = axiosInstance.post("/auth/register")

  } catch (error) {
    throw new Error(error);
  }
};
