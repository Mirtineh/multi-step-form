import { z } from "zod";
export const UserSchema = z.object({
  name: z.string().min(1, "This field is required"),
  email: z.string().email("Invalid email").min(1, "This field is required"),
  phone: z.string().min(1, "This field is required"),
});
export type FlattenedErrors = z.inferFlattenedErrors<typeof UserSchema>;
export type ErrorType = z.infer<typeof UserSchema>;
