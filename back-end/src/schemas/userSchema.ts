import z from "zod";

const ALL_FIELDS_REQUIRED = 'All fields must be filled';

export const loginSchema = z.object({
  email: z.string()
    .email()
    .nonempty(ALL_FIELDS_REQUIRED),
  password: z.string()
    .nonempty(ALL_FIELDS_REQUIRED)
});

export type Login = z.infer<typeof loginSchema>

export const userRegisterSchema = z.object({
  name: z.string()
    .nonempty(ALL_FIELDS_REQUIRED),
  email: z.string()
    .email()
    .nonempty(ALL_FIELDS_REQUIRED),
  password: z.string()
    .nonempty(ALL_FIELDS_REQUIRED),
});

export type SignUp = z.infer<typeof userRegisterSchema>

export const userCreateSchema = z.object({
  name: z.string()
    .nonempty(ALL_FIELDS_REQUIRED),
  email: z.string()
    .email()
    .nonempty(ALL_FIELDS_REQUIRED),
  password: z.string()
    .nonempty(ALL_FIELDS_REQUIRED),
  role: z.string()
    .optional()
});

export type CreateUser = z.infer<typeof userCreateSchema>
