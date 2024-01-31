import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const studentsSchema = z.object({
  name: z.string(),
  email: z.string(),
  id: z.number(),
})

export type Student = z.infer<typeof studentsSchema>
