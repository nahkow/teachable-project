import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const courseSchema = z.object({
  name: z.string(),
  heading: z.string(),
  image_url: z.string(),
  id: z.number(),
});

export type Course = z.infer<typeof courseSchema>;