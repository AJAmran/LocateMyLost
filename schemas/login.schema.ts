import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .nonempty("Email is Required"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
});

export default loginSchema;
