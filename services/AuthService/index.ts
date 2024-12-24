"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Registration failed.");
  }
};
