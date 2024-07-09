import { z } from 'zod'

export const names = z.string({
  required_error: "Name is requiredasdasdasd",
  invalid_type_error: "Name must be a string",
});


export const Validation = {
  email: z
  .string()
  .min(1, { message: 'Is required' })
  .email({ message: 'Invalid email' }),
  name: z
  .string()
  .min(1, { message: 'Is required' }),
  phone: z
    .string()
    .min(1, { message: 'Is required' })
    .min(8, { message: 'Must be at least 8 characters long' })
}
