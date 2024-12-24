import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  mobileNumber: z.string().min(10, "Mobile number must be at least 10 digits"),
  profilePhoto: z.string().url("Invalid URL"),
});

export default registerSchema;
