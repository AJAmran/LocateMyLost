import { z } from "zod";

const registerSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
  mobile: z
    .string()
    .regex(/^(\+?\d{1,3}[-.\s]?|)?\d{10}$/, "Invalid mobile number")
    .nonempty("Mobile number is required"),
  profilePhoto: z
    .string()
    .url("Invalid URL")
    .nonempty("Profile photo URL is required"),
});

export default registerSchema;
