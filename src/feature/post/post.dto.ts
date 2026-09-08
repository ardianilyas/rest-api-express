import z from "zod";
import { posts } from "../../db/schema";

export type Post = typeof posts.$inferSelect;

export const createPostDto = z.object({
  title: z.string().min(1, { error: "Title is required" }).min(3, { error: "Title must be at least 3 characters" }),
  content: z.string().min(1, { error: "Content is required" }),
  isActive: z.boolean().optional(),
});

export const updatePostDto = createPostDto.partial();
export const getPostDto = z.uuid({ error: "Invalid post id" });

export type CreatePostDto = z.infer<typeof createPostDto>;
export type UpdatePostDto = z.infer<typeof updatePostDto>;
export type GetPostDto = z.infer<typeof getPostDto>;
